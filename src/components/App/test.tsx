import React from 'react'
import { render } from '@testing-library/react'
import App from '.'

describe('App component test', () => {
  let container: HTMLElement

  beforeEach(() => {
    container = render(<App />).container
  })

  it('Should renders App', () => {
    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveClass('App')
  })

  it('Should renders header', () => {
    expect(container.getElementsByClassName('App-header').length).toBe(1)
  })
})
