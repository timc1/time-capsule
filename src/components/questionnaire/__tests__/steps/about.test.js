import React from 'react'
import { render, fireEvent, wait } from 'react-testing-library'

describe(`Questionnaire -- About`, () => {
  jest.doMock(`../../../shared/hooks/useQuestionnaire`, () => {
    return () => window.getQuestionnaireContext('ABOUT')
  })

  const About = require(`../../index`).default

  test(`Should render an input field for user's first name.`, async () => {
    const { getByTestId, getByPlaceholderText } = render(<About />)
    await wait(() => {
      expect(getByPlaceholderText(`My name`)).toBeInTheDocument()
    })
  })

  test(`Next Button should NOT be disabled after user types their name.`, async () => {
    const { getByTestId, getByPlaceholderText } = render(<About />)

    await wait(async () => {
      const input = getByPlaceholderText(`My name`)
      const nextButton = getByTestId(`next-button`)

      expect(nextButton).toBeInTheDocument()
      expect(nextButton).toHaveAttribute('disabled')

      fireEvent.change(input, {
        target: { value: `Tim` },
      })

      await wait(() => {
        expect(nextButton).not.toHaveAttribute('disabled')
      })
    })
  })
})
