import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'

export default React.memo(() => {
  const canvasRef = useRef()

  useEffect(() => {
    console.log('hi')
  }, [])

  return <Canvas ref={canvasRef} />
})

const Canvas = styled.canvas`
  position: absolute;
  right: 10px;
  height: 30px;
  width: 30px;
  top: 50%;
  transform: translateY(-50%);
  background: #eee;
`
