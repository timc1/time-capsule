import React from 'react'
import styled from '@emotion/styled'
import arrow from '../../../images/arrow.svg'

import { UnstyledLink, screenmd, scroll } from '../styles'

export function RocketLink({ to, text, ...props }) {
  return (
    <AnimatedLink to={to}>
      <p className="text">{text}</p>
      <div className="rockets" aria-hidden="true" {...props}>
        <div />
        <div />
        <div />
      </div>
    </AnimatedLink>
  )
}

const AnimatedLink = styled(UnstyledLink)`
  display: inline-block;
  padding: 15px 60px 15px 20px;
  outline: none;

  .text {
    display: inline-block;
    margin: 0;
    text-transform: uppercase;
    transition: transform 0.15s ease-in;
    color: var(--white);
    font-weight: var(--fontbold);
  }

  &::after {
    border: 1px solid var(--blue);
    border-radius: 2px;
    background: var(--blue);
    z-index: -1;
  }

  .rockets {
    position: absolute;
    right: 10px;
    height: 30px;
    width: 35px;
    top: 50%;
    transform: translateY(-50%);
    overflow: hidden;
    > div::before {
      content: '';
      position: absolute;
      height: 10px;
      width: 10px;
      background: var(--white);
      mask: url(${arrow}) center center / contain no-repeat;
      -webkit-mask: url(${arrow}) center center / contain no-repeat;
      animation: ${scroll('35px')} 1s infinite linear;
      transform: translateX(-20px);
      opacity: 1;
      transition-property: opacity, transform;
    }

    > div:first-of-type {
      transform: translateY(20px);
      &::before {
        animation-duration: 1.1s;
      }
    }

    > div:nth-of-type(2) {
      transform: translateY(10px);
      &::before {
        animation-duration: 0.9s;
      }
    }
  }

  @media (min-width: ${screenmd}px) {
    &:hover,
    &:focus {
      .rockets {
        > div::before {
          animation-duration: 0.5s;
        }
        > div:first-of-type::before {
          animation-duration: 0.6s;
        }
        > div:nth-of-type(2)::before {
          animation-duration: 0.4s;
        }
      }
    }
  }
`
