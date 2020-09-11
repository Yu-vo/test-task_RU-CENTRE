import React from 'react'
import {styled} from 'linaria/react'

export const Heading = () => {
  return (
    <H>
      <h3
        style={{
          fontWeight: '100',
          fontSize: '15px',
          color: 'rgb(6, 36, 54)',
        }}
      >
        ПОДДЕРЖКА
      </h3>
      <h1 style={{color: 'rgb(6, 36, 54)'}}>ПОДДЕРЖКА</h1>
    </H>
  )
}
const H = styled.div`
  margin: 0 40px;
  border-bottom: solid 3px rgb(240, 240, 240);
`
