import { createRenderer } from 'react-test-renderer/shallow'
// import { render } from '@testing-library/react'
// import { Provider } from 'react-redux'
// import { BrowserRouter as Router } from 'react-router-dom'
// import { createTestStore } from '../../store'
import App from './index'

// const store = createTestStore()

// jest.mock('react-router-dom', () => ({
//   useLocation: jest.fn().mockReturnValue({
//     pathname: '/another-route',
//     search: '',
//     hash: '',
//     state: null,
//     key: '5nvxpbdafa'
//   }),
//   useHistory: () => ({
//     push: jest.fn()
//   })
// }))

describe('App component test', () => {
  it('Component renders correctly', () => {
    const renderer = createRenderer()
    renderer.render(<App />)
    const result = renderer.getRenderOutput()

    expect(result.type).toEqual('div')
  })

  // it('Component renders correctly', () => {
  //   const { getByText } = render(
  //     <Provider store={store}>
  //       <Router>
  //         <App />
  //       </Router>
  //     </Provider>
  //   )

  //   expect(getByText('Комната 1')).not.toBeNull()
  // })
})
