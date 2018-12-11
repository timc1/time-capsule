import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'

const Form = styled.form`
  position: relative;
`

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
    border: none;
    background: transparent;
    opacity: ${props => (props.error ? 1 : 0)};
    transition-property: opacity;
    transition: 0.15s ease-in;
  }
`

const Input = styled.input`
  position: relative;
  display: block;
  background-color: transparent;
  border: none;
  border-left: 1px solid
    ${props => (props.error ? 'var(--error)' : 'var(--gray2)')};
  outline: none;
  width: 100%;
  color: var(--black);
  font-family: var(--ff-sanserif);
  font-weight: var(--fontregular);
  font-size: var(--fontmd);
  padding: 16px;
  transition: background-color 0.1s ease-in, color 0.1s ease-in;
  opacity: 0.7;
  &::placeholder {
    transition: color 0.15s ease-in;
    color: var(--gray1);
  }
  &:focus {
    opacity: 1;
  }
`

const StyledTextarea = styled.textarea`
  position: relative;
  display: block;
  background-color: transparent;
  border: none;
  border-left: 1px solid
    ${props => (props.error ? 'var(--error)' : 'var(--gray2)')};
  outline: none;
  width: 100%;
  color: var(--black);
  font-family: var(--ff-sanserif);
  font-weight: var(--fontregular);
  font-size: var(--fontmd);
  line-height: 1.5rem;
  padding: 0 15px;
  min-height: 200px;
  transition: background-color 0.1s ease-in, color 0.1s ease-in;
  opacity: 0.7;
  resize: none;
  &::placeholder {
    transition: color 0.15s ease-in;
    color: ${props => (props.error ? 'var(--error)' : 'var(--gray1)')};
  }
  &:focus {
    opacity: 1;
  }
`

const Textarea = React.memo(props => {
  const eventListener = useRef()
  const inputRef = useRef()

  const calcHeight = () => {
    inputRef.current.style.height = '96px'
    inputRef.current.style.height = inputRef.current.scrollHeight + 'px'
  }

  useEffect(() => {
    calcHeight()
    eventListener.current = e => calcHeight()

    inputRef.current.addEventListener('input', eventListener.current)
    return () =>
      inputRef.current.removeEventListener('input', eventListener.current)
  }, [])
  return <StyledTextarea {...props} ref={inputRef} />
})

const MessageContainer = styled.div`
  position: absolute;
  bottom: 100%;
  width: 100%;
  margin-bottom: 15px;
  color: ${props => (props.error ? 'var(--error)' : 'var(--success)')};
  font-size: var(--fontmd);
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

export { Form, Label, Input, Textarea, Message }
