import fetch from 'node-fetch'
import { sortedArtists } from '../store'

export const fetchData = async (targetUrl: string): Promise<APIMusic[]> => {
  const res = await fetch(targetUrl)
  if (res.status !== 200) {
    return []
  }
  const data = await res.text()
  const { results } = JSON.parse(data)
  return results
}

export const extractValidSoundSources = (
  sources: APIMusic[],
  key: string,
): Music[] => {
  const regex = /\(.*\)/g
  const artist = sortedArtists[key]
  // const id = sources[0].artistId
  const sourceNames = sources.map((music: APIMusic) => music.trackName)
  const extractSources = sources.filter(function (
    value: APIMusic,
    index: number,
  ) {
    const isDuplicate = sourceNames.indexOf(value.trackName) === index
    const isTargetArtistId = true
    const isTargetArtist = value.artistName === artist
    const isNoVoice = value.trackName.match(regex)
    return isDuplicate && !isNoVoice && isTargetArtist && isTargetArtistId
  })
  const result = extractSources.map((value: APIMusic) => {
    const {
      artistName,
      trackName,
      collectionViewUrl,
      artistViewUrl,
      artworkUrl100,
      previewUrl,
    } = value
    return {
      artistName,
      artistViewUrl,
      trackName,
      collectionViewUrl,
      artworkUrl100,
      previewUrl,
    }
  })
  return result
}
