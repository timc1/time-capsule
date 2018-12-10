import { useReducer, useRef, useEffect } from 'react'
import { debounce, deepClone } from '../../../utils'
export { Checkbox } from './intermediate-components/checkbox'

export default ({
  items = [],
  onSuccess,
  onError,
  callBeforeDebounceFn,
  limit,
}) => {
  const clonedCopy = deepClone(items)

  const [state, dispatch] = useReducer(reducer, clonedCopy)

  const getCheckboxItemProps = ({ id, ...props }) => {
    const index = state.findIndex(cbox => cbox.id === id)

    return {
      id,
      isChecked: state[index].isChecked,
      onClick: e => {
        dispatch({
          type: limit ? 'TOGGLE_LIMIT' : 'TOGGLE',
          payload: {
            index,
            limit,
          },
        })
      },
      ...props,
    }
  }

  const firstRender = useRef(true)
  useEffect(
    () => {
      if (firstRender.current) {
        firstRender.current = false
        return
      }
      dispatch({
        type: 'SETUP',
        payload: {
          items: clonedCopy,
        },
      })
    },
    [items.length]
  )

  const debouncedRef = useRef()
  useEffect(
    () => {
      if (callBeforeDebounceFn) callBeforeDebounceFn()

      const debouncedObj = debounce(
        debouncedRef,
        () => {
          const selectedItems = state.filter(item => item.isChecked)
          if (selectedItems.length > 0 && onSuccess) onSuccess(state)
          if (selectedItems.length === 0 && onError) onError(state)
        },
        600
      )

      return () => debouncedObj.clear()
    },
    [JSON.stringify(state)]
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
      const clonedCopy = deepClone(state)
      clonedCopy[payload.index].isChecked = !clonedCopy[payload.index].isChecked
      return clonedCopy
    case 'TOGGLE_LIMIT':
      console.log('ayoo')
      return state
    case 'SETUP':
      console.log('hi', payload)
      return payload.items
    default:
      return state
  }
}
