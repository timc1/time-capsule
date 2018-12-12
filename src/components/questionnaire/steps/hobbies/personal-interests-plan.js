import React from 'react'
import { DebouncedInput } from '../shared/index'
import useQuestionnaire from '../../../shared/hooks/useQuestionnaire'

export default React.memo(({ canContinue, setContinue }) => {
  const { context } = useQuestionnaire()
  return (
    <DebouncedInput
      type="textarea"
      id="hobbiesPlan"
      initialValue={context.questionnaireState.answers.hobbiesPlan}
      onSuccess={values => {
        if (!canContinue) setContinue(true)
        context.questionnaireDispatch({
          type: 'UPDATE_ANSWERS',
          payload: {
            id: 'hobbiesPlan',
            value: values,
          },
        })
      }}
      onError={error => {
        if (canContinue) setContinue(false)
      }}
      placeholder="I plan on attending a kickboxing class twice a week."
      maxLength="500"
    />
  )
})
