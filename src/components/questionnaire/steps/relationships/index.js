import React from 'react'
import { Section, Checkboxes } from '../shared/index'

import useQuestionnaire from '../../../shared/hooks/useQuestionnaire'

export default React.memo(({ canContinue, setContinue }) => {
  const { context } = useQuestionnaire()
  return (
    <Section>
      <Checkboxes
        items={context.questionnaireState.answers.currentRelationships}
        onSuccess={value => {
          if (!canContinue) setContinue(true)

          context.questionnaireDispatch({
            type: 'UPDATE_ANSWERS',
            payload: {
              id: 'currentRelationships',
              value,
            },
          })
        }}
        onError={error => {
          if (canContinue) setContinue(false)
        }}
        limit={1}
      />
    </Section>
  )
})
