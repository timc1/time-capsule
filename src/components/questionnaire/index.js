import React, { useState, useRef, useEffect, useReducer } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { screenmd, UnstyledButton, scroll } from '../shared/styles'
import { Location } from '@reach/router'

import caretLeft from '../../images/caret-left.svg'

import About from './steps/about/index'
import Occupation, { IntroOccupation } from './steps/occupation/index'
import OccupationPlan from './steps/occupation/occupation-plan'
import PersonalInterests from './steps/hobbies/index'
import PersonalInterestsPlan from './steps/hobbies/personal-interests-plan'
import Relationships from './steps/relationships/index'

import useQuestionnaire from '../shared/hooks/useQuestionnaire'

import Transition, { WizardTransition } from '../shared/transition'
import Modal from '../shared/modal'

import arrow from '../../images/arrow.svg'

const questionnaireSteps = [
  {
    id: 'ABOUT',
    data: {
      component: About,
      meta: {
        sectionTitle: 'About',
        question: 'My name is...',
      },
    },
  },
  {
    id: 'INTRO_OCCUPATION',
    data: {
      component: IntroOccupation,
      meta: {
        sectionTitle: 'Career/Work',
      },
    },
  },
  {
    id: 'OCCUPATION_INFO',
    data: {
      component: Occupation,
      meta: {
        sectionTitle: 'Career/Work',
        question: 'I am currently a',
      },
    },
  },
  {
    id: 'OCCUPATION_PLAN',
    data: {
      component: OccupationPlan,
      meta: {
        sectionTitle: 'Career/Work',
        question: 'Where would you like to be within this next year?',
        subquestion:
          'Think where would you like to be in a year and what actions you are going to take to get there.',
      },
    },
  },
  {
    id: 'PERSONAL_INTERESTS',
    data: {
      component: PersonalInterests,
      meta: {
        sectionTitle: 'Personal Interests',
        question: 'What are some hobbies and activites that interest you?',
      },
    },
  },
  {
    id: 'PERSONAL_INTERESTS_PLAN',
    data: {
      component: PersonalInterestsPlan,
      meta: {
        sectionTitle: 'Personal Interests',
        question: 'How do you plan on being consistent with these interests?',
      },
    },
  },
  {
    id: 'RELATIONSHIPS',
    data: {
      component: Relationships,
      meta: {
        sectionTitle: 'Relationships',
        question: 'How would you rate your interpersonal relationships?',
      },
    },
  },
]

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
    data: { component: Component, meta },
  } = questionnaireSteps[index]

  useEffect(
    () => {
      initialFocusRef.current.focus()
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
      <Location>
        {({ navigate }) => (
          <Container>
            <Status
              aria-label="hidden"
              width={(index + 1) / questionnaireSteps.length}
            />
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
              />
              <p>{meta.sectionTitle}</p>
            </DescriptionHeader>
            <Transition
              transitionKey={context.questionnaireState.meta.currentStepId}
            >
              <Question>{meta.question}</Question>
              {meta.subquestion && (
                <SubQuestion>{meta.subquestion}</SubQuestion>
              )}
            </Transition>
            <WizardTransition
              transitionKey={context.questionnaireState.meta.currentStepId}
              type={transitionDirection}
            >
              <UserInteractionSection>
                <Component
                  canContinue={canContinue}
                  setContinue={setContinue}
                  dispatchModal={dispatchModal}
                />
              </UserInteractionSection>
            </WizardTransition>
            {index !== questionnaireSteps.length - 1 && (
              <NextButton
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
                <div className="rockets" aria-hidden="true" {...props}>
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
  max-width: 400px;
  width: 100%;
  margin: 80px auto;
`

const Status = React.memo(
  styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    z-index: 2;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: var(--blue);
      transition: transform 0.25s ease-in;
      transform: ${props => `scaleX(${props.width})`};
      transform-origin: 0;
      transition-delay: 0.15s;
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
    top: 2px;
    left: 0;
    right: 0;
    padding: 25px;
    box-shadow: var(--baseboxshadow);
    z-index: 2;
  }
`

const BackButton = styled(UnstyledButton)`
  padding: 0;
  font-size: 0;
  padding: 5px 5px 4px 5px;
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
    transition: transform 0.1s ease-in;
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
  margin: 0 0 20px 0;
  font-size: var(--fontlg);
  font-family: var(--ff-serif);
  text-align: center;
  color: var(--black);
`

const SubQuestion = styled.h2`
  margin: 0;
  text-align: center;
  color: var(--gray2);
  font-weight: var(--fontregular);
  line-height: var(--baselineheight);
`

const UserInteractionSection = styled.div`
  position: relative;
  margin: 5rem 0 2.5rem 0;
  display: grid;
  grid-auto-rows: max-content;
  min-height: 300px;
`

export const NextButton = styled(UnstyledButton)`
  position: fixed;
  bottom: var(--baseborderpadding);
  left: 50%;
  transform: translateX(-50%);
  max-width: 400px;
  width: 100%;
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
    background: var(--gray1);
    z-index: -1;
    transition: 0.25s ease-in;
    transition-property: transform;
    transform: ${props => (props.disabled ? 'scaleX(1)' : 'scaleX(0)')};
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
      background: var(--blue1);
      z-index: -2;
    }
    &::after {
      background: var(--blue);
      z-index: -2;
      transition: opacity 0.15s ease-in;
    }
  }

  .rockets {
    position: absolute;
    right: 10px;
    height: 30px;
    width: 50%;
    top: 50%;
    opacity: 0;
    transform: translateY(-50%);
    transition: opacity 0.15s ease-in;
    overflow: hidden;
    > div::before {
      content: '';
      position: absolute;
      height: 10px;
      width: 10px;
      background: var(--white);
      mask: url(${arrow}) center center / contain no-repeat;
      -webkit-mask: url(${arrow}) center center / contain no-repeat;
      animation: ${scroll('120px')} 1s infinite linear;
      transform: translateX(-20px);
      opacity: 1;
      transition-property: opacity, transform;
    }

    > div:first-of-type {
      transform: translateY(20px);
      &::before {
        animation-duration: 1.1s;
        background: #fff9a7;
      }
    }

    > div:nth-of-type(2) {
      transform: translateY(10px);
      &::before {
        animation-duration: 0.9s;
        background: #9cf0e1;
      }
    }
  }

  @media (min-width: ${screenmd}px) {
    &:hover,
    &:focus {
      .rockets {
        > div::before {
          animation-duration: 0.8s;
        }
        > div:first-of-type::before {
          animation-duration: 0.9s;
        }
        > div:nth-of-type(2)::before {
          animation-duration: 0.7s;
        }
      }
    }
  }

  ${props =>
    !props.disabled &&
    css`
      &:hover,
      &:focus {
        transform: translateY(-1px) translateX(-50%);
        > span::after {
          opacity: 0;
        }
      }
      &:active {
        transform: translateY(1px) translateX(-50%);
        > span::after {
          opacity: 1;
        }
      }

      .rockets {
        opacity: 1;
      }
    `};

  @media (max-width: ${screenmd}px) {
    position: fixed;
    bottom: 0;
  }
`
