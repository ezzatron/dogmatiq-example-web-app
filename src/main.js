import React from 'react'
import { render } from 'react-dom'

import App from './component/App.js'

async function main () {
  await new Promise(resolve => {
    if (document.readyState !== 'loading') return resolve()

    document.addEventListener('DOMContentLoaded', resolve)
  })

  const root = document.createElement('div')
  render(<App />, root)
  document.body.appendChild(root)
}

main().catch(error => { console.error(error) })
