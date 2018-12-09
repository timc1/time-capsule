import React from 'react'
import styled from '@emotion/styled'
import { UnstyledButton } from '../../styles'

const Checkbox = ({ getCheckboxItemProps, items }) => (
  <CheckboxGroup>
    {items.map(item => (
      <li key={item.id}>
        <CheckboxItem {...getCheckboxItemProps({ id: item.id })}>
          <span>{item.name}</span>
        </CheckboxItem>
      </li>
    ))}
  </CheckboxGroup>
)

const CheckboxGroup = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;
`

const CheckboxItem = React.memo(
  styled(UnstyledButton)`
    padding: 8px 10px 10px 10px;
    margin: 0 5px 10px 5px;
    outline: none;
    cursor: pointer;
    transition: transform 0.15s ease-in;
    border-radius: var(--baseborderradius);
    overflow: hidden;

    > span {
      color: var(--white2);
      font-size: var(--fontsm);
      &::before,
      &::after {
        transition: opacity 0.15s ease-in;
        z-index: -1;
      }
      &::before {
        border: 1px solid var(--white1);
      }
      &::after {
        border: 1px solid var(--success);
        background: var(--white3);
        opacity: ${props => (props.isChecked ? 1 : 0)};
      }
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 1px solid var(--black3);
      opacity: 0;
      transition: opacity 0.15s ease-in;
    }

    &:focus {
      &::before {
        opacity: ${props => (props.isChecked ? 0 : 1)};
      }
    }

    &:active {
      transform: translateY(1px);
    }
  `,
  (prevProps, nextProps) => prevProps.isChecked === nextProps.isChecked
)

export { Checkbox }
