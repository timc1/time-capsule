import React from 'react'
import useQuestionnaire from '../../../shared/hooks/useQuestionnaire'
import { ClickForMoreButton, Section, Checkboxes } from '../shared/index'

import AddNewCheckboxItem from '../shared/add-new-checkbox-item'

export default React.memo(({ canContinue, setContinue, dispatchModal }) => {
  const { context } = useQuestionnaire()

  return (
    <Section>
      <Checkboxes
        items={context.questionnaireState.answers.hobbies}
        onSuccess={value => {
          if (!canContinue) setContinue(true)
          context.questionnaireDispatch({
            type: 'UPDATE_ANSWERS',
            payload: {
              id: 'hobbies',
              value,
            },
          })
        }}
        onError={error => {
          if (canContinue) setContinue(false)
        }}
      />
      <ClickForMoreButton
        onClick={e =>
          dispatchModal({
            type: 'TOGGLE_MODAL_ON',
            payload: {
              modal: (
                <AddNewCheckboxItem
                  toggleModal={() => {
                    dispatchModal({ type: 'TOGGLE_MODAL_OFF' })
                  }}
                  sectionToUpdate="hobbies"
                  title="What are some hobbies and activities that interest you?"
                  placeholder="Marathon-ing"
                />
              ),
            },
          })
        }
      >
        <span>More</span>
      </ClickForMoreButton>
    </Section>
  )
})
