import React from 'react'
import SetupIndex from '../components/questionnaire/index'
import { QuestionnaireProvider } from '../components/shared/providers/questionnaire/index'

export default () => {
  return (
    <QuestionnaireProvider>
      <SetupIndex />
    </QuestionnaireProvider>
  )
}
