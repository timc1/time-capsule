import React from 'react'
import SetupIndex from '../components/questionnaire/index'
import { QuestionnaireProvider } from '../components/shared/providers/questionnaire/index'
import Helmet from 'react-helmet'

export default () => {
  return (
    <>
      <Helmet
        title={`Setup — This Next Year`}
        meta={[
          { name: 'title', content: 'Setup - This Next Year' },
          {
            property: 'og:title',
            content: 'Setup - This Next Year',
          },
          {
            name: 'twitter:title',
            content: 'Setup - This Next Year',
          },
        ]}
      />
      <h1 className="hidden">Setup - This Next Year</h1>
      <h2 className="hidden">
        Get Started - write a letter to your future self, take action, receive
        it 365 days from today.
      </h2>
      <QuestionnaireProvider>
        <SetupIndex />
      </QuestionnaireProvider>
    </>
  )
}
