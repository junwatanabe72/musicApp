import * as fs from 'fs'
import { createTargetUrl } from '../utils/constant'
import { fetchData, extractValidSoundSources } from '../services'
import { originalArtists } from '../store'

const path = './src/store/artist/'
const keys = Object.keys(originalArtists)

const isExistFile = (file: string): boolean => {
  try {
    fs.statSync(file)
    return true
  } catch (err) {
    if (err.code === 'ENOENT') return false
  }
  return true
}

const fetchAPIMusic = async (keys: string[]): Promise<void> => {
  keys.forEach(async (key: string) => {
    const filePath = `${path}${key}.ts`
    const existFile = isExistFile(filePath)
    if (existFile) {
      return
    }
    const url = createTargetUrl(key)
    const result = await fetchData(url)
    if (result.length === 0) {
      return
    }
    const extractSources = extractValidSoundSources(result, key)
    const text = `export const ${key}: Music[] = ${JSON.stringify(
      extractSources,
    )}`
    fs.writeFileSync(filePath, text)
    return
  })
  return
}

fetchAPIMusic(keys)
