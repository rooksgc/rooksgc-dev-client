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
import UserProfile from '../UserProfile'

const Routes: FC = () => (
  <Switch>
    <PrivateRoute exact path="/" component={Home} />
    <Route path="/auth/login" component={Login} />
    <Route path="/auth/register" component={Register} />
    <Route path="/auth/activation/:code" component={Activation} />
    <Route path="/auth/recover" component={Recover} />
    <Route path="/auth/change-password/:code" component={ChangePassword} />
    <PrivateRoute path="/user/profile" component={UserProfile} />
    <PrivateRoute path="/chat" component={Chat} />
    <Route path="*">
      <Redirect to="/auth/login" />
    </Route>
  </Switch>
)

export default Routes
