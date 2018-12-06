import React from 'react'
import SetupIndex from '../components/questionnaire/index'
import { QuestionnaireProvider } from '../components/shared/providers/questionnaire'

export default () => (
  <QuestionnaireProvider>
    <SetupIndex />
  </QuestionnaireProvider>
)
