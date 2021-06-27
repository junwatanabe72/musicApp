// beforeAll(async () => {})

import { fetchData } from '../services'
import { createTargetUrl } from '../utils/constant'

describe('services', () => {
  const key = 'aimyon'
  describe('fetchData', () => {
    test('正常動作 重複要素除外', async (done) => {
      const url = createTargetUrl(key)
      const result = await fetchData(url)
      console.log(result[0])
      expect(result).toBe('')
      done()
    })
  })
})
