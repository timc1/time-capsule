import { useReducer, useRef, useEffect } from 'react'
import { debounce } from '../../../utils'
export { Checkbox } from './intermediate-components/checkbox'

export default ({ items = [], onSuccess, onError }) => {
  const [state, dispatch] = useReducer(reducer, items)

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
      const selectedItems = state.filter(item => item.isChecked)
      const debouncedObj = debounce(
        debouncedRef,
        () => {
          if (selectedItems.length > 0 && onSuccess) {
            onSuccess(selectedItems)
          }
          if (selectedItems.length === 0 && onError) {
            onError('No items selected.')
          }
        },
        800
      )

      return () => debouncedObj.clear()
    },
    [JSON.stringify(state)]
  )

  return {
    getCheckboxItemProps,
    items: state,
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
    default:
      return state
  }
}
