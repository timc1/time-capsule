import React from 'react'
import {
  render,
  within,
  fireEvent,
  waitForElement,
  wait,
} from 'react-testing-library'

import { getQuestionnaire } from '../../../../models/questionnaire'

import * as utils from '../../../../utils'
import { getContext } from '../index.test'

describe(`Questionnaire -- About`, () => {
  jest.doMock(`../../../shared/hooks/useQuestionnaire`, () => {
    return () => window.getQuestionnaireContext('ABOUT')
  })

  const About = require(`../../index`).default

  test(`Should render an input field for user's first name.`, () => {
    const { getByTestId, getByPlaceholderText } = render(<About />)
    expect(getByPlaceholderText(`My name`)).toBeInTheDocument()
  })

  test(`Next Button should NOT be disabled after user types their name.`, async () => {
    const { getByTestId, getByPlaceholderText } = render(<About />)
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
