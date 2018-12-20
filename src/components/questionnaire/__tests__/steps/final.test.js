import React from 'react'
import { render, fireEvent, wait } from 'react-testing-library'
import * as utils from '../../../../utils'
import { navigate } from 'gatsby'

describe('Questionnaire - Final', () => {
  jest.doMock(`../../../shared/hooks/useQuestionnaire`, () => {
    return () => window.getQuestionnaireContext('FINAL')
  })

  const Email = require(`../../index`).default

  test(`Should initially render an input with a disabled submit button.`, async () => {
    const { getByPlaceholderText, getByTestId } = render(<Email />)

    await wait(() => {
      const input = getByPlaceholderText(/my@email.com/i)
      const submitButton = getByTestId(/submit-button/i)

      expect(input).toBeInTheDocument()
      expect(submitButton).toBeInTheDocument()
      expect(submitButton).toHaveAttribute('disabled')
    })
  })

  test(`Button should stay disabled as long as email is invalid.`, async () => {
    const { getByPlaceholderText, getByTestId } = render(<Email />)

    await wait(async () => {
      const input = getByPlaceholderText(/my@email.com/i)
      const submitButton = getByTestId(/submit-button/i)

      // Assert that invalid emails keep submit button disabled.
      const invalidEmails = [`tim@no`, `@gmail.com`, `123abc`, `abc@c.`]
      const validateEmails = async () => {
        for (let email of invalidEmails) {
          fireEvent.change(input, {
            target: {
              value: email,
            },
          })

          await wait(() => {
            expect(submitButton).toHaveAttribute('disabled')
          })
        }
      }

      // Assert that a correct email will remove disabled property from submit button.
      fireEvent.change(input, {
        target: {
          value: 'valid@gmail.com',
        },
      })

      await wait(() => {
        expect(submitButton).not.toHaveAttribute('disabled')
      })
    })
  })

  test(`Successful submit should redirect a user to /success page.`, async () => {
    // Mock http call.
    utils.http = {
      post: jest.fn().mockResolvedValueOnce({
        success: true,
      }),
    }

    const { getByPlaceholderText, getByTestId } = render(<Email />)

    await wait(async () => {
      const input = getByPlaceholderText(/my@email.com/i)
      const submitButton = getByTestId(/submit-button/i)

      fireEvent.change(input, {
        target: {
          value: 'valid@gmail.com',
        },
      })

      await wait(() => {
        expect(submitButton).not.toHaveAttribute('disabled')
      })

      fireEvent.click(submitButton)

      expect(utils.http.post).toHaveBeenCalledTimes(1)

      await wait(() => {
        expect(navigate).toHaveBeenCalledTimes(1)
      })
    })
  })
})
