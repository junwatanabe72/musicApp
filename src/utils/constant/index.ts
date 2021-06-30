import { sortedArtists, lowerCaseArtists } from '../../store'

//app
const host = 'https://itunes.apple.com/search'
const media = 'music'
const entity = 'song'
const country = 'jp'
const lang = 'ja_jp'
const limit = '200'
const attribute = 'artistTerm'

export const createTargetUrl = (key: string): string => {
  const value = lowerCaseArtists[key as keyof typeof lowerCaseArtists]
    ? lowerCaseArtists[key as keyof typeof lowerCaseArtists]
    : sortedArtists[key]
  return `${host}?term=${encodeURIComponent(
    value,
  )}&media=${media}&entity=${entity}&attribute=${attribute}&country=${country}&lang=${lang}&limit=${limit}`
}
// gameTitle
export const appTitle = 'KYOKUATE'
export const QUESTIONSNUMBER = 10
export const topButton = 'start'
// head
export const description =
  'iphoneにも対応！このアプリは曲の一部分を聞いて、その曲名を当てるアプリケーションです！react,reduxで作られており動作もサクサク！'
export const url = 'https://kyokuate.netlify.app/'
export const iTunesUrl = 'https://www.apple.com/jp/itunes/'
export const imagePath = '../../../public/logo192.png'

// howto
export const howToText = '曲名を当てるだけ！'
export const howToText2 = 'スピーカーをオンにしてお楽しみください！'
export const howToText3 = 'アーティストを選択してね！'
// info
export const infotitle = '更新情報'
// gameClear
export const clearText = {
  title: 'GAME CLEAR !!',
  text: '今回のセットリスト',
  retry: 'retry',
  top: 'top page',
}
// dialog
export const incorrectText = '不正解です'

// ad
export const ninjaID = '4c4b0d6cd43a0a4edd0bbc2e900f85ff'

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
