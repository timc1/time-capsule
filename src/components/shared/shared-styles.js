import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { Link } from 'gatsby'

const screensm = 568
const screenmd = 767
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

export {
  screensm,
  screenmd,
  screenlg,
  slideInFromLeft,
  fadeIn,
  fadeInUp,
  zoomIn,
  scroll,
  UnstyledLink,
  UnstyledButton,
  ExitButton,
  ExitIcon,
}
