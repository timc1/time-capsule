import React from 'react'
import {
  render,
  within,
  fireEvent,
  waitForElement,
  wait,
} from 'react-testing-library'

import { getQuestionnaire } from '../../../models/questionnaire'

import * as utils from '../../../utils'

describe(`Questionnaire Wizard Index`, () => {
  test(`Should render without errors.`, () => {
    jest.doMock(`../../shared/hooks/useQuestionnaire`, () => {
      return () => window.getQuestionnaireContext('OCCUPATION_INFO')
    })

    // Component
    const Index = require(`../index`).default

    const { getByTestId } = render(<Index />)
    // Initial Render - Base components should all be present.
    expect(getByTestId(`section-title`)).toBeInTheDocument()
    expect(getByTestId(`section-question`)).toBeInTheDocument()
    expect(getByTestId(`next-button`)).toHaveAttribute(`disabled`)
  })
})
