import React from 'react'
import { Form, Label, Input } from '../../../../shared/form-components/index'

import useForm from '../../../../shared/hooks/useForm'
import useQuestionnaire from '../../../../shared/hooks/useQuestionnaire'

import { SmallModalContainer } from '../../shared/index'
import { NextButton } from '../../../index'

export default React.memo(
  ({ toggleModal, sectionToUpdate = '', title = '', placeholder = '' }) => {
    const { context } = useQuestionnaire()
    const { getFormProps, getInputStateAndProps, state } = useForm({
      initialValues: {
        [sectionToUpdate]: '',
      },
    })

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
            })}
          />
          <NextButton
            disabled={val.length < 2}
            aria-label={`Toggle to add ${state.occupation ||
              'your own occupation.'}`}
          >
            <span>+ {val.length < 2 ? '' : val}</span>
          </NextButton>
        </Form>
      </SmallModalContainer>
    )
  }
)
