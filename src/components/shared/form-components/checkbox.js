import React from 'react'
import styled from '@emotion/styled'
import { UnstyledButton, screenmd } from '../styles'

const Checkbox = ({ getCheckboxItemProps, items }) => (
  <CheckboxGroup>
    {items.map(item => (
      <li key={item.id}>
        <CheckboxItem
          {...getCheckboxItemProps({
            id: item.id,
            'data-testid': 'checkbox-button',
          })}
        >
          <span className="pseudo" aria-hidden="true">
            {item.name}
          </span>
        </CheckboxItem>
      </li>
    ))}
  </CheckboxGroup>
)

const CheckboxGroup = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;
  @media (max-width: ${screenmd}px) {
    justify-content: center;
  }
`

const CheckboxItem = React.memo(
  styled(UnstyledButton)`
    padding: 8px 10px 10px 10px;
    margin: 0 5px 10px 5px;
    outline: none;
    cursor: pointer;
    transition: transform 0.15s ease-in;

    > span {
      color: ${props => (props.isChecked ? 'var(--white)' : 'var(--black)')};
      font-size: var(--fontsm);
      font-weight: var(--fontregular);
      opacity: ${props => (props.isChecked ? 1 : 0.7)};
      transition: opacity 0.15s var(--cubic);
      &::before,
      &::after {
        border-radius: var(--baseborderradius);
        transform-origin: 0;
        transition: 0.15s var(--cubic);
        transition-property: opacity, transform;
        z-index: -1;
      }
      &::before {
        border: 1px solid var(--gray1);
      }
      &::after {
        border: 1px solid var(--blue);
        background: var(--blue);
        transform: ${props => (props.isChecked ? 'scaleX(1)' : 'scaleX(0)')};
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
      border: 1px solid var(--gray3);
      border-radius: var(--baseborderradius);
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
