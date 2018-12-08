import { useContext } from 'react'
import { QuestionnaireContext } from '../providers/questionnaire/index'

export default () => {
  const { questionnaireState, questionnaireDispatch } = useContext(
    QuestionnaireContext
  )

  return {
    context: {
      questionnaireState,
      questionnaireDispatch,
    },
  }
}
