import React, { useReducer } from 'react'

import useQuestionnaire from '../../shared/hooks/useQuestionnaire'
import useCheckbox, { Checkbox } from '../../shared/hooks/useCheckbox'

import Modal from '../../shared/modal'

export default React.memo(({ canContinue, setContinue }) => {
  // useQuestionnaire stores all our questionnaire values
  const { context } = useQuestionnaire()

  // This reducer manages UI state specifically relevant within this component
  const [state, dispatch] = useReducer(reducer, initialState)

  console.log('state', state)
  console.log('context', context)
  const { items, getCheckboxItemProps } = useCheckbox({
    items: getOccupationRoles(context),
    onSuccess: values => {
      context.dispatch({
        type: 'UPDATE_ANSWER',
        payload: {
          id: 'occupationRole',
          value: values,
        },
      })

      // Show next step.
      dispatch({
        type: 'SHOW_COMPANY_TYPE',
      })
    },
    onError: error => {
      console.log('error', error)
      dispatch({
        type: 'RESET',
      })
    },
  })

  return (
    <>
      <Checkbox getCheckboxItemProps={getCheckboxItemProps} items={items} />
      <button
        onClick={e =>
          dispatch({
            type: 'TOGGLE_MODAL',
            payload: {
              modal: <div>hii!</div>,
            },
          })
        }
      >
        Options
      </button>
    </>
  )
})

const initialState = {
  isCompanyTypeShowing: false,
  isHappinessShowing: false,
  isOptionsModalShowing: false,
  optionsModalContent: null,
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SHOW_COMPANY_TYPE':
      return {
        ...state,
        isCompanyTypeShowing: true,
      }
    case 'TOGGLE_MODAL':
      return {
        ...state,
        isOptionsModalShowing: true,
        optionsModalContent: payload.modal,
      }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

// Returns a filtered list of roles, given our base questionnaire context, with an isChecked property.
const getOccupationRoles = context => {
  const roles = [
    { id: 'student', name: 'Student' },
    { id: 'designer', name: 'Designer' },
    { id: 'developer', name: 'Developer' },
    { id: 'businessPerson', name: 'Business Person' },
    { id: 'artist', name: 'Artist' },
    { id: 'content', name: 'Content Creator' },
    ...context.state.answers.occupationAdditionalRoles,
  ]
  const filtered = roles.map(role => {
    if (
      context.state.answers.occupationRole.findIndex(i => i.id === role.id) !==
      -1
    ) {
      role.isChecked = true
    } else {
      role.isChecked = false
    }
    return role
  })

  return filtered
}
