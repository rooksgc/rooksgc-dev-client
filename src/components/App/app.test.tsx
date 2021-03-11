import { render, cleanup, fireEvent, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createTestStore } from '../../store'
import App from './index'

const store = createTestStore()

afterEach(() => {
  cleanup()
})

describe('App component', () => {
  it('Should have correct layout structure', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )

    const wrapper = container.firstChild
    expect(wrapper).toHaveClass('wrap-layout')
    expect(wrapper.childNodes).toHaveLength(2)

    const sider = screen.getByTestId('sider')
    expect(sider).toBeInTheDocument()
    expect(sider.childNodes).toHaveLength(1)

    const main = screen.getByTestId('main')
    expect(main).toBeInTheDocument()
    expect(main.childNodes).toHaveLength(3)

    const header = screen.getByTestId('header')
    expect(header).toBeInTheDocument()
    expect(header.childNodes).toHaveLength(2)

    const content = screen.getByTestId('content')
    expect(content).toBeInTheDocument()

    const footer = screen.getByTestId('footer')
    expect(footer).toBeInTheDocument()
    expect(footer.textContent).toBe('© [Chat]')
  })

  it('Should toggle Sider correctly', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )

    expect(screen.getByTestId('trigger')).toHaveClass('expanded')
    fireEvent.click(screen.getByTestId('trigger'))
    expect(screen.getByTestId('trigger')).toHaveClass('collapsed')
  })
})
