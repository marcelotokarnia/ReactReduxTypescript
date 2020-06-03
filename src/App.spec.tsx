import App from './App'
import React from 'react'
import { render } from '@testing-library/react'

describe('renders learn react link', () => {
  it('...', () => {
    const { getByText } = render(<App />)
    const linkElement = getByText(/Page A/i)
    ;(expect(linkElement) as any).toBeInTheDocument()
  })
})
