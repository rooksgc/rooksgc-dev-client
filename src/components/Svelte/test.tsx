import React from 'react'
import { render, screen } from '@testing-library/react'
import Svelte from '.'

describe('Svelte component test', () => {
  it('Should renders joke text', () => {
    render(<Svelte />)
    const text = screen.getByText(/Коротко о Svelte/i)
    expect(text).toBeInTheDocument()
  })
})
