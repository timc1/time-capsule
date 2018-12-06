import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { Link } from 'gatsby'

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
  to {
    opacity: 1; 
  }
`

const UnstyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: var(--black);
  cursor: pointer;
  transform: translateY(0);
  transition: transform 0.1s ease-in;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: var(--baseboxshadow);
    opacity: 0;
    transition: opacity 0.1s ease-in;
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
`

export {
  screenmd,
  screenlg,
  slideInFromLeft,
  fadeIn,
  UnstyledLink,
  UnstyledButton,
}
