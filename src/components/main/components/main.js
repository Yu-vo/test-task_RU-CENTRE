import React from 'react'
import {styled} from 'linaria/react'
import {Route, Switch} from 'react-router-dom'

import {Header} from './header'
import {MainBox} from './mainbox'

import {Wrapper} from '@ui'

export const Main = () => {
  return (
    <Wrapper>
      <Header />
      <Switch>
        {/* <Route path="/acc" component={} exact />
        <Route path="/vps" component={} />
        <Route path="/Domen" component={} /> */}
        <Route path="/help" component={MainBox} />
      </Switch>
    </Wrapper>
  )
}
