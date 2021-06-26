import { artists, upperCaseArtists } from './artist'

//app
export const audio = new Audio()
const host = 'https://itunes.apple.com/search'
// export const term = 'mr.children'
const media = 'music'
const entity = 'song'
const country = 'jp'
const lang = 'ja_jp'
const limit = '200'
const attribute = 'artistTerm'
// export const targetUrl = `${host}?term=${term}&media=${media}&entity=${entity}&attribute=${attribute}&country=${country}&lang=${lang}&limit=${limit}`

export const createTargetUrl = (key: string): string => {
  // console.log(key)
  const value = upperCaseArtists[key as keyof typeof upperCaseArtists]
    ? upperCaseArtists[key as keyof typeof upperCaseArtists]
    : artists[key]
  // console.log(encodeURIComponent(value))
  return `${host}?term=${encodeURIComponent(
    value,
  )}&media=${media}&entity=${entity}&attribute=${attribute}&country=${country}&lang=${lang}&limit=${limit}`
}
// string
export const appTitle = 'KYOKUATE'
export const QUESTIONSNUMBER = 10
// head
export const description =
  '流れる曲の一部分を聞いて、その曲名を当てるアプリケーションです！'
export const url = 'https://real-estate-holding-period-checker.work/'
export const iTunesUrl = 'https://www.apple.com/jp/itunes/'
export const imagePath = '../../../public/logo192.png'

// howto
export const howToText = '曲名を当てるだけ！'
export const howToText2 = 'スピーカーをオンにしてお楽しみください！'
export const howToText3 = 'アーティストを選択してね！'
// ad
export const ninjaID = '775269bed10e865976ced4b3e97329ca'

// kyokuate

export const answer = {
  isCorrect: 'isCorrect',
  isNotSelected: 'isNotSelected',
  isIncorrect: 'isIncorrect',
} as const

export type Answer =
  | typeof answer.isCorrect
  | typeof answer.isIncorrect
  | typeof answer.isNotSelected
