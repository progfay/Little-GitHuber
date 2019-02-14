import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import Members from './pages/Members'
import Login from './pages/Login'
import Logout from './pages/Logout'

const App = ({ history }) => (
  <CookiesProvider>
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Members} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/logout' component={Logout} />
      </Switch>
    </Router>
  </CookiesProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
