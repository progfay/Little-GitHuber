import React from 'react'
import firebase from '../lib/firebase'
import { ButtonPrimary } from '@primer/components'

const LoginButton = () => {
  const onClick = () => {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }
  return <ButtonPrimary onClick={onClick}> GitHub Login </ButtonPrimary>
}

export default LoginButton
