import React, { useReducer } from 'react'
import { getQuestionnaire } from '../../../../models/questionnaire'
import { questionnaireReducer } from './reducers'

const QuestionnaireContext = React.createContext()

const QuestionnaireProvider = React.memo(({ children }) => {
  const [questionnaireState, questionnaireDispatch] = useReducer(
    questionnaireReducer,
    initialQuestionnaireState
  )

  console.log('questionnaireState', questionnaireState)

  return (
    <QuestionnaireContext.Provider
      value={{
        questionnaireState,
        questionnaireDispatch,
      }}
    >
      {children}
    </QuestionnaireContext.Provider>
  )
})

const initialQuestionnaireState = getQuestionnaire()

export { QuestionnaireContext, QuestionnaireProvider }
