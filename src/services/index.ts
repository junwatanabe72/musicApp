import fetch from 'node-fetch'
import { sortedArtists } from '../store'

export const fetchData = async (targetUrl: string): Promise<Music[]> => {
  const res = await fetch(targetUrl)
  if (res.status !== 200) {
    return []
  }
  const data = await res.text()
  const { results } = JSON.parse(data)
  return results
}

export const extractValidSoundSources = (
  sources: Music[],
  key: string,
): Music[] => {
  const regex = /\(.*\)/g
  const artist = sortedArtists[key]
  const sourceNames = sources.map((music: Music) => music.trackName)
  const extractSources = sources.filter(function (value: Music, index: number) {
    const isDuplicate = sourceNames.indexOf(value.trackName) === index
    const isTargetArtist = value.artistName === artist
    const isNoVoice = value.trackName.match(regex)
    return isDuplicate && !isNoVoice && isTargetArtist
  })
  return extractSources
}
