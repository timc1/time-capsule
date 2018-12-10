const questionnaireReducer = (state, { type, payload }) => {
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
    case 'UPDATE_OCCUPATION':
      return {
        ...state,
        answers: {
          ...state.answers,
          [payload.id]: payload.value,
        },
      }
    case 'ADD_UNIQUE_CHECKBOX_ITEM':
      const copy = state.answers[payload.id].slice()
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
