import React from 'react'
import {css} from 'linaria'
import {styled} from 'linaria/react'

import bell from '@assets/bell.svg'

export const Header = () => {
  return (
    <div className={wrapper}>
      <Price>100.00 ₽</Price>
      <User>
        <Icon src={bell} />
        vikavishny
      </User>
      <Exit>Выйти</Exit>
    </div>
  )
}
const margin = 20
const size = 0.7
const wrapper = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin: ${margin}px;

  color: rgb(122, 129, 133);
`

const Price = styled.div`
  margin: ${margin}px;
  font-size: ${size}em;
`
const User = styled.div`
  display: flex;
  align-items: center;

  margin: ${margin}px;
  font-size: ${size}em;
`
const Icon = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`
const Exit = styled.div`
  margin: ${margin}px;
  font-size: ${size}em;
`
