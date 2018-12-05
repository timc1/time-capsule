import React, { useReducer, useEffect, useRef } from 'react'
import useForm from '../../shared/hooks/useForm'
//import useDebounce from '../../shared/hooks/useDebounce'

import { Form, Label, Input, Message } from '../../shared/form-components/index'
import { randomEmoji, randomGreeting, db, noop } from '../../../utils'

export default React.memo(() => {
  const [message, dispatchMessage] = useReducer(reducer, initialState)

  const {
    getFormProps,
    getInputStateAndProps,
    errors,
    state: formState,
  } = useForm({
    initialValues: {
      first_name: '',
    },
    validators,
    validateOnChange: true,
  })

  const debounceRef = useRef()
  useEffect(
    () => {
      if (message.type !== null) {
        dispatchMessage({
          type: 'RESET',
        })
      }
      db(
        debounceRef,
        formState.first_name.trim().length > 0
          ? () => {
              dispatchMessage({
                type: 'SUCCESS',
                payload: {
                  value: `${formState.first_name.trim()}, ${randomGreeting()} ${randomEmoji()}`,
                },
              })
            }
          : errors.first_name
            ? () => {
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
    },
    [formState.first_name]
  )

  return (
    <Form {...getFormProps()}>
      <Message message={message} />
      <Label error={errors.first_name}>
        <Input
          {...getInputStateAndProps({
            id: 'first_name',
            autoComplete: 'off',
            placeholder: 'My name',
            error: errors.first_name,
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
  console.log(type, payload)
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
