import React from 'react'
import { render } from 'react-dom'
import createRouter from 'router5'
import browserPlugin from 'router5-plugin-browser'

import './main.css'

import App from './component/App.js'
import { routes } from './routes.js'

async function main () {
  const router = createRouter(routes, { allowNotFound: true, queryParamsMode: 'loose' })
  router.usePlugin(browserPlugin())
  router.start()

  await new Promise(resolve => {
    if (document.readyState !== 'loading') return resolve()

    document.addEventListener('DOMContentLoaded', resolve)
  })

  const app = <App router={router} />

  const root = document.createElement('div')
  render(app, root)
  document.body.appendChild(root)
}

main().catch(error => { console.error(error) })
