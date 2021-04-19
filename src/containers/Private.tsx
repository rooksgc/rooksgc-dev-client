import useShallowEqualSelector from '../hooks/useShallowEqualSelector'

const PrivateContainer = ({ children }) => {
  const user = useShallowEqualSelector((state) => state.auth.user)
  if (!user) return null

  return children
}

export default PrivateContainer
