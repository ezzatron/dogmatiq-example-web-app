import loadable from '@loadable/component'
import React from 'react'
import { startsWithSegment } from 'router5-helpers'
import { useRouteNode } from 'react-router5'

import Loading from './Loading.js'
import NotFound from './NotFound.js'
import { BLUE, GREEN, RED } from '~/src/routes.js'

const loading = <Loading />

const Blue = loadable(() => import('./Blue.js'), { fallback: loading })
const Green = loadable(() => import('./Green.js'), { fallback: loading })
const Red = loadable(() => import('./Red.js'), { fallback: loading })

export default function Root () {
  const { route } = useRouteNode('')

  if (!route) return loading

  const { name, params } = route
  const isRoute = startsWithSegment(name)

  if (isRoute(BLUE)) return <Blue params={params} />
  if (isRoute(GREEN)) return <Green params={params} />
  if (isRoute(RED)) return <Red params={params} />

  return <NotFound />
}
