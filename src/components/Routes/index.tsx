import { FC } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { PrivateRoute } from 'containers/PrivateRoute'
import { Login } from 'components/Auth/Login'
import { ChangePassword } from 'components/Auth/ChangePassword'
import { Activation } from 'components/Auth/Activation'
import { Register } from 'components/Auth/Register'
import { Recover } from 'components/Auth/Recover'
import { Chat } from '../Chat'

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

export { Routes }
