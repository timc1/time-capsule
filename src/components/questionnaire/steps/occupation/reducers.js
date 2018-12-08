import { randomEmoji } from '../../../../utils'

const initialUIState = {
  isCompanyTypeShowing: false,
  isHappinessShowing: false,
  isOptionsModalShowing: false,
  optionsModalContent: null,
}

const occupationsUIReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SHOW_COMPANY_TYPE':
      return {
        ...state,
        isCompanyTypeShowing: true,
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
      return initialUIState
    default:
      return state
  }
}

const formatMessage = items => {
  const selected = items.filter(i => i.isChecked)
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

export { initialUIState, occupationsUIReducer, formatMessage }
