import React from 'react'
import useQuestionnaire from '../../../shared/hooks/useQuestionnaire'
import { Section, Checkboxes } from '../shared/index'

export default React.memo(({ canContinue, setContinue, dispatchModal }) => {
  const { context } = useQuestionnaire()

  return (
    <Section>
      <Checkboxes
        items={context.questionnaireState.answers.personalHealth}
        onSuccess={value => {
          if (!canContinue) setContinue(true)
          context.questionnaireDispatch({
            type: 'UPDATE_ANSWERS',
            payload: {
              id: 'personalHealth',
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
