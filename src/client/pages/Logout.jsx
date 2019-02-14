import { withCookies } from 'react-cookie'
import firebase from '../lib/firebase'

const Login = ({ history, cookies }) => {
  if (cookies.get('uid')) {
    firebase.auth().signOut()
    cookies.set('uid', '')
  }

  history.replace('/')
  return null
}

export default withCookies(Login)
