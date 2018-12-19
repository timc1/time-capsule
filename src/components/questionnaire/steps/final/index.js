import React, { useReducer, useRef } from 'react'
import { DebouncedInput } from '../shared/index'
import useQuestionnaire from '../../../shared/hooks/useQuestionnaire'

import { verticalScroll, AnimatedButton, Loader } from '../../../shared/styles'
import { Message } from '../../../shared/form-components/index'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import star from '../../../../images/star.svg'

import { http, API_URL, camelToUnderscore } from '../../../../utils'

import { navigate } from 'gatsby'

export default React.memo(({ canContinue, setContinue }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { context } = useQuestionnaire()

  const handleSubmit = async e => {
    e.preventDefault()
    dispatch({
      type: 'SUBMITTING',
    })

    // 1. Endpoint
    const url = API_URL + '/v0/tc/submit'
    // 2. Filter data
    const body = {
      user: context.questionnaireState.user,
      answers: parseQuestionnaireData(context.questionnaireState),
      timestamp: Date.now(),
    }
    // 3. Submit
    const { error, success } = await http.post(url, body)

    if (error) {
      dispatch({
        type: 'ERROR',
        payload: {
          error,
        },
      })
    } else {
      setTimeout(() => {
        navigate('/success', { state: { name: body.user.name } })
      }, 400)
    }
  }

  const firstRender = useRef(true)

  return (
    <Container>
      <Message
        message={{
          error: state.error,
          value: state.error,
        }}
      />
      <DebouncedInput
        type="input"
        id="email"
        initialValue={context.questionnaireState.user.email}
        onSuccess={value => {
          const isValid = validate(value)
          if (isValid) {
            dispatch({
              type: 'UPDATE',
              payload: {
                ...state,
                canSubmit: true,
                isSubmitting: false,
                error: false,
              },
            })
            context.questionnaireDispatch({
              type: 'UPDATE_USER',
              payload: {
                user: {
                  email: value,
                },
              },
            })
          } else if (state.canSubmit) {
            dispatch({
              type: 'ERROR',
              payload: {
                error: 'Invalid Email.',
              },
            })
          }
        }}
        onError={error => {
          if (firstRender.current) {
            firstRender.current = false
            return
          }
          if (state.canSubmit) {
            dispatch({
              type: 'ERROR',
              payload: {
                error: 'Something went wrong! Try again.',
              },
            })
          }
        }}
        placeholder="my@email.com"
      />
      <SubmitButton
        disabled={!state.canSubmit}
        onClick={e => (state.isSubmitting ? {} : handleSubmit(e))}
        aria-label="Click to submit questionnaire."
        data-testid="submit-button"
      >
        <SubmitButtonText isShowing={!state.isSubmitting}>
          Submit
        </SubmitButtonText>
        <Loader isShowing={state.isSubmitting} />
        <div className="pseudo" aria-hidden="true" />
        <div className="elements" aria-hidden="true">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </SubmitButton>
    </Container>
  )
})

const initialState = {
  canSubmit: false,
  isSubmitting: false,
  error: false,
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'UPDATE':
      return payload
    case 'ERROR':
      return {
        ...state,
        canSubmit: true,
        isSubmitting: false,
        error: payload.error,
      }
    case 'SUBMITTING':
      return {
        ...state,
        isSubmitting: true,
        error: false,
      }
    case 'SUCCESS':
      return {
        canSubmit: false,
        isSubmitting: false,
        error: false,
      }
    default:
      return state
  }
}

const validate = email => {
  const regex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(String(email).toLowerCase())
}

const parseQuestionnaireData = data => {
  const keys = Array.from(Object.keys(data.answers))
  const final = {}
  keys.forEach(key => {
    const type = typeof data.answers[key]
    if (type === 'object') {
      const filtered = data.answers[key].filter(item => item.isChecked)
      // Convert camelCase to underscore
      key = camelToUnderscore(key)
      final[key] = encodeURIComponent(JSON.stringify(filtered))
    }
    if (type === 'string') {
      const answer = data.answers[key]
      key = camelToUnderscore(key)
      final[key] = answer
    }
  })

  return final
}

// Styles
const Container = styled.div`
  display: grid;
  grid-gap: 40px;
`

const SubmitButton = styled(AnimatedButton)`
  .elements {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: -1;
    div {
      opacity: ${props => (props.disabled ? 0 : 1)};
      transition: opacity 0.15s var(--cubic);
      &::before {
        content: '';
        position: absolute;
        left: unset;
        right: 10px;
        height: 10px;
        width: 10px;
        background: var(--white);
        mask: url(${star}) center center / contain no-repeat;
        -webkit-mask: url(${star}) center center / contain no-repeat;
        transform: translateY(70px);
        opacity: 1;
        transition-property: opacity, transform;
        animation: ${verticalScroll('-15px')} 1.5s infinite linear;
      }
    }
    div:first-of-type::before {
      left: 10px;
      animation-duration: 1.4s;
    }
    div:nth-of-type(2)::before {
      left: 20%;
      animation-duration: 1.2s;
    }
    div:nth-of-type(3)::before {
      left: 35%;
      animation-duration: 1.3s;
    }
    div:nth-of-type(4)::before {
      left: 65%;
      animation-duration: 1.2s;
    }
    div:nth-of-type(5)::before {
      left: 80%;
      animation-duration: 1.1s;
    }
  }

  ${props =>
    !props.disabled &&
    css`
      &:hover,
      &:focus {
        .elements {
          div:first-of-type::before {
            animation-duration: 1.1s;
          }
          div:nth-of-type(2)::before {
            animation-duration: 0.9s;
          }
          div:nth-of-type(3)::before {
            animation-duration: 1s;
          }
          div:nth-of-type(4)::before {
            animation-duration: 0.9s;
          }
          div:nth-of-type(5)::before {
            animation-duration: 0.8s;
          }
        }
      }
    `};
`

const SubmitButtonText = styled.p`
  transform: ${props =>
    props.isShowing
      ? 'scale(1) rotate(0) rotateX(0)'
      : 'scale(.8) rotate(20deg) rotateX(40deg)'};
  opacity: ${props => (props.isShowing ? 1 : 0)};
  transition-property: transform, opacity;
  transition: 0.25s var(--cubic);
`
