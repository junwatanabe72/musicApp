import { aimyon } from './artist/aimyon'
import { higedan } from './artist/higedan'
import { bts } from './artist/bts'
import { backNumber } from './artist/backNumber'
import { yoasobi } from './artist/yoasobi'
import { hentai } from './artist/hentai'
import { twice } from './artist/twice'
import { hoshinoGen } from './artist/hoshinoGen'
import { yonezugenshi } from './artist/yonezugenshi'
import { eve } from './artist/eve'
import { sudaMasaki } from './artist/sudaMasaki'
import { makaroni } from './artist/makaroni'
import { yorushika } from './artist/yorushika'
import { yuzu } from './artist/yuzu'
import { mrChilren } from './artist/mrChilren'
import { yama } from './artist/yama'
import { perfume } from './artist/perfume'
import { utadaHikaru } from './artist/utadaHikaru'
import { oneOkRock } from './artist/oneOkRock'
import { spitz } from './artist/spitz'
import { ketsumeishi } from './artist/ketsumeishi'
import { exile } from './artist/exile'

export const artistMusicData = {
  aimyon,
  higedan,
  bts,
  backNumber,
  yoasobi,
  hentai,
  twice,
  hoshinoGen,
  eve,
  sudaMasaki,
  makaroni,
  yorushika,
  yuzu,
  yonezugenshi,
  mrChilren,
  yama,
  perfume,
  utadaHikaru,
  oneOkRock,
  spitz,
  ketsumeishi,
  exile,
}

export const originalArtists = {
  bts: 'BTS',
  yonezugenshi: '米津玄師',
  backNumber: 'back number',
  yoasobi: 'YOASOBI',
  hentai: '変態紳士クラブ',
  higedan: 'Official髭男dism',
  twice: 'TWICE',
  hoshinoGen: '星野源',
  eve: 'Eve',
  sudaMasaki: '菅田 将暉',
  aimyon: 'あいみょん',
  makaroni: 'マカロニえんぴつ',
  yorushika: 'ヨルシカ',
  yama: 'yama',
  yuzu: 'ゆず',
  mrChilren: 'Mr.Children',
  perfume: 'Perfume',
  utadaHikaru: '宇多田ヒカル',
  oneOkRock: 'ONE OK ROCK',
  spitz: 'スピッツ',
  ketsumeishi: 'ケツメイシ',
  exile: 'EXILE',
}
export const lowerCaseArtists = {
  bts: 'bts',
  higedan: 'official髭男dism',
  eve: 'eve',
  backNumber: 'back+number',
  mrChilren: 'mr.children',
  perfume: 'perfume',
  oneOkRock: 'one+ok+rock',
  spitz: 'spitz',
  exile: 'exile',
}

const tmp = Object.entries(originalArtists)
tmp.sort(function (p1, p2) {
  const p1Key = p1[0],
    p2Key = p2[0]
  if (p1Key < p2Key) {
    return -1
  }
  if (p1Key > p2Key) {
    return 1
  }
  return 0
})
export const sortedArtists = Object.fromEntries(tmp)
