import { useReducer } from 'react'

// initialState = [
//   {id: 'value1', name: '', isChecked: false },
//   {id: 'value2', name: '', isChecked: true },
//   {id: 'value3', name: '', isChecked: false },
// ]
export default ({ initialState = [] }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const getCheckboxItemProps = ({ id, onClick, ...props }) => {
    const index = state.findIndex(cbox => cbox.id === id)
    return {
      id,
      isChecked: state[index].isChecked,
      onClick: e => {
        if (onClick) onClick(e)
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

  const addCheckboxItem = name => {
    const id = name.trim().toLowerCase()
    if (state.findIndex(val => val.id === id) === -1) {
      // doesn't exist, create a new record
      console.log('create')
    } else {
      // exists, update current record to isChecked = true
      console.log('toggle checked')
    }
  }

  return { state, getCheckboxItemProps, addCheckboxItem }
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'TOGGLE':
      const copy = state.slice()
      copy.forEach(item => {
        if (item.id === payload.id) {
          item.isChecked = !item.isChecked
          return
        }
      })
      return copy
    default:
      return state
  }
}
