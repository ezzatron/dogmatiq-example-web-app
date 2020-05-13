import React from 'react'
import { ConnectedLink } from 'react-router5'

import styles from './PrimaryNav.module.css'
import { BLUE, GREEN, RED } from '~/src/routes.js'

export default function PrimaryNav () {
  return (
    <ul className={styles.nav}>
      <li><ConnectedLink routeName={BLUE}>Blue</ConnectedLink></li>
      <li><ConnectedLink routeName={GREEN}>Green</ConnectedLink></li>
      <li><ConnectedLink routeName={RED}>Red</ConnectedLink></li>
    </ul>
  )
}
