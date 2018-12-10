import React from 'react'
import styled from '@emotion/styled'

import { zoomIn, UnstyledButton } from '../../../shared/styles'

const SmallModalContainer = styled.div`
  position: relative;
  margin: calc(25vh) auto 100px auto;
  max-width: 400px;
  width: 100%;
  animation: ${zoomIn} 0.15s ease-in;

  label {
    margin-bottom: 10px;
    font-size: var(--fontlg);
  }

  form {
    display: grid;
    grid-gap: 10px;
  }
`

const ClickForMoreButton = styled(UnstyledButton)`
  justify-self: center;
  align-self: center;
  padding: 5px 10px;
  outline: none;
  cursor: pointer;
  > span {
    color: var(--gray2);
    font-size: var(--fontsm);
    opacity: 0.7;
    transition: opacity 0.1s ease-in;
    &::before {
      border-radius: var(--baseborderradius);
      box-shadow: 0 0 1px var(--gray2);
      transform: scale(0.8);
      opacity: 0;
      transition-property: opacity, transform;
      transition: 0.1s ease-in;
    }
  }

  &:hover {
    > span {
      opacity: 1;
    }
  }

  &:focus {
    > span::before {
      opacity: 1;
      transform: scale(1.05);
    }
  }

  &:active {
    > span::before {
      opacity: 1;
      transform: scale(0.95);
    }
  }
`

const Section = styled.section`
  display: grid;
`

const SectionName = React.memo(styled.h2`
  margin: 0 0 15px 0;
  font-size: var(--fontsm);
  font-weight: var(--fontbold);
  color: var(--black);
  text-transform: uppercase;
`)

export { SmallModalContainer, ClickForMoreButton, Section, SectionName }
