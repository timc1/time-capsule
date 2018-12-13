import React from 'react'
import { DebouncedInput } from '../shared/index'
import useQuestionnaire from '../../../shared/hooks/useQuestionnaire'

export default React.memo(({ canContinue, setContinue }) => {
  const { context } = useQuestionnaire()
  return (
    <DebouncedInput
      type="textarea"
      id="personalHealthPlan"
      initialValue={context.questionnaireState.answers.personalHealthPlan}
      onSuccess={values => {
        if (!canContinue) setContinue(true)
        context.questionnaireDispatch({
          type: 'UPDATE_ANSWERS',
          payload: {
            id: 'personalHealthPlan',
            value: values,
          },
        })
      }}
      onError={error => {
        if (canContinue) setContinue(false)
      }}
      placeholder="I will run 365 miles this upcoming year."
      maxLength="500"
    />
  )
})
