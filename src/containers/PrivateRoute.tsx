import { FC } from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { useShallowEqualSelector } from 'hooks/useShallowEqualSelector'
import { IRootState } from 'modules'

interface IPrivateRouteProps extends RouteProps {
  component?: any
  children?: any
}

const PrivateRoute: FC<IPrivateRouteProps> = ({
  component: Component,
  children,
  ...rest
}) => {
  const user = useShallowEqualSelector((state: IRootState) => state.auth.user)

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (user === null) return null

        if (user === false) {
          return (
            <Redirect
              to={{
                pathname: '/auth/login',
                state: { from: routeProps.location }
              }}
            />
          )
        }

        if (Component) {
          return <Component {...routeProps} />
        }

        return children
      }}
    />
  )
}

PrivateRoute.defaultProps = {
  component: undefined
}

export { PrivateRoute }
