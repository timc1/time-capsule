import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { UnstyledButton, screenmd } from './styles'
import { Link } from 'gatsby'

import usePopup from './hooks/usePopup'

const links = [
  { url: '/', name: 'Home' },
  { url: '/setup', name: 'Get Started' },
  { url: '/about', name: 'About' },
]

export default React.memo(({ siteTitle }) => {
  const {
    isOpen,
    setOpen,
    getContainerProps,
    getTogglerProps,
    getMenuProps,
    getItemProps,
  } = usePopup()

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
          <li className="menu" {...getContainerProps()}>
            <MenuButton isMenuOpen={isOpen} {...getTogglerProps()}>
              <h1 className="hamburger">
                <span className="text">Menu</span>
                <span className="escape" aria-hidden="true">
                  (esc to close)
                </span>
              </h1>
            </MenuButton>
            <MenuBody {...getMenuProps()}>
              {links.map(link => (
                <li key={link.url}>
                  <MenuLink
                    to={link.url}
                    {...getItemProps({
                      onClick: e => setOpen(prevOpen => !prevOpen),
                    })}
                  >
                    {link.name}
                  </MenuLink>
                </li>
              ))}
            </MenuBody>
          </li>
        </ul>
      </nav>
    </Header>
  )
})
const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 4;
  .hidden {
    display: none;
  }

  nav {
    position: relative;
  }

  .menu {
    position: absolute;
    right: 0.3125rem;
    top: 0.4375rem;
  }
`

const MenuButton = styled(UnstyledButton)`
  padding: 1.875rem 2.1875rem;
  outline: none;
  cursor: pointer;
  transition: opacity 0.15s var(--cubic);

  .hamburger {
    font-size: 0;
    position: absolute;
    right: var(--baseborderpadding);
    top: 1.75rem;
    width: 1.4375rem;

    > .text {
      position: absolute;
      right: 0;
      height: 3px;
      width: 100%;
      font-size: 0;
      background: var(--black);
      opacity: ${props => (props.isMenuOpen ? 0 : 1)};
      transform: scaleX(1);
      transform-origin: 100%;
      transition-property: transform, opacity;
      transition: 0.15s ease;
    }

    > .escape {
      position: absolute;
      top: 50%;
      right: 35px;
      width: max-content;
      font-size: var(--fontxs);
      opacity: 0;
      transform: translateY(-50%) translateX(30px);
    }

    @media (min-width: ${screenmd}px) {
      > .escape {
        transform: ${props =>
          props.isMenuOpen
            ? 'translateY(-50%) translateX(0px)'
            : 'translateY(-50%) translateX(30px)'};
        transition: 0.15s var(--cubic);
        transition-delay: ${props => (props.isMenuOpen ? '.3s' : 'none')};
        color: var(--gray2);
        opacity: ${props => (props.isMenuOpen ? 1 : 0)};
        font-weight: var(--fontregular);
      }
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      height: 3px;
      width: 100%;
      background: currentColor;
      transition-property: transform, opacity;
      transition: 0.15s ease;
      transform-origin: ${props => (props.isMenuOpen ? '50%' : '100%')};
    }

    &::before {
      transform: ${props =>
        props.isMenuOpen
          ? 'scaleX(1) translateY(0) rotate(45deg)'
          : 'scaleX(0.6) translateY(-7px)'};
    }

    &::after {
      transform: ${props =>
        props.isMenuOpen
          ? 'scaleX(1) translateY(0) rotate(-45deg)'
          : 'scaleX(0.5) translateY(7px)'};
    }
  }

  ${props =>
    !props.isMenuOpen &&
    css`
      &:hover,
      &:focus {
        .hamburger {
          > .text {
            transform: scaleX(0.6);
          }
          &::before {
            transform: scaleX(1) translateY(-7px);
          }
          &::after {
            transform: scaleX(1) translateY(7px);
          }
        }
      }
      &:focus {
        opacity: 0.5;
      }
    `};
`

const MenuBody = styled.ul`
  background: var(--white);
  border: 1px solid var(--gray);
  position: absolute;
  right: 30px;
  width: 300px;
  border-radius: var(--baseborderradius);
  box-shadow: var(--boxshadow2);
  opacity: ${props => (props.isOpen ? 1 : 0)};
  transform: ${props => (props.isOpen ? 'scale(1)' : 'scale(.5)')};
  transition: 0.25s var(--cubic);
  transition-property: transform, opacity;
  transform-origin: 100% 0;
  pointer-events: ${props => (props.isOpen ? 'initial' : 'none')};

  @media (max-width: ${screenmd}px) {
    border: none;
  }

  li:first-of-type a {
    border-top: none;
  }
`

const MenuLink = styled(Link)`
  position: relative;
  display: block;
  padding: var(--baseborderpadding);
  border-top: 2px solid var(--gray);
  color: var(--black);
  outline: none;
  font-weight: var(--fontbold);

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  &::before {
    background: var(--gray);
  }

  &::after {
    background: var(--white);
    transform: scaleX(1);
    transform-origin: 100%;
    transition: transform 0.22s var(--cubic);
  }

  &:hover,
  &:focus {
    &::after {
      transform: scaleX(0);
    }
  }
`
