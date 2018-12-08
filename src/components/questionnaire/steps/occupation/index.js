import React, { useReducer, useRef, useState } from 'react'

import useQuestionnaire from '../../../shared/hooks/useQuestionnaire'
import useCheckbox, { Checkbox } from '../../../shared/hooks/useCheckbox'

import Modal from '../../../shared/modal'

import { AddNewOccupationItem } from './sections/add-new-occupation'
import { ClickForMoreButton } from '../shared/index'
import { Message } from '../../../shared/form-components/index'

import { initialUIState, occupationsUIReducer, formatMessage } from './reducers'

export default React.memo(({ canContinue, setContinue }) => {
  // useQuestionnaire stores all our questionnaire values
  const { context } = useQuestionnaire()

  // This reducer manages UI state specifically relevant within this component
  const [state, dispatch] = useReducer(occupationsUIReducer, initialUIState)
  //
  const [message, setMessage] = useState({
    error: false,
    value: '',
  })

  const firstUpdate = useRef(true)
  const { getCheckboxItemProps, items, dispatchCheckbox } = useCheckbox({
    items: context.questionnaireState.answers.occupationRole,
    onSuccess: value => {
      if (!canContinue) setContinue(true)
      if (firstUpdate.current) {
        firstUpdate.current = false
        return
      }
      context.questionnaireDispatch({
        type: 'UPDATE_ANSWER',
        payload: {
          id: 'occupationRole',
          value,
        },
      })
      setMessage({
        error: false,
        value: formatMessage(context),
      })
    },
    onError: error => {
      if (firstUpdate.current) {
        firstUpdate.current = false
        return
      }
      if (canContinue) setContinue(false)
      setMessage({
        error: true,
        value: 'You need to select something!',
      })
    },
    callBeforeDebounceFn: () =>
      setMessage({
        error: false,
        value: '',
      }),
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
        backgroundColor="rgba(2, 43, 58,.9)"
      >
        {state.optionsModalContent}
      </Modal>
      <Message message={message} />
      <Checkbox items={items} getCheckboxItemProps={getCheckboxItemProps} />
      <ClickForMoreButton
        onClick={e =>
          dispatch({
            type: 'TOGGLE_MODAL_ON',
            payload: {
              modal: (
                <AddNewOccupationItem
                  dispatchCheckbox={dispatchCheckbox}
                  toggleModal={toggleModal}
                />
              ),
            },
          })
        }
      >
        <span>More</span>
      </ClickForMoreButton>
    </>
  )
})
