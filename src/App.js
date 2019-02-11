import React, { useState, useEffect } from 'react'
import firebase from './lib/firebase'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'

const App = () => {
  const [ user, setUser ] = useState(null)
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(setUser)
    return unsubscribe
  })
  return (
    <>
      <p> UID: {user && user.uid} </p>
      { user ? <LogoutButton /> : <LoginButton /> }
    </>
  )
}

export default App
