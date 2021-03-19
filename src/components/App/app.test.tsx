import { render, screen, fireEvent, store } from '../../mock/test-wrapper'
import App from '.'
import { fetchUserSuccess } from '../../modules/Auth/actions'

describe('App', () => {
  it('Should have correct layout structure when unauthorized', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('banner')).toHaveClass('header')

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('main')).toHaveClass('content')

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toHaveClass('footer')
  })

  it('Should have correct layout structure when authorized', () => {
    render(<App />)

    store.dispatch(
      fetchUserSuccess({
        id: 1,
        name: 'test',
        email: 'testmail@gmail.com',
        role: 'USER'
      })
    )

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
    render(<App />)

    store.dispatch(
      fetchUserSuccess({
        id: 1,
        name: 'test',
        email: 'testmail@gmail.com',
        role: 'USER'
      })
    )

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
