import { FC } from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector'

interface PrivateRouteProps extends RouteProps {
  component?: any
  children: any
}

const PrivateRoute: FC<PrivateRouteProps> = ({
  component: Component,
  children,
  ...rest
}) => {
  const user = useShallowEqualSelector((state) => state.auth.user)

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        user === false ? (
          <Redirect
            to={{
              pathname: '/auth/login',
              state: { from: routeProps.location }
            }}
          />
        ) : user === null ? null : Component ? (
          <Component {...routeProps} />
        ) : (
          children
        )
      }
    />
  )
}

PrivateRoute.defaultProps = {
  component: undefined
}

export default PrivateRoute
