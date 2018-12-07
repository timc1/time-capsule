import React, { useReducer, useEffect } from 'react'
import {
  getQuestionnaire,
  getQuestionnaireOptions,
} from '../../../../models/questionnaire'
import { questionnaireReducer, questionnaireOptionsReducer } from './reducers'

const QuestionnaireContext = React.createContext()

const QuestionnaireProvider = React.memo(({ children }) => {
  const [questionnaireState, questionnaireDispatch] = useReducer(
    questionnaireReducer,
    initialQuestionnaireState
  )
  const [questionnaireOptionsState, questionnaireOptionsDispatch] = useReducer(
    questionnaireOptionsReducer,
    initialQuestionnaireOptions
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
        questionnaireOptionsState,
        questionnaireOptionsDispatch,
      }}
    >
      {children}
    </QuestionnaireContext.Provider>
  )
})

const initialQuestionnaireState = getQuestionnaire()

const initialQuestionnaireOptions = getQuestionnaireOptions()

export { QuestionnaireContext, QuestionnaireProvider }
