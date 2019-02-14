import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Auth from './components/Auth'
import Members from './components/Members'

const App = ({ history }) => (
  <Router history={history}>
    <Switch>
      <Route path='/auth' component={Auth} />
      <Route path='/*' component={Members} />
    </Switch>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
