import { aimyon } from './artist/aimyon'
import { higedan } from './artist/higedan'
import { bts } from './artist/bts'
import { backNumber } from './artist/backNumber'
import { yoasobi } from './artist/yoasobi'
import { hentai } from './artist/hentai'
import { twice } from './artist/twice'
import { hoshinoGen } from './artist/hoshinoGen'

import { eve } from './artist/eve'
import { sudaMasaki } from './artist/sudaMasaki'
import { makaroni } from './artist/makaroni'
import { yorushika } from './artist/yorushika'
import { yuzu } from './artist/yuzu'
import { mrChilren } from './artist/mrChilren'

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
  mrChilren,
}

export const originalArtists = {
  bts: 'BTS',
  // kan: 'KAN',
  // yuri: '優里',
  yonezugenshi: '米津玄師',
  backNumber: 'back number',
  yoasobi: 'YOASOBI',
  hentai: '変態紳士クラブ',
  higedan: 'Official髭男dism',
  // ado: 'Ado',
  // lisa: 'LiSA',
  twice: 'TWICE',
  hoshinoGen: '星野源',
  eve: 'Eve',
  // dish: 'DISH//',
  sudaMasaki: '菅田 将暉',
  aimyon: 'あいみょん',
  makaroni: 'マカロニえんぴつ',
  yorushika: 'ヨルシカ',
  // yama: 'yama',
  yuzu: 'ゆず',
  mrChilren: 'Mr.Children',
}
export const lowerCaseArtists = {
  bts: 'bts',
  higedan: 'official髭男dism',
  // ado: 'ado',
  eve: 'eve',
  // kan: 'KAN',
  // lisa: 'lisa',
  // dish: 'dish//',
  backNumber: 'back+number',
  mrChilren: 'mr.children',
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
