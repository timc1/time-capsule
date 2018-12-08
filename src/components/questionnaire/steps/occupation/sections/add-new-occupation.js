import React from 'react'
import { Form, Label, Input } from '../../../../shared/form-components/index'

import useForm from '../../../../shared/hooks/useForm'
import useQuestionnaire from '../../../../shared/hooks/useQuestionnaire'

import { SmallModalContainer } from '../../shared/index'
import { NextButton } from '../../../index'

const AddNewOccupationItem = React.memo(({ dispatchCheckbox, toggleModal }) => {
  const { context } = useQuestionnaire()
  const { getFormProps, getInputStateAndProps, state } = useForm({
    initialValues: {
      occupation: '',
    },
  })

  const val = state.occupation.trim()
  return (
    <SmallModalContainer>
      <Form
        {...getFormProps({
          onSubmit: ({ occupation }) => {
            // Validate if value already exists in items
            const uniqueId = occupation.replace(/\s/g, '').toUpperCase()

            const exists = context.questionnaireState.answers.occupationRole.filter(
              item => item.id.toUpperCase() === uniqueId
            )[0]

            if (exists) {
              if (exists.isChecked === false) {
                dispatchCheckbox({
                  type: 'TOGGLE',
                  payload: {
                    id: exists.id,
                  },
                })
              }
            } else {
              const formattedPayload = {
                id: uniqueId.toLowerCase(),
                name: occupation,
                isChecked: true,
              }

              context.questionnaireDispatch({
                type: 'ADD_UNIQUE_OCCUPATION',
                payload: {
                  value: formattedPayload,
                },
              })
            }

            toggleModal()
          },
        })}
      >
        <Label htmlFor="occupation">I am currently a...</Label>
        <Input
          {...getInputStateAndProps({
            id: 'occupation',
            placeholder: 'Small business owner',
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
})

export { AddNewOccupationItem }
