import React, { useRef, useEffect } from 'react'
import { Form, Label, Input } from '../../../shared/form-components/index'

import useForm from '../../../shared/hooks/useForm'
import useQuestionnaire from '../../../shared/hooks/useQuestionnaire'

import { SmallModalContainer } from '../shared/index'

import { AnimatedButton, scaleIn } from '../../../shared/styles'
import styled from '@emotion/styled'
import plus from '../../../../images/plus.svg'

export default React.memo(
  ({ toggleModal, sectionToUpdate = '', title = '', placeholder = '' }) => {
    const initialFocusRef = useRef()
    const { context } = useQuestionnaire()
    const { getFormProps, getInputStateAndProps, state } = useForm({
      initialValues: {
        [sectionToUpdate]: '',
      },
    })

    useEffect(() => {
      initialFocusRef.current.focus()
    }, [])

    const val = state[sectionToUpdate].trim()
    return (
      <SmallModalContainer>
        <Form
          {...getFormProps({
            onSubmit: value => {
              // Validate if value already exists in items
              const uniqueId = value[sectionToUpdate]
                .replace(/\s/g, '')
                .toUpperCase()

              const items = context.questionnaireState.answers[sectionToUpdate]
              const index = items.findIndex(
                item => item.id.toUpperCase() === uniqueId
              )
              const exists = index !== -1 ? items[index] : null

              if (exists) {
                if (exists.isChecked === false) {
                  exists.isChecked = true
                  context.questionnaireDispatch({
                    type: 'UPDATE_OCCUPATION',
                    payload: {
                      id: sectionToUpdate,
                      value: items,
                    },
                  })
                }
              } else {
                const formattedPayload = {
                  id: uniqueId.toLowerCase(),
                  name: value[sectionToUpdate],
                  isChecked: true,
                }

                context.questionnaireDispatch({
                  type: 'ADD_UNIQUE_CHECKBOX_ITEM',
                  payload: {
                    id: sectionToUpdate,
                    value: formattedPayload,
                  },
                })
              }

              toggleModal()
            },
          })}
        >
          <Label htmlFor="occupation">{title}</Label>
          <Input
            {...getInputStateAndProps({
              id: sectionToUpdate,
              placeholder,
              autoComplete: 'off',
              maxLength: 30,
              ref: initialFocusRef,
            })}
            light
          />
          <AddButton
            disabled={val.length < 2}
            aria-label={`Toggle to add ${state.occupation ||
              'your own occupation.'}`}
          >
            <span>Add {val.length < 2 ? '' : val}</span>
            <div className="pseudo" aria-hidden="true" />
            <div className="elements" aria-hidden="true">
              {Array.from(Array(6)).map((i, index) => (
                <div key={index} />
              ))}
            </div>
          </AddButton>
        </Form>
      </SmallModalContainer>
    )
  }
)

const AddButton = styled(AnimatedButton)`
  .elements {
    opacity: ${props => (props.disabled ? 0 : 1)};
    transition: opacity 0.25s var(--cubic);
    > span {
      text-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2);
    }
    > div::before {
      content: '';
      position: absolute;
      background: var(--white);
      height: 12px;
      width: 12px;
      mask: url(${plus}) center center / contain no-repeat;
      transition-property: opacity, transform;
      animation: ${scaleIn} 1.5s var(--cubic) infinite;
    }
    > div:first-of-type::before {
      top: 12%;
      left: 10%;
      animation-delay: 0.2s;
    }
    > div:nth-of-type(2)::before {
      top: 68%;
      left: 20%;
    }
    > div:nth-of-type(3)::before {
      top: 16%;
      left: 30%;
      animation-delay: 0.8s;
    }
    > div:nth-of-type(4)::before {
      top: 57%;
      left: 60%;
    }
    > div:nth-of-type(5)::before {
      top: 12%;
      left: 70%;
      animation-delay: 0.3s;
    }
    > div:nth-of-type(6)::before {
      top: 57%;
      left: 85%;
    }
  }
`
