import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from 'modules'

const useShallowEqualSelector = (selector: any) =>
  useSelector<RootState>(selector, shallowEqual)

export default useShallowEqualSelector
