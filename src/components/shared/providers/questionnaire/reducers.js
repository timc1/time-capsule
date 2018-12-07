const questionnaireReducer = (state, { type, payload }) => {
  console.log('questionnaireReducer', type, payload)
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
    case 'UPDATE_ANSWER':
      return {
        ...state,
        answers: Object.assign({}, state.answers, {
          [payload.id]: payload.value,
        }),
      }
    case 'ADD_UNIQUE_OCCUPATION':
      const additionalRoles = state.answers.occupationAdditionalRoles.slice()
      additionalRoles.push(payload.value)
      return {
        ...state,
        answers: {
          ...state.answers,
          occupationAdditionalRoles: additionalRoles,
        },
      }
    default:
      return state
  }
}

const questionnaireOptionsReducer = (state, { type, payload }) => {
  switch (type) {
    default:
      return state
  }
}

export { questionnaireReducer, questionnaireOptionsReducer }
