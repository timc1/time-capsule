import { useReducer, useRef, useEffect } from 'react'
import { debounce, deepClone } from '../../../utils'

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
      'data-ischecked': state[index].isChecked,
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
    [JSON.stringify(items)]
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
  const clonedCopy = deepClone(state)
  switch (type) {
    case 'TOGGLE':
      clonedCopy[payload.index].isChecked = !clonedCopy[payload.index].isChecked
      return clonedCopy
    case 'TOGGLE_LIMIT':
      if (payload.limit === 1) {
        if (clonedCopy[payload.index].isChecked) {
          clonedCopy[payload.index].isChecked = false
        } else {
          clonedCopy.forEach((item, index) => {
            if (index === payload.index) {
              item.isChecked = true
            } else {
              item.isChecked = false
            }
          })
        }
      } else {
        // TODO: prevent state update if user already has payload.limit amount of items checked
      }

      return clonedCopy
    case 'SETUP':
      return payload.items
    default:
      return state
  }
}
