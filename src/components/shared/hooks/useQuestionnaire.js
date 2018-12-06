import { useContext } from 'react'
import { QuestionnaireContext } from '../providers/questionnaire.js'

export default () => {
  const { state, dispatch } = useContext(QuestionnaireContext)

  return {
    context: {
      state,
      dispatch,
    },
  }
}
