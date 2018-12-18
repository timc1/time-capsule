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

describe('Questionnaire -- Occupation', () => {
  jest.doMock(`../../../shared/hooks/useQuestionnaire`, () => {
    return () => window.getQuestionnaireContext('OCCUPATION_INFO')
  })

  const Occupation = require('../../index').default

  test('Should render at first only showing roles checkboxes and a disabled next button.', () => {
    const { getByTestId, getAllByTestId } = render(<Occupation />)
    const nextButton = getByTestId('next-button')

    const roleCheckboxes = getAllByTestId('checkbox-button')
    expect(roleCheckboxes).toHaveLength(6)
    expect(nextButton).toHaveAttribute('disabled')
  })

  test('Should display the next row of options after user selects a job role.', async () => {
    const { getByTestId, getAllByTestId } = render(<Occupation />)
    const nextButton = getByTestId('next-button')
    const roleCheckboxes = getAllByTestId('checkbox-button')

    fireEvent.click(roleCheckboxes[0])

    const nextRowCheckboxes = await waitForElement(() =>
      getByTestId('company-selectors')
    )

    // Assert
    expect(nextRowCheckboxes).toBeInTheDocument()
    expect(nextButton).not.toHaveAttribute('disabled')
  })
})
