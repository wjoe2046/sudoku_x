import React from 'react'
import ReactDOM from 'react-dom'

import { unregister } from './core'
import { GlobalStyles } from './styles'

ReactDOM.render(
  <React.Fragment>
    <GlobalStyles />
    <div>Hello world</div>
  </React.Fragment>,
  document.getElementById('root')
)

unregister()
