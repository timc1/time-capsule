import React from 'react'
import { render, fireEvent } from 'react-testing-library'

describe('Questionnaire -- Interests', () => {
  jest.doMock(`../../../shared/hooks/useQuestionnaire`, () => {
    return () => window.getQuestionnaireContext('PERSONAL_INTERESTS')
  })

  const Interests = require('../../index').default

  test('Should render at first showing initial hobbies checkboxes and a disabled next button.', () => {
    const { getByTestId, getAllByTestId } = render(<Interests />)
    const nextButton = getByTestId('next-button')

    const roleCheckboxes = getAllByTestId('checkbox-button')
    expect(roleCheckboxes).toHaveLength(8)
    expect(nextButton).toHaveAttribute('disabled')
  })

  test(`Modal window should show when user clicks 'more', and close when user click exit button.`, () => {
    const { getByText, getByTestId } = render(<Interests />)
    // Because our modal content is always present (for fadein transitions), the way we know
    // if the modal is showing is by checking the tab-index of the exit toggle button.
    // If the modal is hidden, tabindex will be -1, otherwise it will be 0.
    const modalToggle = getByTestId('modal-toggle')
    const menuToggle = getByText(/More/i)
    expect(modalToggle).toHaveAttribute('tabindex', '-1')
    fireEvent.click(menuToggle)
    expect(modalToggle).toHaveAttribute('tabindex', '0')
    fireEvent.click(modalToggle)
    expect(modalToggle).toHaveAttribute('tabindex', '-1')
  })

  test(`User should be able to add a new checkbox item.`, async () => {
    const { getByText, getByTestId, getAllByTestId } = render(<Interests />)
    const modalToggle = getByTestId('modal-toggle')
    // Open menu.
    const menuToggle = getByText(/More/i)
    fireEvent.click(menuToggle)

    // Get input field.
    const input = getByTestId('add-more-input')
    const submitButton = getByTestId('add-more-submit-button')

    // Assert that input and submit button are present.
    expect(input).toBeInTheDocument()
    expect(submitButton).toHaveAttribute('disabled')

    // Input new checkbox item.
    fireEvent.change(input, {
      target: {
        value: 'New Checkbox Item!',
      },
    })

    // Assert that user can now submit
    expect(submitButton).not.toHaveAttribute('disabled')

    fireEvent.click(submitButton)

    // Assert that modal closes after user submits.
    expect(modalToggle).toHaveAttribute('tabindex', '-1')
    expect(input).not.toBeInTheDocument()
    expect(submitButton).not.toBeInTheDocument()

    // TODO: figure out how to test context.questionnaireDispatch so it's not just a mock jest.fn()
  })
})
