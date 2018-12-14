import React from 'react'
import { DebouncedInput } from '../shared/index'
import useQuestionnaire from '../../../shared/hooks/useQuestionnaire'

export default React.memo(({ canContinue, setContinue }) => {
  const { context } = useQuestionnaire()
  return (
    <DebouncedInput
      type="textarea"
      id="moonshot"
      initialValue={context.questionnaireState.answers.moonshot}
      onSuccess={values => {
        if (!canContinue) setContinue(true)
        context.questionnaireDispatch({
          type: 'UPDATE_ANSWERS',
          payload: {
            id: 'moonshot',
            value: values,
          },
        })
      }}
      onError={error => {
        if (canContinue) setContinue(false)
      }}
      placeholder={`One of the biggest things I've been looking forward to is traveling solo across Asia. My plan is to go in the Fall of ${new Date().getFullYear() +
        1}.`}
      maxLength={`500`}
    />
  )
})
