import React, { useReducer, useRef, useState } from 'react'

import useQuestionnaire from '../../../shared/hooks/useQuestionnaire'

import Modal from '../../../shared/modal'

import AddNewCheckboxItem from './sections/add-new-checkbox-item'
import {
  ClickForMoreButton,
  Section,
  SectionName,
  Checkboxes,
} from '../shared/index'
import { Message } from '../../../shared/form-components/index'

import {
  getInitialUIState,
  occupationsUIReducer,
  formatMessage,
} from './reducers'

export default React.memo(({ canContinue, setContinue }) => {
  // useQuestionnaire stores all our questionnaire values.
  const { context } = useQuestionnaire()

  // This reducer manages UI state specifically relevant within this component.
  const [state, dispatch] = useReducer(
    occupationsUIReducer,
    getInitialUIState(context)
  )

  const [message, setMessage] = useState({
    error: false,
    value: '',
  })

  // Occupation role name
  // Use ref to prevent first useEffect call on setting error messages.
  const firstRender = useRef(true)

  // Occupation role work place
  const rolesFirstRender = useRef(true)

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
        backgroundColor="var(--black2)"
      >
        {state.optionsModalContent}
      </Modal>
      <Message message={message} />
      <Section>
        <SectionName>Role</SectionName>
        <Checkboxes
          items={context.questionnaireState.answers.occupationRole}
          onSuccess={value => {
            if (!canContinue) setContinue(true)
            setMessage({
              error: false,
              value: formatMessage({ roles: value }),
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

            dispatch({
              type: 'SHOW_COMPANY_TYPE',
            })
          }}
          onError={error => {
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

            dispatch({
              type: 'HIDE_COMPANY_TYPE',
            })
          }}
          callBeforeDebounceFn={() =>
            setMessage({
              error: false,
              value: '',
            })
          }
        />
        <ClickForMoreButton
          onClick={e =>
            dispatch({
              type: 'TOGGLE_MODAL_ON',
              payload: {
                modal: (
                  <AddNewCheckboxItem
                    toggleModal={toggleModal}
                    sectionToUpdate="occupationRole"
                    title="I am currently a..."
                    placeholder="Small business owner"
                  />
                ),
              },
            })
          }
        >
          <span>More</span>
        </ClickForMoreButton>
      </Section>
      {state.isCompanyTypeShowing && (
        <>
          <Section>
            <SectionName>Currently at</SectionName>
            <Checkboxes
              items={context.questionnaireState.answers.occupationPlace}
              onSuccess={value => {
                if (rolesFirstRender.current) {
                  rolesFirstRender.current = false
                  return
                }

                context.questionnaireDispatch({
                  type: 'UPDATE_OCCUPATION',
                  payload: {
                    id: 'occupationPlace',
                    value,
                  },
                })
              }}
              onError={error => {
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
              }}
            />
            <ClickForMoreButton
              onClick={e =>
                dispatch({
                  type: 'TOGGLE_MODAL_ON',
                  payload: {
                    modal: (
                      <AddNewCheckboxItem
                        toggleModal={toggleModal}
                        sectionToUpdate="occupationPlace"
                        title="I current work at"
                        placeholder="an agency in Los Angeles"
                      />
                    ),
                  },
                })
              }
            >
              <span>More</span>
            </ClickForMoreButton>
          </Section>
          <Section>
            <SectionName>How I'm feeling</SectionName>
            <Checkboxes
              items={context.questionnaireState.answers.occupationHappiness}
              onSuccess={success => console.log('success', success)}
              onError={error => console.log('error', error)}
              limit={1}
            />
          </Section>
        </>
      )}
    </>
  )
})
