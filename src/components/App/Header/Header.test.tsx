import { render, screen, store } from 'testWrapper'
import userEvent from '@testing-library/user-event'
import { userFetchSuccess } from 'modules/Auth/actions'
import { Header } from '.'

describe('Header', () => {
  it('Should contain sidebar toggle, user name and user profile icon', async () => {
    store.dispatch(
      userFetchSuccess({
        id: 1,
        name: 'Username',
        email: 'username@mail.ru',
        role: 'USER',
        photo: null,
        channels: null,
        contacts: null
      })
    )

    render(<Header sidebarCollapsed={false} onSidebarToggle={() => {}} />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('banner')).toHaveClass('header')

    const collapseMenu = screen.getByRole('img', { name: 'menu-fold' })
    expect(collapseMenu).toBeInTheDocument()

    const userName = screen.getByText('Username')
    expect(userName).toBeInTheDocument()
    expect(userName).toHaveClass('header-username')

    const userMenu = screen.getByRole('img', { name: 'user' })
    expect(userMenu).toBeInTheDocument()
  })

  it('Render with collapsed sidebar', async () => {
    store.dispatch(
      userFetchSuccess({
        id: 1,
        name: 'Username',
        email: 'username@mail.ru',
        role: 'USER',
        photo: null,
        channels: null,
        contacts: null
      })
    )

    render(<Header sidebarCollapsed onSidebarToggle={() => {}} />)

    const collapseMenu = screen.getByRole('img', { name: 'menu-unfold' })
    expect(collapseMenu).toBeInTheDocument()
  })

  it('Should handle sidebar collapse by click on icon', async () => {
    store.dispatch(
      userFetchSuccess({
        id: 1,
        name: 'Username',
        email: 'username@mail.ru',
        role: 'USER',
        photo: null,
        channels: null,
        contacts: null
      })
    )

    const sidebarToggleHandler = jest.fn()

    render(
      <Header sidebarCollapsed={false} onSidebarToggle={sidebarToggleHandler} />
    )

    userEvent.click(screen.getByRole('img', { name: 'menu-fold' }))

    expect(sidebarToggleHandler).toHaveBeenCalledTimes(1)
  })
})
