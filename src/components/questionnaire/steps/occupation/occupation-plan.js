import React from 'react'
import { DebouncedInput } from '../shared/index'
import useQuestionnaire from '../../../shared/hooks/useQuestionnaire'

export default React.memo(({ canContinue, setContinue }) => {
  const { context } = useQuestionnaire()
  return (
    <DebouncedInput
      type="textarea"
      id="occupationPlan"
      initialValue={context.questionnaireState.answers.occupationPlan}
      onSuccess={values => {
        if (!canContinue) setContinue(true)
        context.questionnaireDispatch({
          type: 'UPDATE_OCCUPATION',
          payload: {
            id: 'occupationPlan',
            value: values.occupationPlan,
          },
        })
      }}
      onError={error => {
        if (canContinue) setContinue(false)
      }}
      placeholder="I've really enjoyed working with my creative director, and am interested in learning more about her field of work. So, I will help her with her work more this upcoming year and learn alongside her."
    />
  )
})
