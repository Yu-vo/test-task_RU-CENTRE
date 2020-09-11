import React from 'react'
import {styled} from 'linaria/react'
import {Route} from 'react-router-dom'

import {Option} from './option'
import {ItemList} from './item-list'
import {Heading} from './heading'
import {withGetData} from '../../container/with-get-data'

export const MainBox = () => {
  return (
    <Wrapper>
      <Heading />
      <Option />
      <Route path="/help/history" component={withGetData(ItemList)} />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background-color: white;

  margin: 0 40px;
  box-shadow: 0 0 5px rgb(214, 214, 214);
`
