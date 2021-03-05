import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { RootState } from '../../modules'

interface PrivateRouteProps extends RouteProps {
  component?: any
  children: any
}

const PrivateRoute: FC<PrivateRouteProps> = (props: PrivateRouteProps) => {
  const { component: Component, children, ...rest } = props
  const user = useSelector<RootState>((state) => state.auth.user)

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
        ) : Component ? (
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
