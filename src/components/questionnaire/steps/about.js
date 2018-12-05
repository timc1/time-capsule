import React, { useReducer } from 'react'
import useForm from '../../shared/hooks/useForm'
import useDebounce from '../../shared/hooks/useDebounce'

import { Form, Label, Input, Message } from '../../shared/form-components/index'

export default React.memo(() => {
  const [message, setMessage] = useReducer(reducer, initialState)

  const {
    getFormProps,
    getInputStateAndProps,
    errors,
    state: formState,
  } = useForm({
    initialValues: {
      first_name: '',
    },
    validators: {
      first_name: val =>
        val.trim().length === 0 ? 'You must have a name, right?' : false,
    },
    validateOnChange: true,
  })

  useDebounce(() => {
    if (formState.first_name) {
      console.log('hey', formState.first_name)
    } else if (errors.first_name) {
      console.log('show error')
    }
  }, 800)

  return (
    <Form {...getFormProps()}>
      <Label error={errors.first_name}>
        <Message message={message} />
        <Input
          {...getInputStateAndProps({
            id: 'first_name',
            autoComplete: 'off',
            placeholder: 'My name',
            error: errors.first_name,
            trim: true,
          })}
        />
      </Label>
    </Form>
  )
})

const initialState = {
  type: null,
  message: '',
}

const reducer = (state, { type, action }) => {
  switch (type) {
    default:
      return state
  }
}
