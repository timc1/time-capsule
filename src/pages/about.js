import React from 'react'
import styled from '@emotion/styled'

import { screenlg, screenmd } from '../components/shared/styles'

export default () => (
  <Container>
    <Content>
      <h1>About</h1>
      <p>
        New Year Time Capsule (NYTC) is a project that enables people to send
        their future selves a letter and receive the letter one year later.
      </p>
      <p>
        It is part of our initiative to design & develop resources to empower
        others to create.
      </p>
      <h2>Team</h2>
      <ul>
        <li>
          <h3>
            <a href="/" className="new-tab">
              Alex Carey
            </a>
            <span> - Illustration &amp; Motion Animation</span>
          </h3>
        </li>
        <li>
          <h3>
            <a href="/" className="new-tab">
              Tim Chang
            </a>
            <span> - Product Design &amp; Development</span>
          </h3>
        </li>
      </ul>
      <h2>Media</h2>
      <ul>
        <li>
          <p>
            Download brand assets <a href="/">here</a>
          </p>
        </li>
        <li>
          <p>
            View code on <a href="/">Github</a>
          </p>
        </li>
      </ul>
      <h2>Contact</h2>
      <p>
        We are always open to collaborating and building products with other
        creators. Shoot us an email{' '}
        <a href="mailto:timchang.tcc@gmail.com?subject=Hello!">here</a>. Based
        in Los Angeles.
      </p>
    </Content>
  </Container>
)

const Container = styled.section`
  max-width: ${screenlg}px;
  margin: 60px auto;
  padding: var(--baseborderpadding);

  @media (max-width: ${screenmd}px) {
    margin-top: 20px;
  }
`

const Content = styled.div`
  max-width: 500px;

  h1 {
    font-size: var(--fontlg);
    font-family: var(--ff-serif);
  }
  h2 {
    font-size: 1.5rem;
    font-weight: var(--fontbold);
    margin-top: 40px;
  }
  h3 {
    font-size: var(--fontmd);
  }
  p {
  }
  ul {
  }
  li {
  }

  a {
    position: relative;
    color: var(--blue);
    &::before {
      content: '';
      position: absolute;
      bottom: -1px;
      height: 2px;
      width: 100%;
      background: var(--black);
      transform: scaleX(0);
      transform-origin: 0;
      transition: transform 0.15s var(--cubic);
      z-index: -1;
    }
    &:hover,
    &:focus {
      &::before {
        transform: scaleX(1);
      }
    }
  }
  .new-tab {
    cursor: ne-resize;
  }
`
