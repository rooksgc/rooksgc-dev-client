import { rest } from 'msw'
import { setupServer } from 'msw/node'
import userEvent from '@testing-library/user-event'
import { render, screen } from 'testWrapper'
import { Login } from 'components/Auth/Login'

const server = setupServer(
  rest.post('/api/v1/auth/login', (_req, res, ctx) =>
    res(
      ctx.status(401),
      ctx.json({ type: 'error', message: 'Invalid credentials' })
    )
  )
)

beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()
})
afterAll(() => server.close())

describe('Login form', () => {
  it('Should show error message if wrong credentials given', async () => {
    render(<Login />)

    const emailField = screen.getByPlaceholderText('Email')
    const passwordField = screen.getByPlaceholderText('Пароль')

    userEvent.type(emailField, 'usermail@gmail.com')
    userEvent.type(passwordField, '2M8N3b3d3E')
    userEvent.click(screen.getByRole('button'))

    const alertMessage = await screen.findByRole('alert')

    expect(alertMessage).toHaveTextContent('Invalid credentials')
    expect(localStorage.getItem('auth')).toBeNull()
  })

  it('Should login success with correct credentials', async () => {
    const fakeToken = 'H7R2G3D.XC0232C.C3MN98Y'
    const fakeUser = {
      id: 1,
      name: 'test',
      email: 'testmail@gmail.com',
      role: 'USER'
    }
    server.use(
      rest.post('/api/v1/auth/login', (_req, res, ctx) => {
        localStorage.setItem('auth', fakeToken)

        return res(
          ctx.json({
            type: 'success',
            message: 'Login success',
            token: fakeToken,
            data: fakeUser
          })
        )
      })
    )

    render(<Login />)
    const emailField = screen.getByPlaceholderText('Email')
    const passwordField = screen.getByPlaceholderText('Пароль')

    userEvent.type(emailField, 'usermail@gmail.com')
    userEvent.type(passwordField, '2M8N3b3d3E')
    userEvent.click(screen.getByRole('button'))

    const successMessage = await screen.findByRole('alert')
    expect(successMessage).toHaveTextContent('Login success')
    expect(localStorage.getItem('auth')).toBe(fakeToken)
  })

  it('Should show alert if throws some Uncaught exception', async () => {
    server.use(
      rest.post('/api/v1/auth/login', () => {
        throw new Error('Uncaught error from server')
      })
    )

    render(<Login />)

    const emailField = screen.getByPlaceholderText('Email')
    const passwordField = screen.getByPlaceholderText('Пароль')

    userEvent.type(emailField, 'usermail@gmail.com')
    userEvent.type(passwordField, '2M8N3b3d3E')
    userEvent.click(screen.getByRole('button'))

    const errorMessage = await screen.findByRole('alert')

    expect(errorMessage).toBeInTheDocument()
    expect(errorMessage.textContent.length).toBeGreaterThan(0)
  })
})
