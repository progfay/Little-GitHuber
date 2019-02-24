import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import Navbar from './components/Navbar'
import Container from './components/style/Container'
import Login from './pages/Login'
import Logout from './pages/Logout'
import GroupList from './pages/GroupList'
import Setup from './pages/Setup.mdx'
import withPrimerMDX from './lib/withPrimerMDX'

const App = ({ history }) => (
  <CookiesProvider>
    <Navbar />
    <Container>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={GroupList} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/setup' component={withPrimerMDX(Setup)} />
        </Switch>
      </Router>
    </Container>
  </CookiesProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
