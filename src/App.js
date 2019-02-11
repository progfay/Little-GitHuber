// import React, { useState, useEffect } from 'react'
// import firebase from './lib/firebase'
// import LoginButton from './components/LoginButton'
// import LogoutButton from './components/LogoutButton'

// const App = () => {
//   const [ user, setUser ] = useState(null)
//   useEffect(() => {
//     const unsubscribe = firebase.auth().onAuthStateChanged(setUser)
//     return unsubscribe
//   })
//   return (
//     <>
//       <p> UID: {user && user.uid} </p>
//       { user ? <LogoutButton /> : <LoginButton /> }
//     </>
//   )
// }

// export default App

import React, { Component } from 'react'
import firebase from './lib/firebase'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'

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

  render () {
    return (
      <div className='App'>
        <p className='App-intro'>
          UID: {this.state.user && this.state.user.uid}
        </p>

        {this.state.user ? (
          <LogoutButton />
        ) : (
          <LoginButton />
        )}
      </div>
    )
  }
}

export default App
