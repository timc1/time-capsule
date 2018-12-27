import React, { useState, useRef, useEffect, useReducer } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import {
  screenmd,
  UnstyledButton,
  AnimatedButton,
  scroll,
} from '../shared/styles'
import { Location } from '@reach/router'

import caretLeft from '../../images/caret-left.svg'

import useQuestionnaire from '../shared/hooks/useQuestionnaire'

import Transition, { WizardTransition } from '../shared/transition'
import Modal from '../shared/modal'

import arrow from '../../images/arrow.svg'
import questionnaireSteps from './questionnaire-steps'

const modalReducer = (state, { type, payload }) => {
  switch (type) {
    case 'TOGGLE_MODAL_ON':
      return {
        isModalShowing: true,
        modalContent: payload.modal,
      }
    case 'TOGGLE_MODAL_OFF':
      return {
        isModalShowing: false,
        modalContent: null,
      }
    default:
      return state
  }
}

export default React.memo(props => {
  const initialFocusRef = useRef()
  const [canContinue, setContinue] = useState(false)

  const [modalContext, dispatchModal] = useReducer(modalReducer, {
    isModalShowing: false,
    modalContent: null,
  })
  const [transitionDirection, setTransitionDirection] = useState(
    'horizontal-left'
  )
  const { context } = useQuestionnaire()

  const index = questionnaireSteps.findIndex(
    step => step.id === context.questionnaireState.meta.currentStepId
  )
  const {
    data: { component: Component, meta, introProps },
  } = questionnaireSteps[index]

  useEffect(
    () => {
      initialFocusRef.current.focus()
      window.scrollTo({ top: 0 })
    },
    [context.questionnaireState.meta.currentStepId]
  )

  return (
    <>
      <Modal
        domElement="modal-root"
        toggleModal={() => {
          dispatchModal({
            type: 'TOGGLE_MODAL_OFF',
          })
        }}
        isShowing={modalContext.isModalShowing}
        backgroundColor="var(--black2)"
      >
        {modalContext.modalContent}
      </Modal>
      <Status
        aria-label="hidden"
        width={(index + 1) / questionnaireSteps.length}
      />
      <Location>
        {({ navigate }) => (
          <Container>
            <DescriptionHeader>
              <BackButton
                ref={initialFocusRef}
                onClick={
                  index === 0
                    ? e => navigate('/')
                    : e => {
                        if (canContinue) setContinue(false)

                        if (transitionDirection !== 'horizontal-right') {
                          setTransitionDirection('horizontal-right')
                        }

                        context.questionnaireDispatch({
                          type: 'NEXT',
                          payload: {
                            value: questionnaireSteps[index - 1].id,
                          },
                        })
                      }
                }
                aria-label="go back"
                data-testid="back-button"
              />
              <p data-testid="section-title">{meta.sectionTitle}</p>
            </DescriptionHeader>
            <Transition
              transitionKey={context.questionnaireState.meta.currentStepId}
              delay={200}
            >
              <Question data-testid="section-question">
                {meta.question}
              </Question>
              {meta.subquestion && (
                <SubQuestion data-testid="section-subquestion">
                  {meta.subquestion}
                </SubQuestion>
              )}
            </Transition>
            <WizardTransition
              transitionKey={context.questionnaireState.meta.currentStepId}
              type={transitionDirection}
              delay={200}
            >
              <UserInteractionSection data-testid="interaction-section">
                <Component
                  canContinue={canContinue}
                  setContinue={setContinue}
                  dispatchModal={dispatchModal}
                  {...introProps}
                />
              </UserInteractionSection>
            </WizardTransition>
            {index !== questionnaireSteps.length - 1 && (
              <NextButton
                data-testid="next-button"
                disabled={!canContinue}
                onClick={e => {
                  if (transitionDirection !== 'horizontal-left') {
                    setTransitionDirection('horizontal-left')
                  }
                  context.questionnaireDispatch({
                    type: 'NEXT',
                    payload: {
                      value: questionnaireSteps[index + 1].id,
                    },
                  })
                  if (canContinue) setContinue(false)
                }}
              >
                <span>Next</span>
                <div className="pseudo" aria-hidden="true" />
                <div className="rockets rockets-left" aria-hidden="true">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="rockets" aria-hidden="true">
                  <div />
                  <div />
                  <div />
                </div>
              </NextButton>
            )}
          </Container>
        )}
      </Location>
    </>
  )
})

const Container = styled.section`
  max-width: 450px;
  width: 100%;
  margin: 80px auto;
  padding: var(--baseborderpadding);

  @media (max-width: ${screenmd}px) {
    margin-top: 100px;
  }
`

