import React from 'react'
import styled from '@emotion/styled'
import { UnstyledButton } from '../shared/styles'

import caretLeft from '../../images/caret-left.svg'

import About from './steps/about'

export default () => {
  // const { context, dispatch } = useQuestionnaire()
  return (
    <Container>
      <DescriptionHeader>
        <BackButton>back</BackButton>
        <p>About</p>
      </DescriptionHeader>
      <Question>What is your name?</Question>
      <About />
    </Container>
  )
}

const Container = styled.section`
  max-width: 400px;
  width: 100%;
  margin: 100px auto;
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
  position: relative;
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
