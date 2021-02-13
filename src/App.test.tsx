import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders joke text', () => {
  render(<App />)
  const text = screen.getByText(/Коротко о Svelte/i)
  expect(text).toBeInTheDocument()
})
