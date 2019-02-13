import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Auth from './components/Auth'
import Members from './components/Members'

const App = ({ history }) => (
  <Router history={history}>
    <>
      <Route path='/auth' component={Auth} />
      <Route path='/*' component={Members} />
    </>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
