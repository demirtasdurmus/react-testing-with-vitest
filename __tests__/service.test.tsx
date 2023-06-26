import { vi } from 'vitest'
import axios from 'axios'

vi.mock('axios')

describe('Service test', () => {
  test('mocked axios', async () => {
    await axios.get('string')

    expect(axios.get).toHaveBeenCalledWith('string')
    expect(axios.post).toBeDefined()
  })
})
