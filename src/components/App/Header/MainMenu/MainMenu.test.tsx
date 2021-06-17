import { render, screen } from 'testWrapper'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { MainMenu } from '.'

describe('Main menu', () => {
  it('Should contain login and register menu items', async () => {
    const history = createMemoryHistory()
    history.push('/auth/login')

    render(
      <Router history={history}>
        <MainMenu />
      </Router>
    )

    expect(screen.getByText('Войти')).toBeInTheDocument()
    expect(screen.getByText('Регистрация')).toBeInTheDocument()
  })
})
