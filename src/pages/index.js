import React, { useRef, useEffect } from 'react'
import styled from '@emotion/styled'

import {
  screenmd,
  screenlg,
  slideInFromLeft,
  fadeIn,
  RocketLink,
} from '../components/shared/styles'

import lottie from 'lottie-web'
import landingIllustration from '../images/landing_illustration.json'

const IndexPage = React.memo(() => {
  const illustrationRef = useRef()
  const animationRef = useRef()

  useEffect(() => {
    animationRef.current = lottie.loadAnimation({
      container: illustrationRef.current, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: landingIllustration,
    })

    return () => animationRef.current.destroy()
  }, [])

  return (
    <Container>
      <Intro>
        <h1 className="title">This Next Year</h1>
        <h2 className="subtitle">
          Write a letter to your future self, take action, receive it 365 days
          from today.
        </h2>
        <RocketLink to="/setup" text="Start" aria-label="Click to start" />
      </Intro>
      <Illustration ref={illustrationRef} />
    </Container>
  )
})
const Container = styled.div`
  padding: var(--baseborderpadding);
  max-width: ${screenlg}px;
  margin: auto;
`
const Intro = styled.section`
  position: relative;
  max-width: 450px;
  margin-top: 200px;
  opacity: 0;
  animation: ${fadeIn} 0.25s ease-in;
  animation-fill-mode: forwards;
  animation-delay: 0.15s;
  display: grid;
  place-items: start;
  grid-gap: 10px;

  .title,
  .subtitle {
    margin: 0;
    color: var(--black1);
  }

  .title {
    font-family: var(--ff-serif);
    font-size: var(--fontxl);
  }

  .subtitle {
    font-family: var(--ff-sans-serif);
    font-size: 1.5rem;
    font-weight: var(--fontregular);
    margin-bottom: 30px;
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
    animation: ${slideInFromLeft} 0.7s var(--cubic2);
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
  }

  @media (max-width: ${screenmd}px) {
    margin-top: 50px;
    text-align: center;
    place-items: center;
    .subtitle {
      margin-bottom: 20px;
    }
  }
`
const Illustration = styled.div`
  height: auto;
  width: 700px;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in;
  animation-fill-mode: forwards;
  animation-delay: 1.3s;
  @media (max-width: ${screenmd}px) {
    margin-top: 30px;
    max-width: 90vw;
  }
`

export default IndexPage
