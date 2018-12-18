import React, { useReducer, useEffect, useRef } from 'react'
import useForm from '../../../shared/hooks/useForm'
import useQuestionnaire from '../../../shared/hooks/useQuestionnaire'

import {
  Form,
  Label,
  Input,
  Message,
} from '../../../shared/form-components/index'
import { randomEmoji, randomGreeting, debounce, noop } from '../../../../utils'

export default React.memo(({ canContinue, setContinue }) => {
  const [message, dispatchMessage] = useReducer(reducer, initialState)
  const { context } = useQuestionnaire()

  const {
    getFormProps,
    getInputStateAndProps,
    errors,
    state: formState,
  } = useForm({
    initialValues: {
      first_name: context.questionnaireState.user.name,
    },
    validators,
    validateOnChange: true,
  })

  const debounceRef = useRef()
  useEffect(
    () => {
      if (message.value !== '') {
        dispatchMessage({
          type: 'RESET',
        })
      }

      const name = formState.first_name.trim()

      const debouncedObj = debounce(
        debounceRef,
        name.length > 0
          ? () => {
              if (!canContinue) setContinue(true)
              context.questionnaireDispatch({
                type: 'UPDATE_USER',
                payload: {
                  user: {
                    name,
                  },
                },
              })
              dispatchMessage({
                type: 'SUCCESS',
                payload: {
                  value: `${formState.first_name.trim()}, ${randomGreeting()} ${randomEmoji()}`,
                },
              })
            }
          : errors.first_name
            ? () => {
                if (canContinue) setContinue(false)
                dispatchMessage({
                  type: 'ERROR',
                  payload: {
                    value: errors.first_name,
                  },
                })
              }
            : noop,
        500
      )

      // Clear debounced function on unmount.
      return () => debouncedObj.clear()
    },
    [formState.first_name]
  )

  return (
    <Form {...getFormProps()}>
      <Message message={message} />
      <Label error={errors.first_name} htmlFor="first_name">
        <Input
          {...getInputStateAndProps({
            id: 'first_name',
            autoComplete: 'off',
            placeholder: 'My name',
            error: errors.first_name,
            maxLength: 20,
          })}
        />
      </Label>
    </Form>
  )
})

const initialState = {
  error: false,
  value: '',
}

const validators = {
  first_name: val => (val.trim().length === 0 ? 'You need a name. 😭' : false),
}
const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SUCCESS':
      return {
        error: false,
        value: payload.value,
      }
    case 'ERROR':
      return {
        error: true,
        value: payload.value,
      }
    case 'RESET':
      return initialState
    default:
      return state
  }
}