const Status = React.memo(
  styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--white);
    z-index: 2;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: var(--blue);
      transition: transform 0.15s var(--cubic);
      transform: ${props => `scaleX(${props.width})`};
      transform-origin: 0;
      transition-delay: 0.15s;
    }

    @media (max-width: ${screenmd}px) {
      top: 4.54rem;
    }
  `,
  (prevProps, nextProps) => prevProps.width === nextProps.width
)

const DescriptionHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  background: var(--white);

  > p {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    font-size: var(--fontsm);
    font-weight: var(--fontbold);
    text-transform: uppercase;
    color: var(--black2);
  }

  @media (max-width: ${screenmd}px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 1.5625rem;
    box-shadow: var(--baseboxshadow);
    z-index: 2;
  }
`

const BackButton = styled(UnstyledButton)`
  padding: 0;
  font-size: 0;
  padding: 0.3125rem 0.3125rem 0.25rem 0.3125rem;
  margin-left: -5px;
  cursor: w-resize;
  outline: none;
  &::before {
    content: '';
    height: var(--fontsm);
    width: var(--fontsm);
    background: var(--black);
    display: block;
    -webkit-mask: url(${caretLeft}) center center / contain no-repeat;
    mask: url(${caretLeft}) center center / contain no-repeat;
  }

  &::after {
    content: '';
    box-shadow: 0 0 1px var(--gray2);
    border-radius: var(--baseborderradius);
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: scale(0.7);
    transition: transform 0.1s var(--cubic);
  }

  &:hover {
    > div {
      opacity: 1;
    }
  }

  &:focus {
    &::after {
      opacity: 1;
      transform: scale(1.05);
    }
  }

  &:active {
    > div {
      opacity: 0.7;
    }
    &::after {
      opacity: 0.7;
      transform: scale(0.95);
    }
  }
`

const Question = styled.h1`
  margin: 0;
  font-size: var(--fontlg);
  font-family: var(--ff-serif);
  text-align: center;
  color: var(--black);
`

const SubQuestion = styled.h2`
  margin: 20px 0 0 0;
  text-align: center;
  color: var(--gray2);
  font-weight: var(--fontregular);
  line-height: var(--baselineheight);
`

const UserInteractionSection = styled.div`
  position: relative;
  margin-top: 4rem;
  margin-bottom: 10rem;
  display: grid;
  grid-auto-rows: max-content;
`

export const NextButton = styled(AnimatedButton)`
  position: fixed;
  bottom: var(--baseborderpadding);
  left: 50%;
  transform: translateX(-50%);
  max-width: 400px;
  width: 100%;
  perspective: 1000px;

  .rockets {
    position: absolute;
    right: 10px;
    height: 30px;
    width: 40%;
    top: 50%;
    opacity: 0;
    transform: translateY(-50%);
    transition: opacity 0.15s var(--cubic);
    overflow: hidden;
    > div {
      transform: translateX(-50%);
    }
    > div::before {
      content: '';
      position: absolute;
      left: unset;
      right: 10px;
      height: 10px;
      width: 10px;
      background: var(--white);
      mask: url(${arrow}) center center / contain no-repeat;
      -webkit-mask: url(${arrow}) center center / contain no-repeat;
      animation: ${scroll('200px')} 2.2s infinite linear;
      transform: translateX(-20px);
      opacity: 1;
      transition-property: opacity, transform;
    }

    > div:first-of-type {
      transform: translateY(20px) translateX(-100%);
      &::before {
        animation-duration: 2.3s;
      }
    }

    > div:nth-of-type(2) {
      transform: translateY(10px) translateX(-100%);
      &::before {
        animation-duration: 2.1s;
      }
    }
  }

  .rockets-left {
    right: unset;
    left: 10px;
    > div {
      &::before {
        animation-duration: 2.1s;
      }
    }
    > div:first-of-type {
      &::before {
        animation-duration: 2.2s;
      }
    }
    > div:nth-of-type(2) {
      &::before {
        animation-duration: 2.3s;
      }
    }
  }

  @media (min-width: ${screenmd}px) {
    &:hover,
    &:focus {
      .rockets {
        > div::before {
          animation-duration: 1.4s;
        }
        > div:first-of-type::before {
          animation-duration: 1.5s;
        }
        > div:nth-of-type(2)::before {
          animation-duration: 1.3s;
        }
      }
      .rockets-left {
        > div::before {
          animation-duration: 1.5s;
        }
        > div:first-of-type::before {
          animation-duration: 1.3s;
        }
        > div:nth-of-type(2)::before {
          animation-duration: 1.4s;
        }
      }
    }
  }

  ${props =>
    !props.disabled &&
    css`
      &:hover,
      &:focus {
        transform: translateX(-50%);
      }
      &:active {
        transform: translateY(1px) translateX(-50%);
      }

      .rockets {
        opacity: 1;
      }
    `};

  @media (max-width: ${screenmd}px) {
    max-width: 100%;
    bottom: 0;
  }
`
