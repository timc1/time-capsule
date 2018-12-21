import React, { useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { navigate } from 'gatsby'

import { screenmd, slideInFromLeft } from '../components/shared/styles'
import starSolid from '../images/star_solid.svg'
import animate from 'animateplus'

export default React.memo(props => {
  const backdropRef = useRef()

  const startAnimation = () => {
    const colors = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6']

    const random = (min, max) => Math.random() * (max - min) + min

    const randomColorClass = () =>
      `${colors[Math.floor(random(0, colors.length))]}`

    const createElements = (
      total,
      elements = [],
      wrap = backdropRef.current
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

    const elements = createElements(30)
    const { innerHeight: y } = window

    animate({
      elements,
      duration: 7000,
      delay: index => index * 350,
      easing: 'linear',
      loop: true,
      transform: ['translateY(-60px) scale(1) rotate(0deg)', `${y} .4 560`],
    })
  }

  useEffect(() => {
    if (props.location.state?.name) {
      startAnimation()
    } else {
      navigate('/', { replace: true })
    }
    window.scrollTo({ top: 0 })
  }, [])

  return props.location.state?.name ? (
    <Container>
      <Backdrop ref={backdropRef} aria-hidden="true" />
      <Content>
        <Title>
          <h1>Thanks, {props.location.state?.name}!</h1>
          <h2>See you next year!</h2>
        </Title>
        <SocialContainer>
          <h3>
            Consider sharing this project with a friend you think may find this
            useful/fun!
          </h3>
          <ul>
            {social
              ? social.map(({ name, text, ...rest }) => (
                  <SocialItem key={name}>
                    <h4>{name}</h4>
                    <SocialLink
                      {...rest}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {text || 'Share'}
                    </SocialLink>
                  </SocialItem>
                ))
              : null}
          </ul>
        </SocialContainer>
      </Content>
    </Container>
  ) : null
})

const social = [
  {
    name: `Email`,
    text: `Send`,
    href: `mailto:?subject=New Years Time Capsule is awesome!&amp;body=Check out this site https://www.timecapsule.io.`,
    title: `Share by Email`,
    color: `var(--blue)`,
  },
  {
    name: `Twitter`,
    text: `Tweet`,
    href: `https://twitter.com/home?status=This%20site%20lets%20you%20write%20your%20current%20goals%20to%20your%20future%20self!%20Check%20it%20out%3A%20www.timecapsule.io`,
    color: `#1da1f2`,
  },
  {
    name: `Facebook`,
    text: `Share`,
    href: `https://www.facebook.com/sharer/sharer.php?kid_directed_site=true&u=https%3A%2F%2Ftodohq.co`,
    color: `#3b5998`,
  },
  {
    name: `Pinterest`,
    text: `Pin`,
    href: `https://www.pinterest.com/pin/find/?url=https%3A%2F%2Ftodohq.co`,
    color: `#bd081c`,
  },
  {
    name: `LinkedIn`,
    text: `Post`,
    href: `https://www.linkedin.com/shareArticle?url=https%3A%2F%2Ftodohq.co&mini=true&title=New Years Time Capsule`,
    color: `#007bb5`,
  },
]

const Container = styled.div`
  position: relative;
`

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  pointer-events: none;
  span {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    transform: translateY(-60px);
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

  span.c1::after {
    background: var(--c1);
  }
  span.c2::after {
    background: var(--c2);
  }
  span.c3::after {
    background: var(--c3);
  }
  span.c4::after {
    background: var(--c4);
  }
  span.c5::after {
    background: var(--c5);
  }
  span.c6::after {
    background: var(--c6);
  }
`

const Title = styled.div`
  position: relative;
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
    animation: ${slideInFromLeft} 0.8s var(--cubic);
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
  }
`

const Content = styled.div`
  color: var(--black1);
  max-width: 450px;
  width: 100%;
  margin: 120px auto;
  z-index: 3;

  h1 {
    font-size: var(--fontxl);
    font-weight: var(--fontbold);
    font-family: var(--ff-serif);
    text-align: center;
    margin: 0 0 15px 0;
  }
  h2 {
    text-align: center;
    font-size: var(--fontidk);
    font-weight: var(--fontbold);
    margin: 0;
  }
  h3 {
    text-align: center;
    font-size: var(--fontmd);
    font-weight: var(--fontregular);
    margin: 0 0 15px 0;
  }
  h4 {
    font-size: var(--fontidk);
    font-weight: var(--fontbold);
    margin: 0;
  }
  p {
    margin: 0;
    font-size: var(--fontmd);
  }

  @media (max-width: ${screenmd}px) {
    margin-bottom: 0;
  }
`

const animateIn = keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  } 
`

const SocialContainer = styled.div`
  margin-top: 40px;
  padding: calc(var(--baseborderpadding) * 2);
  background: var(--white1);
  border-radius: var(--baseborderradius);
  box-shadow: var(--boxshadow2);
  opacity: 0;
  transform: translateY(5px);
  animation: ${animateIn} 0.5s var(--cubic);
  animation-fill-mode: forwards;
  animation-delay: 1.6s;

  @media (max-width: ${screenmd}px) {
    box-shadow: none;
    margin-top: 0;
    padding: calc(2 * var(--baseborderpadding));
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      var(--white1)
    );
  }
`

const SocialItem = styled.li`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`

const SocialLink = styled.a`
  position: relative;
  color: ${props => props.color || 'var(--blue)'};
  font-weight: var(--fontbold);
  cursor: ne-resize;
  outline: none;

  &::before {
    content: '';
    position: absolute;
    bottom: -1px;
    width: 100%;
    height: 2px;
    background: ${props => props.color || 'var(--blue)'};
    transform: scaleX(0);
    transform-origin: 0;
    transition: transform 0.15s var(--cubic);
  }

  &::after {
    content: '';
    display: block;
  }

  &:hover,
  &:focus {
    &::before {
      transform: scaleX(1);
    }
  }
`
