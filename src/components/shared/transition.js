import React from 'react'
import {
  TransitionGroup,
  Transition as ReactTransition,
  CSSTransition,
} from 'react-transition-group'

import useBackgroundColorUpdater from './hooks/useBackgroundColorUpdater'

const getBaseStyles = ({ delay }) => ({
  entering: {
    position: 'absolute',
    opacity: 0,
  },
  entered: {
    transition: `${delay}ms ease-in`,
    opacity: 1,
  },
  exiting: {
    transition: `${delay}ms ease-in`,
    opacity: 0,
  },
})

const Transition = React.memo(
  ({ children, location, transitionKey, type = 'default', delay = 250 }) => {
    useBackgroundColorUpdater(location)

    return (
      <TransitionGroup component={null}>
        <ReactTransition
          key={transitionKey}
          timeout={{
            enter: delay,
            exit: delay,
          }}
          style={{ position: 'relative' }}
        >
          {status => (
            <div
              style={{
                ...getBaseStyles({ delay })[status],
              }}
            >
              {children}
            </div>
          )}
        </ReactTransition>
      </TransitionGroup>
    )
  }
)

const WizardTransition = React.memo(
  ({
    children,
    location,
    transitionKey,
    type = 'horizontal-left',
    delay = 1000,
  }) => {
    useBackgroundColorUpdater(location)

    const classNames = `wizard wizard-${type}`
    return (
      <div style={{ position: 'relative' }}>
        <TransitionGroup
          component={null}
          childFactory={child =>
            React.cloneElement(child, {
              classNames,
              timeout: {
                enter: delay,
                exit: delay,
              },
            })
          }
        >
          <CSSTransition
            key={transitionKey}
            classNames={classNames}
            timeout={delay}
            appear={true}
          >
            <div>{children}</div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    )
  }
)

export default Transition
export { WizardTransition }
