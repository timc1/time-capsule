import React from 'react'
import styled from '@emotion/styled'

import {
  slideInFromLeft,
  fadeIn,
  RocketLink,
} from '../components/shared/styles'

const IndexPage = () => {
  return (
    <Intro>
      <h1 className="title">New Year Time Capsule</h1>
      <h2 className="subtitle">
        Write a letter to your future self, take action, receive it 365 days
        from today.
      </h2>
      <RocketLink to="/setup" text="Start" />
    </Intro>
  )
}

const Intro = styled.section`
  position: relative;
  max-width: 400px;
  margin-top: 100px;
  opacity: 0;
  animation: ${fadeIn} 0.25s ease-in;
  animation-fill-mode: forwards;
  animation-delay: 0.15s;

  .title,
  .subtitle {
    margin: 0;
    color: var(--black);
  }

  .title {
    font-family: var(--ff-serif);
    font-size: var(--fontxl);
    margin-bottom: 10px;
  }

  .subtitle {
    font-family: var(--ff-sans-serif);
    font-size: var(--fontmd);
    margin-bottom: 40px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--white);
    transform: scaleX(1);
    transform-origin: 100%;
    transition: transform 0.25s ease-in;
    animation: ${slideInFromLeft} 0.25s ease-in;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
  }
`

export default IndexPage
