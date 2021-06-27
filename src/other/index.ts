import { createTargetUrl } from '../utils/constant'
import { fetchData } from '../services'
import { extractValidSoundSources } from '../services'
const key = 'yuzu'

const getMusic = async (key: string): Promise<void> => {
  const url = createTargetUrl(key)
  const result = await fetchData(url)
  const extractSources = extractValidSoundSources(result, key)
  console.log(extractSources)
  return
}

getMusic(key)
