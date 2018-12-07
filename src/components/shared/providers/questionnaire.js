import React, { useReducer } from 'react'
import { getQuestionnaire } from '../../../models/questionnaire'

const QuestionnaireContext = React.createContext()

const QuestionnaireProvider = React.memo(({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <QuestionnaireContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </QuestionnaireContext.Provider>
  )
})

const initialState = getQuestionnaire()

const reducer = (state, { type, payload }) => {
  console.log('type, payload', type, payload)
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
      const updatedAnswers = Object.assign({}, state.answers, {
        [payload.id]: payload.value,
      })
      return {
        ...state,
        answers: updatedAnswers,
      }
    default:
      return state
  }
}

export { QuestionnaireContext, QuestionnaireProvider }
