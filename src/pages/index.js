import React from 'react'
import styled from '@emotion/styled'

import {
  screenmd,
  screenlg,
  slideInFromLeft,
  fadeIn,
  RocketLink,
} from '../components/shared/styles'

import landingIllustration from '../images/landing_video.mp4'

const IndexPage = () => {
  return (
    <Container>
      <Intro>
        <h1 className="title">New Year Time Capsule</h1>
        <h2 className="subtitle">
          Write a letter to your future self, take action, receive it 365 days
          from today.
        </h2>
        <RocketLink to="/setup" text="Start" />
      </Intro>
      <Illustration>
        <video src={landingIllustration} type="video/mp4" autoPlay loop muted>
          Your browser does not support our beautiful animation.
        </video>
      </Illustration>
    </Container>
  )
}

const Container = styled.div`
  padding: var(--baseborderpadding);
  max-width: ${screenlg}px;
  margin: auto;
`

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
    font-weight: var(--fontregular);
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
    animation: ${slideInFromLeft} 0.4s ease-in;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
  }

  @media (max-width: ${screenmd}px) {
    margin-top: 40px;
    text-align: center;
  }
`

const Illustration = styled.div`
  video {
    max-height: 750px;
    max-width: 800px;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0;
    animation: ${fadeIn} 0.5s ease-in;
    animation-fill-mode: forwards;
    animation-delay: 1s;
    @media (max-width: ${screenmd}px) {
      margin-top: 30px;
      max-width: 90vw;
    }
  }
`

export default IndexPage
