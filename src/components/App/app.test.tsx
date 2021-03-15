import { render, cleanup, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from '.'
import { createTestStore } from '../../store'

const store = createTestStore()

afterEach(() => {
  cleanup()
})

describe('App', () => {
  it('Should have correct layout structure when unauthorized', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('banner')).toHaveClass('header')

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('main')).toHaveClass('content')

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toHaveClass('footer')
  })

  it('Should have correct layout structure when authorized', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )

    store.dispatch({
      type: 'AUTH/SET_USER',
      payload: {
        id: 1,
        name: 'test',
        email: 'testmail@gmail.com',
        role: 'USER'
      }
    })

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('banner')).toHaveClass('header')

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('main')).toHaveClass('content')

    const collapseMenu = screen.getByRole('img', { name: 'menu-fold' })
    expect(collapseMenu).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toHaveClass('footer')

    expect(screen.getByRole('complementary')).toBeInTheDocument()
    expect(screen.getByRole('complementary')).toHaveClass('sider')
  })

  it('Trigger button should collapse and expand sidebar', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )

    store.dispatch({
      type: 'AUTH/SET_USER',
      payload: {
        id: 1,
        name: 'test',
        email: 'testmail@gmail.com',
        role: 'USER'
      }
    })

    const collapseMenu = screen.getByRole('img', { name: 'menu-fold' })
    expect(collapseMenu).toBeInTheDocument()
    expect(collapseMenu).toHaveClass('expanded')

    expect(screen.getByRole('complementary')).toBeInTheDocument()
    expect(screen.getByRole('complementary')).toHaveClass('sider')

    fireEvent.click(collapseMenu)

    const expandMenu = screen.getByRole('img', { name: 'menu-unfold' })
    expect(expandMenu).toHaveClass('collapsed')
  })
})
