import React from 'react'

import useQuestionnaire from '../../shared/hooks/useQuestionnaire'
import useCheckbox, { Checkbox } from '../../shared/hooks/useCheckbox'

export default React.memo(({ canContinue, setContinue }) => {
  const { context } = useQuestionnaire()

  const { items, getCheckboxItemProps } = useCheckbox({
    items: getOccupationRoles(context),
    onSuccess: value => {
      context.dispatch({
        type: 'UPDATE_ANSWER',
        payload: {
          id: 'occupationRole',
          value,
        },
      })
    },
    onError: error => {
      console.log('error', error)
    },
  })

  return (
    <>
      <Checkbox getCheckboxItemProps={getCheckboxItemProps} items={items} />
    </>
  )
})

const getOccupationRoles = context => {
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
