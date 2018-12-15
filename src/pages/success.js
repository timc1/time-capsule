import React, { useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { navigate } from 'gatsby'

import starSolid from '../images/star_solid.svg'
import animate from 'animateplus'

export default React.memo(props => {
  const containerRef = useRef()

  const startAnimation = () => {
    const colors = ['red', 'blue', 'green', 'orange', 'purple', 'turqoise']

    const random = (min, max) => Math.random() * (max - min) + min

    const randomColorClass = () =>
      `${colors[Math.floor(random(0, colors.length))]}`

    const createElements = (
      total,
      elements = [],
      wrap = containerRef.current
    ) => {
      if (!total) {
        return elements
      }
      const element = document.createElement('span')
      element.style.left = `${random(-3, 99)}%`
      element.classList.add(randomColorClass())
      elements.push(element)
      wrap.appendChild(element)
      return createElements(total - 1, elements, wrap)
    }

    const elements = createElements(40)
    const { innerHeight: y } = window

    animate({
      elements,
      duration: 7000,
      delay: index => index * 160,
      easing: 'linear',
      loop: true,
      transform: ['translateY(-30px) scale(1) rotate(0deg)', `${y} .4 560`],
    })
  }

  useEffect(() => {
    if (props.location.state?.name) {
      startAnimation()
    } else {
      navigate('/', { replace: true })
    }
  }, [])

  return props.location.state?.name ? (
    <Container ref={containerRef}>
      <TextContainer>
        <h1>Thanks, {props.location.state?.name}!</h1>
      </TextContainer>
    </Container>
  ) : null
})

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  span {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    transform: translateY(-30px);
    &::after {
      content: '';
      position: absolute;
      background: #eee;
      -webkit-mask: url(${starSolid}) center center / contain no-repeat;
      mask: url(${starSolid}) center center / contain no-repeat;
      height: 30px;
      width: 30px;
    }
  }

  span.red::after {
    background: var(--red);
  }
  span.blue::after {
    background: var(--blue1);
  }
  span.green::after {
    background: var(--green);
  }
  span.purple::after {
    background: var(--purple);
  }
  span.orange::after {
    background: var(--orange);
  }
  span.turqoise::after {
    background: var(--turqoise);
  }
`

const animateIn = keyframes`
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  } 
`

const TextContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, 0%) scale(0.8);
  animation: ${animateIn} 0.25s var(--cubic);
  animation-fill-mode: forwards;
  animation-delay: 0.5s;

  h1 {
    font-size: var(--fontxl);
    font-weight: var(--fontbold);
    font-family: var(--ff-serif);
    text-align: center;
  }
`
