import React from 'react'
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react'
import { Accordion } from '../src/components/Accordion'
import axios from 'axios'

vi.mock('axios')

describe("Accordion test", () => {
    test("Should show title", () => {
        render(<Accordion title='Testing'><h4>Content</h4></Accordion>);

        expect(screen.getByText(/Testing/i)).toBeDefined()
    })
    test("Should show title", () => {
        render(<Accordion title='test' children={<p>test</p>} />);
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