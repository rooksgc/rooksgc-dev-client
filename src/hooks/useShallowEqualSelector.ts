import { useSelector, shallowEqual } from 'react-redux'
import { IRootState } from 'modules'

const useShallowEqualSelector = (selector: any) =>
  useSelector<IRootState>(selector, shallowEqual)

export { useShallowEqualSelector }
