import React from 'react'
import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Accordion } from '../src/components/Accordion'
import axios from 'axios'

vi.mock('axios')

describe('Accordion test', () => {
  test('Should show title', () => {
    render(
      <Accordion title='Testing'>
        <h4>Content</h4>
      </Accordion>
    )

    expect(screen.getByText(/Testin/i)).toBeDefined()
  })
  test('Should show title', () => {
    render(
      <Accordion title='test'>
        <p>test</p>
      </Accordion>
    )
    const element = screen.getByRole('heading')
    expect(element).toBeDefined()
    expect(element).toBeInTheDocument()
  })

  test('mocked axios', async () => {
    await axios.get('string')

    expect(axios.get).toHaveBeenCalledWith('string')
    expect(axios.post).toBeDefined()
  })
})
