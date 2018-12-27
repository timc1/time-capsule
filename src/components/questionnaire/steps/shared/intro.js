import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import lottie from 'lottie-web'

const Intro = React.memo(
  ({ canContinue, setContinue, title, illustration }) => {
    const illustrationRef = useRef()
    const animationRef = useRef()

    useEffect(() => {
      if (!canContinue) setContinue(true)

      if (illustration) {
        animationRef.current = lottie.loadAnimation({
          container: illustrationRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: illustration,
        })
      }
      return () => {
        if (animationRef.current) {
          animationRef.current.destroy()
        }
      }
    }, [])

    return <Container ref={illustrationRef} />
  }
)

export default Intro

const Container = styled.div`
  margin-top: -2rem;
`
