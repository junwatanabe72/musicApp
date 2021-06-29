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
// info
export const infotitle = '更新情報'

export const infoTexts = {
  infoText: { content: 'KYOKUATEをリリースしました！', date: '2021/6/28' },
  infoText1: { content: '「ケツメイシ」を追加しました！', date: '2021/6/28' },
  infoText2: { content: '「スピッツ」を追加しました！', date: '2021/6/28' },
  infoText3: { content: '「EXILE」を追加しました！', date: '2021/6/28' },
}
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
