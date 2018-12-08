import { useReducer, useRef, useEffect } from 'react'
import { debounce } from '../../../utils'
export { Checkbox } from './intermediate-components/checkbox'

export default ({ items = [], onSuccess, onError, callBeforeDebounceFn }) => {
  const [state, dispatch] = useReducer(reducer, items)

  useEffect(
    () => {
      dispatch({
        type: 'SETUP',
        payload: {
          items,
        },
      })
    },
    [items.length]
  )

  const getCheckboxItemProps = ({ id, ...props }) => {
    const index = state.findIndex(cbox => cbox.id === id)
    return {
      id,
      isChecked: state[index].isChecked,
      onClick: e => {
        dispatch({
          type: 'TOGGLE',
          payload: {
            id,
          },
        })
      },
      ...props,
    }
  }

  const debouncedRef = useRef()
  useEffect(
    () => {
      if (callBeforeDebounceFn) callBeforeDebounceFn()
      const selectedItems = items.filter(item => item.isChecked)
      const debouncedObj = debounce(
        debouncedRef,
        () => {
          if (selectedItems.length > 0 && onSuccess) {
            onSuccess(items)
          }
          if (selectedItems.length === 0 && onError) {
            onError('No items selected.')
          }
        },
        500
      )

      return () => debouncedObj.clear()
    },
    [JSON.stringify(items)]
  )

  return {
    // Spreads the current state onto each checkbox item.
    getCheckboxItemProps,
    items: state,
    // Expose dispatch - allows user to dispatch actions if necessary - inversion of control.
    dispatchCheckbox: dispatch,
  }
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'TOGGLE':
      const copy = state.slice()
      copy.forEach(item => {
        if (item.id === payload.id) {
          item.isChecked = !item.isChecked
        }
      })
      return copy
    case 'SETUP':
      return payload.items
    default:
      return state
  }
}
