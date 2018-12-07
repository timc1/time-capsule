import React from 'react'
import styled from '@emotion/styled'

const Form = styled.form``

const Label = styled.label`
  position: relative;
  display: block;
  cursor: text;
  color: var(--white);
  font-family: var(--ff-serif);
  font-weight: var(--fontbold);
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid var(--error);
    border-radius: var(--baseborderradius);
    background: transparent;
    opacity: ${props => (props.error ? 1 : 0)};
    transition-property: opacity;
    transition: 0.15s ease-in;
  }
`

const Input = styled.input`
  position: relative;
  display: block;
  background-color: var(--white2);
  border: none;
  outline: none;
  width: 100%;
  border-radius: var(--baseborderradius);
  color: #32325d;
  font-family: var(--ff-sanserif);
  font-weight: var(--fontregular);
  font-size: var(--fontmd);
  line-height: var(--fontlg);
  padding: 8px 15px;
  transition: background-color 0.1s ease-in, color 0.1s ease-in;
  &::placeholder {
    transition: color 0.15s ease-in;
    color: ${props => (props.error ? 'var(--error)' : 'var(--black4)')};
  }
`

const MessageContainer = styled.div`
  height: var(--fontlg);
  color: ${props => (props.error ? 'var(--error)' : 'var(--success)')};
  opacity: ${props => (props.hasContent ? 1 : 0)};
  transition: opacity 0.15s ease-in;
`

const Message = React.memo(
  ({ message }) => (
    <MessageContainer error={message.error} hasContent={message.value}>
      {message.value}
    </MessageContainer>
  ),
  (prevProps, nextProps) =>
    prevProps.message.value === nextProps.message.value &&
    prevProps.message.error === nextProps.message.error
)

export { Form, Label, Input, Message }
