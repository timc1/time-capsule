import React, { useReducer, useRef, useState } from 'react'

import useQuestionnaire from '../../../shared/hooks/useQuestionnaire'
import useCheckbox, { Checkbox } from '../../../shared/hooks/useCheckbox'

import Modal from '../../../shared/modal'

import { AddNewOccupationItem } from './sections/add-new-occupation'
import { ClickForMoreButton, SectionName } from '../shared/index'
import { Message } from '../../../shared/form-components/index'

import { initialUIState, occupationsUIReducer, formatMessage } from './reducers'

export default React.memo(({ canContinue, setContinue }) => {
  // useQuestionnaire stores all our questionnaire values
  const { context } = useQuestionnaire()

  // This reducer manages UI state specifically relevant within this component
  const [state, dispatch] = useReducer(occupationsUIReducer, initialUIState)

  const [message, setMessage] = useState({
    error: false,
    value: '',
  })

  // Use ref to prevent first useEffect call on setting error messages.
  const firstRender = useRef(true)
  const {
    getCheckboxItemProps: getRoleCheckboxItemProps,
    items: roleItems,
    dispatchRoleCheckbox,
  } = useCheckbox({
    items: context.questionnaireState.answers.occupationRole,
    onSuccess: value => {
      if (!canContinue) setContinue(true)
      setMessage({
        error: false,
        value: formatMessage(value),
      })

      if (firstRender.current) {
        firstRender.current = false
        return
      }

      context.questionnaireDispatch({
        type: 'UPDATE_OCCUPATION',
        payload: {
          id: 'occupationRole',
          value,
        },
      })
    },
    onError: error => {
      if (canContinue) setContinue(false)
      if (firstRender.current) {
        firstRender.current = false
        return
      }
      setMessage({
        error: true,
        value: 'You need to select something!',
      })

      context.questionnaireDispatch({
        type: 'UPDATE_OCCUPATION',
        payload: {
          id: 'occupationRole',
          value: error,
        },
      })
    },
    callBeforeDebounceFn: () =>
      setMessage({
        error: false,
        value: '',
      }),
  })

  const rolesFirstRender = useRef(true)
  const {
    getCheckboxItemProps: getPlaceItemProps,
    items: occupationPlaceItems,
    dispatchCheckbox: dispatchOccupationPlace,
  } = useCheckbox({
    items: context.questionnaireState.answers.occupationPlace,
    onSuccess: value => {
      console.log('value', value)
      context.questionnaireDispatch({
        type: 'UPDATE_OCCUPATION',
        payload: {
          id: 'occupationPlace',
          value: value,
        },
      })
    },
    onError: error => {
      console.log('error')
      if (rolesFirstRender.current) {
        rolesFirstRender.current = false
        return
      }
      context.questionnaireDispatch({
        type: 'UPDATE_OCCUPATION',
        payload: {
          id: 'occupationPlace',
          value: error,
        },
      })
    },
  })

  const toggleModal = action =>
    dispatch({
      type: 'TOGGLE_MODAL_OFF',
    })

  return (
    <>
      <Modal
        domElement="modal-root"
        toggleModal={toggleModal}
        isShowing={state.isOptionsModalShowing}
        backgroundColor="rgba(0,0,0,.9)"
      >
        {state.optionsModalContent}
      </Modal>
      <Message message={message} />
      <SectionName>Role</SectionName>
      <Checkbox
        items={roleItems}
        getCheckboxItemProps={getRoleCheckboxItemProps}
      />
      <ClickForMoreButton
        onClick={e =>
          dispatch({
            type: 'TOGGLE_MODAL_ON',
            payload: {
              modal: (
                <AddNewOccupationItem
                  dispatchCheckbox={dispatchRoleCheckbox}
                  toggleModal={toggleModal}
                />
              ),
            },
          })
        }
      >
        <span>More</span>
      </ClickForMoreButton>
      <SectionName>Place</SectionName>
      <Checkbox
        items={occupationPlaceItems}
        getCheckboxItemProps={getPlaceItemProps}
      />
    </>
  )
})
