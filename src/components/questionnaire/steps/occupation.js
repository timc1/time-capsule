import React, { useReducer } from 'react'

import useQuestionnaire from '../../shared/hooks/useQuestionnaire'
import useCheckbox, { Checkbox } from '../../shared/hooks/useCheckbox'

import Modal from '../../shared/modal'

import { AddNewOccupationItem } from './intermediate-components/occupation'
import { ClickForMoreButton } from './intermediate-components/shared'

export default React.memo(({ canContinue, setContinue }) => {
  // useQuestionnaire stores all our questionnaire values
  const { context } = useQuestionnaire()

  // This reducer manages UI state specifically relevant within this component
  const [state, dispatch] = useReducer(reducer, initialState)

  console.log('state', state)
  console.log('context', context)
  const { items, getCheckboxItemProps, dispatchCheckbox } = useCheckbox({
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
      <Modal
        domElement="modal-root"
        toggleModal={action =>
          dispatch({
            type: 'TOGGLE_MODAL_OFF',
          })
        }
        isShowing={state.isOptionsModalShowing}
        backgroundColor="rgba(2, 43, 58,.9)"
      >
        <AddNewOccupationItem
          items={items}
          dispatchCheckbox={dispatchCheckbox}
        />
      </Modal>
      <Checkbox getCheckboxItemProps={getCheckboxItemProps} items={items} />
      <ClickForMoreButton
        onClick={e =>
          dispatch({
            type: 'TOGGLE_MODAL_ON',
            payload: {
              modal: {},
            },
          })
        }
      >
        <span>More</span>
      </ClickForMoreButton>
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
    { id: 'contentCreator', name: 'Content Creator' },
    ...context.state.answers.occupationAdditionalRoles,
  ]

  const filtered = roles.map(role => {
    if (
      context.state.answers.occupationRole.findIndex(i => i.id === role.id) !==
        -1 &&
      context.state.answers.occupationAdditionalRoles.findIndex(
        i => i.id === role.id
      ) !== -1
    ) {
      role.isChecked = true
    } else {
      role.isChecked = false
    }
    return role
  })

  return filtered
}
