import React from 'react'

const IntroOccupation = ({ canContinue, setContinue }) => {
  if (!canContinue) setContinue(true)
  return <div>intro</div>
}
export { IntroOccupation }
