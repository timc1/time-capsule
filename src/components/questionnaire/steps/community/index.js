import React from 'react'
import { DebouncedInput } from '../shared/index'
import useQuestionnaire from '../../../shared/hooks/useQuestionnaire'

export default React.memo(({ canContinue, setContinue }) => {
  const { context } = useQuestionnaire()
  return (
    <DebouncedInput
      type="textarea"
      id="community"
      initialValue={context.questionnaireState.answers.community}
      onSuccess={values => {
        if (!canContinue) setContinue(true)
        context.questionnaireDispatch({
          type: 'UPDATE_ANSWERS',
          payload: {
            id: 'community',
            value: values,
          },
        })
      }}
      onError={error => {
        if (canContinue) setContinue(false)
      }}
      placeholder={`I have been creating graphic design tutorials and posting them on YouTube this past year. I've gotten great feedback and plan on being more consistent with uploading - once a week.`}
      maxLength="500"
    />
  )
})
