import React from 'react'
import { DebouncedInput } from '../shared/index'
import useQuestionnaire from '../../../shared/hooks/useQuestionnaire'

export default React.memo(({ canContinue, setContinue }) => {
  const { context } = useQuestionnaire()
  return (
    <DebouncedInput
      type="textarea"
      id="relationshipsPlan"
      initialValue={context.questionnaireState.answers.occupationPlan}
      onSuccess={values => {
        if (!canContinue) setContinue(true)
        context.questionnaireDispatch({
          type: 'UPDATE_ANSWERS',
          payload: {
            id: 'occupationPlan',
            value: values,
          },
        })
      }}
      onError={error => {
        if (canContinue) setContinue(false)
      }}
      placeholder="I am going to reach out and try to meet up with someone I look up to once a month."
      maxLength="500"
    />
  )
})
