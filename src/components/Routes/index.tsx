import { FC } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../Home'
import Chat from '../Chat'
import Login from '../Login'
import Register from '../Register'
import Recover from '../Recover'
import ChangePassword from '../ChangePassword'
import Activation from '../Activation'
import PrivateRoute from '../PrivateRoute'

const Routes: FC = () => (
  <Switch>
    <PrivateRoute path="/" exact>
      <Home />
    </PrivateRoute>
    <Route path="/auth/login" component={Login} />
    <Route path="/auth/register">
      <Register />
    </Route>
    <Route path="/auth/activation/:code">
      <Activation />
    </Route>
    <Route path="/auth/recover">
      <Recover />
    </Route>
    <Route path="/auth/change-password/:code">
      <ChangePassword />
    </Route>
    <Route path="/chat">
      <Chat />
    </Route>
    <Route path="*">
      <Redirect to="/auth/login" />
    </Route>
  </Switch>
)

export default Routes
