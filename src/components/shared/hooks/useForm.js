import { useReducer } from 'react'

const reducer = (state, { type, payload }) => {
  //console.log(type, payload)
  switch (type) {
    case 'INPUT_CHANGE':
      return {
        ...state,
        [payload.id]: payload.value,
      }
    case 'TOGGLE_ERROR':
      return {
        ...state,
        errors: {
          ...state.errors,
          [payload.id]: payload.value,
        },
      }
    case 'REMOVE_ERROR':
      delete state.errors[payload.id]
      return state
    default:
      return state
  }
}

export default ({
  initialValues = {},
  validators = {},
  validateOnChange = false,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialValues,
    errors: {},
  })

  const validate = (e, id) => {
    if (validators[id]) {
      const error = validators[id](e.target.value)
      if (error && !state.errors[id]) {
        dispatch({
          type: 'TOGGLE_ERROR',
          payload: {
            id,
            value: error,
          },
        })
      } else if (!error && state.errors[id]) {
        dispatch({
          type: 'REMOVE_ERROR',
          payload: {
            id,
          },
        })
      }
    }
  }

  const getFormProps = () => ({
    onSubmit: e => {
      e.preventDefault()
      console.log('submit')
    },
  })

  const getInputStateAndProps = ({ id, onChange, ...props }) => ({
    id,
    value: state[id],
    onChange: e => {
      if (onChange) {
        onChange(e)
      }
      dispatch({
        type: 'INPUT_CHANGE',
        payload: {
          id,
          value: e.target.value,
        },
      })

      if (validateOnChange) {
        validate(e, id)
      }
    },
    onBlur: e => {
      validate(e, id)
    },
    ...props,
  })

  return {
    errors: state.errors,
    getFormProps,
    getInputStateAndProps,
    // We expose state to allow users access to read current state if they wish.
    state,
  }
}
