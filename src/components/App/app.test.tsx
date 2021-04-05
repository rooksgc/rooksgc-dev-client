import { render, screen, fireEvent, store } from '../../mock/test-wrapper'
import App from '.'
import { userFetchSuccess } from '../../modules/Auth/actions'

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

    const collapseMenu = screen.getByRole('img', { name: 'left' })
    expect(collapseMenu).toBeInTheDocument()

    expect(screen.getByRole('complementary')).toBeInTheDocument()
    expect(screen.getByRole('complementary')).toHaveClass('sider')
  })

  it('Trigger button should collapse and expand sidebar', () => {
    render(<App />)

    store.dispatch(
      userFetchSuccess({
        id: 1,
        name: 'test',
        email: 'testmail@gmail.com',
        role: 'USER'
      })
    )

    const collapseMenu = screen.getByRole('img', { name: 'left' })
    expect(collapseMenu).toBeInTheDocument()
    expect(collapseMenu).toHaveClass('anticon-left')

    expect(screen.getByRole('complementary')).toBeInTheDocument()
    expect(screen.getByRole('complementary')).toHaveClass('sider')

    fireEvent.click(collapseMenu)

    const expandMenu = screen.getByRole('img', { name: 'right' })
    expect(expandMenu).toHaveClass('anticon-right')
  })
})
