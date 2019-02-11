import React, { useState, useEffect } from 'react'
import firebase from '../lib/firebase'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

const Auth = () => {
  const [ user, setUser ] = useState(null)
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(setUser)
    return unsubscribe
  })
  return (
    <React.Fragment>
      <p> UID: {user && user.uid} </p>
      { user ? <LogoutButton /> : <LoginButton /> }
    </React.Fragment>
  )
}

export default Auth
