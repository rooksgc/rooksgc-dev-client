import { render, screen, fireEvent, store } from 'mock/test-wrapper'
import App from 'components/App'
import { userFetchSuccess } from 'modules/Auth/actions'

describe('App', () => {
  it('Should have correct layout structure when unauthorized', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('banner')).toHaveClass('header')

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('main')).toHaveClass('content')
  })

  it('Should have correct layout structure when authorized', () => {
    render(<App />)

    store.dispatch(
      userFetchSuccess({
        id: 1,
        name: 'test',
        email: 'testmail@gmail.com',
        role: 'USER'
      })
    )

    expect(screen.getByRole('complementary')).toBeInTheDocument()
    expect(screen.getByRole('complementary')).toHaveClass('sider')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('banner')).toHaveClass('header')

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('main')).toHaveClass('content')

    const collapseMenu = screen.getByRole('img', { name: 'menu-fold' })
    expect(collapseMenu).toBeInTheDocument()

    const userMenu = screen.getByRole('img', { name: 'user' })
    expect(userMenu).toBeInTheDocument()
  })

  it('Trigger button should collapse sidebar', () => {
    render(<App />)

    store.dispatch(
      userFetchSuccess({
        id: 1,
        name: 'test',
        email: 'testmail@gmail.com',
        role: 'USER'
      })
    )

    fireEvent.click(screen.getByRole('img', { name: 'menu-fold' }))

    const expandMenu = screen.getByRole('img', { name: 'menu-unfold' })
    expect(expandMenu).toHaveClass('anticon-menu-unfold')
    expect(screen.getByRole('complementary')).toHaveClass(
      'ant-layout-sider-collapsed'
    )
  })
})
