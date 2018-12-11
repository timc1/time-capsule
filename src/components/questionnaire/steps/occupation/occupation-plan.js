import React from 'react'
import { DebouncedInput } from '../shared/index'
import useQuestionnaire from '../../../shared/hooks/useQuestionnaire'

export default React.memo(() => {
  const { context } = useQuestionnaire()
  return (
    <DebouncedInput
      type="textarea"
      id="occupationPlan"
      initialValue={context.questionnaireState.answers.occupationPlan}
      onSuccess={success => console.log('success', success)}
      onError={error => console.log('error', error)}
    />
  )
})
