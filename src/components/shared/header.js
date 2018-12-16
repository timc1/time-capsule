import React, { useState } from 'react'
import styled from '@emotion/styled'
import { UnstyledButton } from './styles'

export default React.memo(({ siteTitle }) => {
  const [isTeamShowing, setTeamShowing] = useState(false)

  return (
    <Header>
      <h1 className="hidden">
        New Year Time Capsule -- Send Your Future Self A Letter
      </h1>
      <h2 className="hidden">
        Write your future self a letter talking about your goals and how you
        plan on accomplishing them in the upcoming year. 365 days later you'll
        receive your letter in your email. Reflect, and hopefully you'll be a
        few steps closer to where you want to be!
      </h2>
      <nav>
        <ul>
          <li className="hidden">
            <a href="/about">About</a>
          </li>
          <li className="hidden">
            <a href="/setup">Get Started</a>
          </li>
          <li className="hidden">
            <a href="mailto:timchang.tcc@gmail.com?subject=Hello!">Contact</a>
          </li>
          <li className="about">
            <UnstyledButton
              onClick={e => setTeamShowing(prevIsShowing => !prevIsShowing)}
            >
              {isTeamShowing ? 'Bye' : 'Hi'}
            </UnstyledButton>
            <MadeIn isShowing={isTeamShowing}>
              Made in sunny{' '}
              <span role="img" aria-label="Palm Tree Emoji">
                🌴
              </span>{' '}
              LA by{' '}
              <a
                href="https://tcc.im?ref=time_capsule"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tim Chang
              </a>{' '}
              &amp;{' '}
              <a
                href="https://alexcarey.myportfolio.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alex Carey
              </a>
            </MadeIn>
          </li>
        </ul>
      </nav>
    </Header>
  )
})
const Header = styled.header`
  .hidden {
    display: none;
  }

  nav {
    position: relative;
  }

  .about {
    position: absolute;
    right: 15px;
    top: 15px;
  }
`
const MadeIn = styled.p`
  margin: 0;
  position: absolute;
  top: -5px;
  right: 50px;
  font-size: var(--fontsm);
  width: max-content;
  margin: 0;
  opacity: ${props => (props.isShowing ? 1 : 0)};
  transform: ${props =>
    props.isShowing ? 'translateX(0)' : 'translateX(40px)'};
  transition-property: opacity, transform;
  transition: 0.15s var(--cubic);
  pointer-events: ${props => (props.isShowing ? 'initial' : 'none')};
  a {
    font-size: inherit;
    color: var(--blue);
  }
`
