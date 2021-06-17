import { render, screen, store } from 'testWrapper'
import { userFetchSuccess } from 'modules/Auth/actions'
import { UserMenu } from '.'

describe('User menu', () => {
  it('Should contain user icon', async () => {
    store.dispatch(
      userFetchSuccess({
        id: 1,
        name: 'test',
        email: 'testmail@mail.ru',
        role: 'USER',
        photo: null,
        channels: null,
        contacts: null
      })
    )

    render(<UserMenu />)

    const avatarIcon = screen.getByRole('img')
    expect(avatarIcon).toBeInTheDocument()
    expect(avatarIcon).toHaveClass('anticon-user')
  })
})
