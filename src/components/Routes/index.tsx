import { FC } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import PrivateRoute from 'containers/PrivateRoute'
import Chat from '../Chat'
import Login from '../Login'
import Register from '../Register'
import Recover from '../Recover'
import ChangePassword from '../ChangePassword'
import Activation from '../Activation'

const Routes: FC = () => (
  <Switch>
    <PrivateRoute exact path="/" component={Chat} />
    <Route path="/auth/login" component={Login} />
    <Route path="/auth/register" component={Register} />
    <Route path="/auth/activation/:code" component={Activation} />
    <Route path="/auth/recover" component={Recover} />
    <Route path="/auth/change-password/:code" component={ChangePassword} />
    <Route path="*">
      <Redirect to="/auth/login" />
    </Route>
  </Switch>
)

export default Routes
