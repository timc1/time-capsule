import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'

import { fadeInUp, UnstyledButton, screenmd } from '../../../shared/styles'
import { Checkbox } from '../../../shared/form-components/checkbox'
import { Form, Textarea, Input } from '../../../shared/form-components/index'

import useCheckbox from '../../../shared/hooks/useCheckbox'
import useForm from '../../../shared/hooks/useForm'

import { debounce } from '../../../../utils'

const SmallModalContainer = styled.div`
  position: relative;
  margin: calc(20vh) auto 100px auto;
  max-width: 400px;
  width: 100%;

  label {
    margin-bottom: 10px;
    font-size: var(--fontlg);
    text-align: center;
  }

  form {
    display: grid;
    grid-gap: 15px;
  }
`

const ClickForMoreButton = styled(UnstyledButton)`
  justify-self: center;
  align-self: center;
  padding: 5px 10px 6px 10px;
  outline: none;
  cursor: pointer;
  > span {
    color: var(--gray2);
    font-size: var(--fontsm);
    opacity: 0.7;
    transition: opacity 0.1s var(--cubic);
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: var(--baseborderradius);
      box-shadow: 0 0 1px var(--gray2);
      transform: scale(0.8);
      opacity: 0;
      transition-property: opacity, transform;
      transition: 0.1s var(--cubic);
    }
  }

  &:hover {
    > span {
      opacity: 1;
    }
  }

  &:focus {
    > span::before {
      opacity: 1;
      transform: scale(1.05);
    }
  }

  &:active {
    > span::before {
      opacity: 1;
      transform: scale(0.95);
    }
  }
`

const Section = styled.section`
  display: grid;
  animation: ${fadeInUp} 0.15s var(--cubic);
  margin-bottom: 15px;
`

const SectionName = React.memo(styled.h2`
  margin: 0 0 15px 0;
  font-size: var(--fontsm);
  font-weight: var(--fontbold);
  color: var(--black);
  text-transform: uppercase;

  @media (max-width: ${screenmd}px) {
    text-align: center;
  }
`)

const Checkboxes = React.memo(
  ({ items, onSuccess, onError, callBeforeDebounceFn, limit }) => {
    const { getCheckboxItemProps, items: updatedItems } = useCheckbox({
      items,
      onSuccess,
      onError,
      callBeforeDebounceFn,
      limit,
    })

    return (
      <Checkbox
        items={updatedItems}
        getCheckboxItemProps={getCheckboxItemProps}
      />
    )
  }
)

const DebouncedInput = React.memo(
  ({
    type = 'textarea',
    id,
    initialValue,
    validators,
    validateOnChange,
    onSuccess,
    onError,
    ...rest
  }) => {
    const {
      errors,
      state: formState,
      getFormProps,
      getInputStateAndProps,
    } = useForm({
      initialValues: {
        [id]: initialValue,
      },
      validators,
      validateOnChange,
    })

    const debounceRef = useRef()
    useEffect(
      () => {
        const debouncedObj = debounce(
          debounceRef,
          () => {
            const { errors, ...values } = formState
            if (values[id].trim().length === 0) {
              onError(values)
            } else {
              onSuccess(values[id].trim())
            }
          },
          500
        )
        return () => debouncedObj.clear()
      },
      [JSON.stringify(formState)]
    )

    return (
      <Form {...getFormProps()}>
        {type.toUpperCase() === 'TEXTAREA' ? (
          <Textarea {...getInputStateAndProps({ id, errors, ...rest })} />
        ) : (
          <Input {...getInputStateAndProps({ id, errors, ...rest })} />
        )}
      </Form>
    )
  }
)

export {
  SmallModalContainer,
  ClickForMoreButton,
  Section,
  SectionName,
  Checkboxes,
  DebouncedInput,
}
