import React from 'react'
import { render, fireEvent, wait } from 'react-testing-library'

describe('Questionnaire -- Health', () => {
  jest.doMock(`../../../shared/hooks/useQuestionnaire`, () => {
    return () => window.getQuestionnaireContext('HEALTH')
  })

  const Health = require('../../index').default

  test('Should render at first showing initial health checkboxes and a disabled next button.', async () => {
    const { getByTestId, getAllByTestId } = render(<Health />)

    await wait(() => {
      const nextButton = getByTestId('next-button')

      const roleCheckboxes = getAllByTestId('checkbox-button')
      expect(roleCheckboxes).toHaveLength(5)
      expect(nextButton).toHaveAttribute('disabled')
    })
  })

  test('Should allow user to continue once an option is clicked.', async () => {
    const { getByTestId, getAllByTestId } = render(<Health />)

    await wait(async () => {
      const nextButton = getByTestId('next-button')

      const roleCheckboxes = getAllByTestId('checkbox-button')

      fireEvent.click(roleCheckboxes[0])

      await wait(() => expect(nextButton).not.toHaveAttribute('disabled'))
    })
  })
})
