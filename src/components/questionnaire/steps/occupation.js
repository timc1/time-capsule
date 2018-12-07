import React, { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'

import useQuestionnaire from '../../shared/hooks/useQuestionnaire'
import useCheckboxes from '../../shared/hooks/useCheckboxes'

import { UnstyledButton } from '../../shared/styles'
import { Message } from '../../shared/form-components/index'

import { debounce } from '../../../utils'

import CheckboxGroup from '../../shared/form-components/checkbox-group'

export default React.memo(({ canContinue, setContinue }) => {
  const { context } = useQuestionnaire()
  const {
    state: occupationRoles,
    getCheckboxItemProps,
    addCheckboxItem,
  } = useCheckboxes({
    initialState: getOccupationRolesState(context),
  })
  const [message, setMessage] = useState(false)

  const debounceRef = useRef()
  useEffect(
    () => {
      if (message) setMessage(false)
      const selectedRoles = occupationRoles.filter(role => role.isChecked)
      if (selectedRoles.length === 0 && canContinue) {
        setContinue(false)
      }

      const debouncedObj = debounce(
        debounceRef,
        () => {
          if (selectedRoles.length > 0) {
            if (!canContinue) setContinue(true)
            setMessage({ value: 'Nice' })
          }
          if (selectedRoles.length === 0 && canContinue) {
            setMessage({ error: true, value: 'You gotta pick something bro' })
          }

          context.dispatch({
            type: 'UPDATE_ANSWER',
            payload: {
              id: 'occupationRole',
              value: selectedRoles,
            },
          })
        },
        500
      )

      return () => debouncedObj.clear()
    },
    [JSON.stringify(occupationRoles)]
  )

  return (
    <>
      <Message message={message} />
      <CheckboxGroup
        items={occupationRoles}
        getCheckboxItemProps={getCheckboxItemProps}
      />
    </>
  )
})

const getOccupationRolesState = context => {
  const roles = [
    { id: 'student', name: 'Student' },
    { id: 'designer', name: 'Designer' },
    { id: 'developer', name: 'Developer' },
    { id: 'businessPerson', name: 'Business Person' },
    { id: 'artist', name: 'Artist' },
    { id: 'content', name: 'Content Creator' },
  ]
  const filtered = roles.map(role => {
    if (
      context.state.answers.occupationRole.findIndex(i => i.id === role.id) !==
      -1
    ) {
      role.isChecked = true
    } else {
      role.isChecked = false
    }
    return role
  })

  return filtered
}
