import styled from '@emotion/styled'

import { zoomIn, UnstyledButton } from '../../../shared/styles'

const SmallModalContainer = styled.div`
  position: relative;
  margin: calc(30vh) auto 100px auto;
  padding: var(--baseborderpadding);
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
  padding: 10px;
  outline: none;
  cursor: pointer;
  transition-property: opacity, transform;
  transition: 0.1s ease-in;
  > span {
    color: var(--white2);
    opacity: 0.7;
    transition: opacity 0.1s ease-in;
    &::before {
      border-radius: var(--baseborderradius);
      box-shadow: 0 0 12px var(--white1);
      transform: scale(0.9);
      opacity: 0;
      transition-property: opacity, transform;
      transition: 0.1s ease-in;
    }
  }

  &:hover,
  &:focus {
    transform: translateY(-1px);
    > span {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }

  &:active,
  &:focus {
    > span::before {
      opacity: 1;
      transform: scale(1);
    }
  }
`

export { SmallModalContainer, ClickForMoreButton }
