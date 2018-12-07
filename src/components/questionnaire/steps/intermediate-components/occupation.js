import React from 'react'
import { Form, Label, Input } from '../../../shared/form-components/index'

import useForm from '../../../shared/hooks/useForm'
import useQuestionnaire from '../../../shared/hooks/useQuestionnaire'

import { SmallModalContainer } from './shared'
import { NextButton } from '../../index'

const AddNewOccupationItem = React.memo(({ items, dispatchCheckbox }) => {
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
            console.log('items', items)
            const exists = items.filter(
              item => item.id.toUpperCase() === uniqueId
            )[0]

            if (exists) {
              dispatchCheckbox({
                type: 'TOGGLE',
                payload: {
                  id: exists.id,
                },
              })
            } else {
              const formattedPayload = {
                id: occupation.toLowerCase(),
                name: occupation,
              }
              context.dispatch({
                type: 'ADD_UNIQUE_OCCUPATION',
                payload: {
                  value: formattedPayload,
                },
              })
            }
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
