import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import Login from './pages/Login'
import Logout from './pages/Logout'
import GroupList from './pages/GroupList'

const App = ({ history }) => (
  <CookiesProvider>
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={GroupList} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/logout' component={Logout} />
      </Switch>
    </Router>
  </CookiesProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
