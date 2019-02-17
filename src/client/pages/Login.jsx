import { useEffect } from 'react'
import { withCookies } from 'react-cookie'
import firebase from '../lib/firebase'

const Login = ({ history, cookies }) => {
  useEffect(() => {
    if (cookies.get('uid')) {
      history.replace('/')
      return
    }

    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user || user.uid) {
        cookies.set('uid', user.uid)
        history.replace('/')
      }
    })
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithPopup(provider)

    return unsubscribe
  })
  return null
}

export default withCookies(Login)
