import React from 'react'
import firebase from '../lib/firebase'
import { ButtonDanger } from '@primer/components'

const LogoutButton = () => {
  const onClick = () => { firebase.auth().signOut() }
  return <ButtonDanger onClick={onClick}> GitHub Logout </ButtonDanger>
}

export default LogoutButton
