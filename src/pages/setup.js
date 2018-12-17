import React from 'react'
import SetupIndex from '../components/questionnaire/index'
import { QuestionnaireProvider } from '../components/shared/providers/questionnaire/index'
import Helmet from 'react-helmet'

export default () => {
  return (
    <>
      <Helmet
        title={`Setup — New Year Time Capsule`}
        meta={[
          { name: 'title', content: 'Setup - New Year Time Capsule' },
          {
            property: 'og:title',
            content: 'Setup - New Year Time Capsule',
          },
          {
            name: 'twitter:title',
            content: 'Setup - New Year Time Capsule',
          },
        ]}
      />
      <h1 className="hidden">Setup - Time Capsule</h1>
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
