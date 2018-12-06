import React, { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { UnstyledButton } from '../shared/styles'
import { Location } from '@reach/router'

import caretLeft from '../../images/caret-left.svg'

import About from './steps/about'

import useQuestionnaire from '../shared/hooks/useQuestionnaire'

import Transition from '../shared/transition'

const Occupation = () => <div>hi</div>

const questionnaireSteps = [
  {
    id: 'ABOUT',
    data: {
      component: About,
      meta: {
        sectionTitle: 'About',
        question: 'What is your name?',
      },
    },
  },
  {
    id: 'OCCUPATION',
    data: {
      component: Occupation,
      meta: {
        sectionTitle: 'Career Goals',
        question: 'HI',
      },
    },
  },
]

export default React.memo(props => {
  const [canContinue, setContinue] = useState(false)
  const [transitionDirection, setTransitionDirection] = useState(
    'horizontal-left'
  )
  const { context } = useQuestionnaire()

  const index = questionnaireSteps.findIndex(
    step => step.id === context.state.meta.currentStepId
  )
  const {
    data: { component: Component, meta },
  } = questionnaireSteps[index]

  return (
    <Location>
      {({ navigate }) => (
        <Container>
          <DescriptionHeader>
            <BackButton
              onClick={
                index === 0
                  ? e => navigate('/')
                  : e => {
                      setTransitionDirection('horizontal-right')
                      context.dispatch({
                        type: 'NEXT',
                        payload: {
                          value: questionnaireSteps[index - 1].id,
                        },
                      })
                    }
              }
            >
              back
            </BackButton>
            <p>{meta.sectionTitle}</p>
          </DescriptionHeader>
          <Transition transitionKey={context.state.meta.currentStepId}>
            <Question>{meta.question}</Question>
          </Transition>
          <Transition
            transitionKey={context.state.meta.currentStepId}
            type={transitionDirection}
          >
            <UserInteractionSection>
              <Component canContinue={canContinue} setContinue={setContinue} />
            </UserInteractionSection>
          </Transition>
          {index !== questionnaireSteps.length - 1 && (
            <NextButton
              disabled={!canContinue}
              onClick={e => {
                setTransitionDirection('horizontal-left')
                context.dispatch({
                  type: 'NEXT',
                  payload: {
                    value: questionnaireSteps[index + 1].id,
                  },
                })
              }}
            >
              <span>Next</span>
            </NextButton>
          )}
        </Container>
      )}
    </Location>
  )
})

const Container = styled.section`
  max-width: 400px;
  width: 100%;
  margin: 80px auto;
  padding: var(--baseborderpadding);
`

const DescriptionHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  > p {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    font-size: var(--fontsm);
    font-weight: var(--fontbold);
    text-transform: uppercase;
    color: var(--white1);
  }
`

const BackButton = styled(UnstyledButton)`
  color: var(--white1);
  padding: 0;
  font-size: 0;
  padding: 5px;
  margin-left: -5px;
  cursor: w-resize;
  &::before {
    content: '';
    height: var(--fontsm);
    width: var(--fontsm);
    background: #eee;
    display: block;
    -webkit-mask: url(${caretLeft}) center center / contain no-repeat;
    mask: url(${caretLeft}) center center / contain no-repeat;
  }
`

const Question = styled.h1`
  margin: 0 0 40px 0;
  font-size: var(--fontlg);
  font-family: var(--ff-serif);
  text-align: center;
  color: var(--white);
`

const UserInteractionSection = styled.div`
  height: 300px;
  overflow: auto;
`

const NextButton = styled(UnstyledButton)`
  padding: var(--fontmd);
  width: 100%;
  background: transparent;
  border-radius: var(--baseborderradius);
  font-weight: var(--fontbold);
  color: var(--white);
  cursor: pointer;
  transition: transform 0.15s ease-in;
  overflow: hidden;
  outline: none;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gray);
    z-index: -1;
    transition: 0.25s ease-in;
    transition-property: opacity, transform;
    transform: ${props => (props.disabled ? 'scaleX(1)' : 'scaleX(0)')};
    opacity: ${props => (props.disabled ? 1 : 0.8)};
    transform-origin: ${props => (props.disabled ? '0 50%' : '100% 50%')};
  }

  > span {
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    &::before {
      background: var(--blue2);
      z-index: -2;
    }
    &::after {
      background: var(--blue);
      z-index: -2;
      transition: opacity 0.1s ease-in;
    }
  }

  ${props =>
    !props.disabled &&
    css`
      &:hover,
      &:focus {
        transform: translateY(-1px);
        > span::after {
          opacity: 0;
        }
      }
      &:active {
        transform: translateY(1px);
        > span::after {
          opacity: 1;
        }
      }
    `};
`
