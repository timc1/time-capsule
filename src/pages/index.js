import React, { useRef, useEffect } from 'react'
import styled from '@emotion/styled'

import { UnstyledLink } from '../components/shared/styles'
import RocketAnimation from '../components/shared/animations/rocket'

//import Image from '../components/image'

const IndexPage = React.memo(() => {
  const containerRef = useRef()

  useEffect(() => {
    containerRef.current.classList.add('animated')
    return () => containerRef.current.classList.remove('animated')
  }, [])

  return (
    <Intro ref={containerRef}>
      <h1 className="title">There will be a title</h1>
      <h2 className="subtitle">
        There will be some type of text that'll make people feel great and click
        the call to action
      </h2>
      <AnimatedLink to="/setup">
        <p className="text">start</p>
        <RocketAnimation />
      </AnimatedLink>
    </Intro>
  )
})

const Intro = styled.section`
  position: absolute;
  max-width: 600px;
  margin-top: 100px;

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
    font-size: var(--fontlg);
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
    transition: transform 0.15s ease-in;
  }
`

const AnimatedLink = styled(UnstyledLink)`
  display: inline-block;
  padding: 15px 60px 15px 25px;
  border: 2px solid var(--black);
  outline: none;

  .text {
    display: inline-block;
    margin: 0;
    text-transform: uppercase;
    transition: transform 0.15s ease-in;
  }
`

export default IndexPage
