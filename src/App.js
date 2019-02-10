import React, { Component } from 'react'
import firebase from './lib/firebase'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { user: null }
  }

  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }

  login () {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }

  logout () {
    firebase.auth().signOut()
  }

  render () {
    return (
      <div className='App'>
        <p className='App-intro'>
          UID: {this.state.user && this.state.user.uid}
        </p>

        {this.state.user ? (
          <button onClick={this.logout}>GitHub Logout</button>
        ) : (
          <button onClick={this.login}>GitHub Login</button>
        )}
      </div>
    )
  }
}

export default App
