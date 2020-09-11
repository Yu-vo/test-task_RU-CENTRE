import React from 'react'
import {css} from 'linaria'
import {Router} from 'react-router'
import {createBrowserHistory} from 'history'
import {Navbar} from '@components/navbar'
import {Main} from '@components/main'
import {Footer} from '@components/footer'

import {CommonContent} from '@ui'

export const App = () => {
  const history = createBrowserHistory()
  return (
    <div className={globals}>
      <Router history={history}>
        <CommonContent>
          <Navbar />
          <Main />
        </CommonContent>
        <Footer />
      </Router>
    </div>
  )
}

const globals = css`
  :global() {
    body {
      margin: 0;
      padding: 0;

      background-color: rgb(247, 250, 251);
      font-family: 'ProximaNova-Regular', 'Verdana', 'Geneva', 'sans-serif';
    }
    img {
      max-width: 800px;
    }
  }
`
