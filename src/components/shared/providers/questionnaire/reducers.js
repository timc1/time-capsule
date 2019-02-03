import { deepClone } from '../../../../utils'

const questionnaireReducer = (state, { type, payload }) => {
  console.log(state)
  switch (type) {
    case 'NEXT':
      return {
        ...state,
        meta: {
          currentStepId: payload.value,
        },
      }
    case 'UPDATE_USER':
      const user = Object.assign({}, state.user, payload.user)
      return {
        ...state,
        user,
      }
    case 'UPDATE_ANSWERS':
      return {
        ...state,
        answers: {
          ...state.answers,
          [payload.id]: payload.value,
        },
      }
    case 'ADD_UNIQUE_CHECKBOX_ITEM':
      const copy = deepClone(state.answers[payload.id])
      copy.push(payload.value)

      return {
        ...state,
        answers: {
          ...state.answers,
          [payload.id]: copy,
        },
      }
    default:
      return state
  }
}

export { questionnaireReducer }
