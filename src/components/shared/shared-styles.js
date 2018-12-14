import React from 'react'
import styled from '@emotion/styled'
import { keyframes, css } from '@emotion/core'
import { Link } from 'gatsby'

const screensm = 568
const screenmd = 768
const screenlg = 1044

const slideInFromLeft = keyframes`
  from {
    transform: scaleX(1); 
  }
  to {
    transform: scaleX(0); 
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0; 
  }
  to {
    opacity: 1; 
  }
`

const zoomIn = keyframes`
  from {
    transform: scale(.5); 
  }
  to {
    transform: scale(1); 
  }
`

const fadeInUp = keyframes`
  from {
    opacity: 0; 
    transform: translateY(10px);
  }
  to {
    opacity: 1; 
    transform: translateY(0px);
  }
`

const scroll = (to = '30px') => keyframes`
  to {
    transform: translateX(${to});
  }
`

const verticalScroll = (to = '-30px') => keyframes`
  to {
    transform: translateY(${to});
  }
`

const UnstyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: var(--black);
  cursor: pointer;
  transform: translateY(0);
  transition: transform 0.15s ease-in;

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
    box-shadow: var(--boxshadow2);
    opacity: 0;
    transition-property: opacity;
    transition: 0.15s ease-in;
  }

  &:hover,
  &:focus {
    transform: translateY(-1px);
    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
    &::before {
      opacity: 0;
    }
  }
`

const UnstyledButton = styled.button`
  position: relative;
  border: none;
  background: none;

  &:disabled {
    cursor: not-allowed;
  }

  > .pseudo {
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  > span,
  > p {
    margin: 0;
    color: var(--white);
    font-weight: var(--fontbold);
  }
`

const ExitButton = styled(UnstyledButton)`
  height: 30px;
  width: 30px;
  border-radius: var(--baseborderradius);
  outline: none;
  > div {
    opacity: 0.7;
  }
  > span {
    display: none;
  }
  &::after {
    content: '';
    box-shadow: 0 0 1px var(--white2);
    border-radius: 50%;
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

const ExitIcon = styled.div`
  color: var(--white);
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 0;
  margin-left: 0;
  width: 21px;
  height: 21px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 21px;
    height: 2px;
    background-color: currentColor;
    border-radius: var(--baseborderradius);
  }

  &::before {
    transform: rotate(-45deg);
  }

  &::after {
    transform: rotate(45deg);
  }
`

const AnimatedButton = styled(UnstyledButton)`
  padding: var(--fontmd);
  outline: none;
  cursor: pointer;
  transition: transform 0.15s var(--cubic);

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: var(--baseborderradius);
    transition: 0.25s var(--cubic);
  }
  &::before {
    background: var(--gray1);
    transition-property: transform;
    transform: ${props => (props.disabled ? 'scaleX(1)' : 'scaleX(0)')};
    transform-origin: ${props => (props.disabled ? '0 50%' : '100% 50%')};
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: var(--boxshadow2);
    opacity: 0;
  }

  .pseudo {
    color: var(--white);
    font-weight: var(--fontbold);
    &::after,
    &::before {
      border-radius: var(--baseborderradius);
      transition: opacity 0.22s var(--cubic);
    }
    &::after {
      background: var(--blue);
      z-index: -2;
    }
    &::before {
      background: var(--blue1);
      z-index: -2;
    }
  }

  ${props =>
    !props.disabled &&
    css`
      &:hover,
      &:focus {
        transform: translateY(-1px);

        .pseudo::after {
          opacity: 0;
        }

        &::after {
          opacity: 1;
        }
      }

      &:active {
        transform: translateY(1px);
        .pseudo::after {
          opacity: 1;
        }
        &::after {
          opacity: 0;
        }
      }
    `};
`

const loaderSpin = keyframes`
  0% {
    transform: rotate(0deg) translate(-50%, -50%);
  }
  100% {
    transform: rotate(360deg) translate(-50%, -50%);
  }
`

const Loader = React.memo(
  styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0;
    font-size: 1.5px;
    text-indent: -9999em;
    border-top: 1.1em solid var(--white);
    border-right: 1.1em solid var(--white);
    border-bottom: 1.1em solid var(--white);
    border-left: 1.1em solid transparent;
    border-radius: 50%;
    width: 10em;
    height: 10em;
    transform: ${props =>
      props.isShowing
        ? 'translateZ(0) translate(-50%, -50%) scale(1)'
        : 'translateZ(0) translate(-50%, -50%) scale(0)'};
    transform-origin: 0 0;
    animation: ${loaderSpin} 1.1s infinite linear;
    opacity: ${props => (props.isShowing ? '1' : '0')};

    &::after {
      content: '';
      border-radius: 50%;
      width: 10em;
      height: 10em;
    }
  `,
  (prevProps, nextProps) => prevProps.isShowing === nextProps.isShowing
)

export {
  screensm,
  screenmd,
  screenlg,
  slideInFromLeft,
  fadeIn,
  fadeInUp,
  zoomIn,
  scroll,
  verticalScroll,
  UnstyledLink,
  UnstyledButton,
  AnimatedButton,
  ExitButton,
  ExitIcon,
  Loader,
}
