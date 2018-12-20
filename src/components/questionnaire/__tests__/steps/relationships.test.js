import React from 'react'
import { render, fireEvent, wait } from 'react-testing-library'

describe('Questionnaire -- Relationships', () => {
  jest.doMock(`../../../shared/hooks/useQuestionnaire`, () => {
    return () => window.getQuestionnaireContext('RELATIONSHIPS')
  })

  const Relationships = require('../../index').default

  test('Should render at first showing initial relationships checkboxes and a disabled next button.', async () => {
    const { getByTestId, getAllByTestId } = render(<Relationships />)

    await wait(() => {
      const nextButton = getByTestId('next-button')

      const roleCheckboxes = getAllByTestId('checkbox-button')
      expect(roleCheckboxes).toHaveLength(5)
      expect(nextButton).toHaveAttribute('disabled')
    })
  })

  test('Should allow users to click next when they have selected one option.', async () => {
    const { getByTestId, getAllByTestId } = render(<Relationships />)

    await wait(async () => {
      const nextButton = getByTestId('next-button')

      const roleCheckboxes = getAllByTestId('checkbox-button')

      fireEvent.click(roleCheckboxes[0])

      await wait(() => {
        expect(nextButton).not.toHaveAttribute('disabled')
      })
    })
  })

  test('Should only allow users to click one checkbox at a time.', async () => {
    const { getByTestId, getAllByTestId } = render(<Relationships />)

    await wait(() => {
      const roleCheckboxes = getAllByTestId('checkbox-button')

      // Click multiple checkboxes.
      fireEvent.click(roleCheckboxes[0])
      fireEvent.click(roleCheckboxes[1])
      fireEvent.click(roleCheckboxes[2])

      // Filter out checked elements.
      const checked = roleCheckboxes.filter(
        el => el.getAttribute('data-ischecked') === 'true'
      )

      // Assert.
      expect(checked).toHaveLength(1)
    })
  })
})
