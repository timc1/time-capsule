import React from 'react'
import styled from '@emotion/styled'

const Intro = ({ canContinue, setContinue, title, text }) => {
  if (!canContinue) setContinue(true)
  return <P>{text}</P>
}
export default Intro

const P = styled.p`
  margin: 0;
  font-size: var(--fontmd);
  font-family: var(--ff-sans-serif);
`
