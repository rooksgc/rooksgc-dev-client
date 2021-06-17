import { render, screen, fireEvent, store } from 'testWrapper'
import { userFetchSuccess } from 'modules/Auth/actions'
import { App } from './index'

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
        role: 'USER',
        photo: null,
        channels: null,
        contacts: null
      })
    )

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('banner')).toHaveClass('header')

    expect(screen.getByRole('complementary')).toBeInTheDocument()
    expect(screen.getByRole('complementary')).toHaveClass('sider')

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('main')).toHaveClass('content')
  })

  it('Trigger button should collapse sidebar', () => {
    render(<App />)

    store.dispatch(
      userFetchSuccess({
        id: 1,
        name: 'test',
        email: 'testmail@gmail.com',
        role: 'USER',
        photo: null,
        channels: null,
        contacts: null
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
