import React, { useReducer, useRef, useState } from 'react'

import useQuestionnaire from '../../../shared/hooks/useQuestionnaire'

import AddNewCheckboxItem from '../shared/add-new-checkbox-item'
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

export default React.memo(({ canContinue, setContinue, dispatchModal }) => {
  // useQuestionnaire stores all our questionnaire values.
  const { context } = useQuestionnaire()

  // This reducer manages UI state specifically relevant within this component.
  const [state, dispatch] = useReducer(
    occupationsUIReducer,
    getInitialUIState(context)
  )

  const [message, setMessage] = useState({
    error: null,
    value: '',
  })

  // Occupation role name
  // Use ref to prevent first useEffect call on setting error messages.
  const occupationFirstRender = useRef(true)
  // Occupation role work place
  const rolesFirstRender = useRef(true)
  const happinessFirstRender = useRef(true)

  return (
    <>
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

            context.questionnaireDispatch({
              type: 'UPDATE_ANSWERS',
              payload: {
                id: 'occupationRole',
                value,
              },
            })

            dispatch({
              type: 'SHOW_COMPANY_TYPE',
            })

            if (occupationFirstRender.current) {
              occupationFirstRender.current = false
            }
          }}
          onError={error => {
            if (canContinue) setContinue(false)
            if (occupationFirstRender.current) {
              occupationFirstRender.current = false
              return
            }

            setMessage({
              error: true,
              value: 'You need to select something!',
            })

            context.questionnaireDispatch({
              type: 'UPDATE_ANSWERS',
              payload: {
                id: 'occupationRole',
                value: error,
              },
            })

            dispatch({
              type: 'HIDE_COMPANY_TYPE',
            })
          }}
          callBeforeDebounceFn={() => {
            if (message.value !== '') {
              setMessage({
                error: false,
                value: '',
              })
            }
          }}
        />
        <ClickForMoreButton
          onClick={e =>
            dispatchModal({
              type: 'TOGGLE_MODAL_ON',
              payload: {
                modal: (
                  <AddNewCheckboxItem
                    toggleModal={() => {
                      dispatchModal({ type: 'TOGGLE_MODAL_OFF' })
                    }}
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
                  type: 'UPDATE_ANSWERS',
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
                  type: 'UPDATE_ANSWERS',
                  payload: {
                    id: 'occupationPlace',
                    value: error,
                  },
                })
              }}
            />
            <ClickForMoreButton
              onClick={e =>
                dispatchModal({
                  type: 'TOGGLE_MODAL_ON',
                  payload: {
                    modal: (
                      <AddNewCheckboxItem
                        toggleModal={() => {
                          dispatchModal({ type: 'TOGGLE_MODAL_OFF' })
                        }}
                        sectionToUpdate="occupationPlace"
                        title="I currently work at..."
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
              onSuccess={success => {
                if (happinessFirstRender.current) {
                  happinessFirstRender.current = false
                  return
                }

                context.questionnaireDispatch({
                  type: 'UPDATE_ANSWERS',
                  payload: {
                    id: 'occupationHappiness',
                    value: success,
                  },
                })
              }}
              onError={error => {
                if (happinessFirstRender.current) {
                  happinessFirstRender.current = false
                  return
                }
                console.log('error', error)
              }}
              limit={1}
            />
          </Section>
        </>
      )}
    </>
  )
})
