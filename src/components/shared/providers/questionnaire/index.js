import React, { useReducer, useEffect } from 'react'
import { getQuestionnaire } from '../../../../models/questionnaire'
import { questionnaireReducer } from './reducers'

const QuestionnaireContext = React.createContext()

const QuestionnaireProvider = React.memo(({ children }) => {
  const [questionnaireState, questionnaireDispatch] = useReducer(
    questionnaireReducer,
    initialQuestionnaireState
  )

  useEffect(() => {
    const root = document.getElementById('___gatsby')
    const el = document.createElement('div')
    el.setAttribute('id', 'modal-root')
    document.body.insertBefore(el, root)
    return () => document.body.removeChild(el)
  }, [])

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
