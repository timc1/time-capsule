import { randomEmoji } from '../../../../utils'

const getInitialUIState = (context = {}) => {
  const hasOccupation =
    context.questionnaireState.answers.occupationRole.filter(i => i.isChecked)
      .length > 0
  return {
    isCompanyTypeShowing: hasOccupation ? true : false,
    isHappinessShowing: hasOccupation ? true : false,
    isOptionsModalShowing: false,
    optionsModalContent: null,
  }
}

const occupationsUIReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SHOW_COMPANY_TYPE':
      return {
        ...state,
        isCompanyTypeShowing: true,
      }
    case 'HIDE_COMPANY_TYPE':
      return {
        ...state,
        isCompanyTypeShowing: false,
      }
    case 'TOGGLE_MODAL_ON':
      return {
        ...state,
        isOptionsModalShowing: true,
        optionsModalContent: payload.modal,
      }
    case 'TOGGLE_MODAL_OFF':
      return {
        ...state,
        isOptionsModalShowing: false,
        optionsModalContent: null,
      }
    case 'RESET':
      return getInitialUIState()
    default:
      return state
  }
}

const formatMessage = ({ roles }) => {
  const selected = roles.filter(i => i.isChecked)
  let formatted = ''

  selected.forEach((item, index) => {
    if (index === selected.length - 1 && index !== 0) {
      formatted += ' and '
    }
    formatted += `${item.name}`
    if (index !== selected.length - 1 && index !== selected.length - 2) {
      formatted += ', '
    }
  })

  return formatted.toLowerCase() + ` ${randomEmoji()}`
}

export { getInitialUIState, occupationsUIReducer, formatMessage }
