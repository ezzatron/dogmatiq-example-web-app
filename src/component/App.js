import React from 'react'
import { hot } from 'react-hot-loader/root'

import Root from './Root.js'

export default hot(App)

function App (props) {
  return (
    <>
      <Root />
    </>
  )
}
