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
import { yuuri } from './artist/yuuri'
import { fujiSou } from './artist/fujiSou'
import { ado } from './artist/ado'
import { bloomVase } from './artist/bloomVase'
import { hiraiDai } from './artist/hiraiDai'
import { awesomeCityClub } from './artist/awesomeCityClub'
import { zutto } from './artist/zutto'
import { daice } from './artist/daice'
import { novelbright } from './artist/novelbright'
import { dish } from './artist/dish'
import { exile } from './artist/exile'
import { kawasakiTakaya } from './artist/kawasakiTakaya'
import { vaundy } from './artist/vaundy'
import { ryokuou } from './artist/ryokuou'
import { radwimps } from './artist/radwimps'
import { wanuka } from './artist/wanuka'
import { reol } from './artist/reol'
// import {mosao}from  './artist/mosao'

export const artistMusicData = {
  vaundy,
  ryokuou,
  radwimps,
  wanuka,
  reol,
  ado,
  dish,
  novelbright,
  daice,
  zutto,
  awesomeCityClub,
  hiraiDai,
  bloomVase,
  fujiSou,
  yuuri,
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
  kawasakiTakaya,
}

export const originalArtists = {
  bts: 'BTS',
  yonezugenshi: '????????????',
  backNumber: 'back number',
  yoasobi: 'YOASOBI',
  hentai: '?????????????????????',
  higedan: 'Official??????dism',
  twice: 'TWICE',
  hoshinoGen: '?????????',
  eve: 'Eve',
  sudaMasaki: '?????? ??????',
  aimyon: '???????????????',
  makaroni: '????????????????????????',
  yorushika: '????????????',
  yama: 'yama',
  yuzu: '??????',
  mrChilren: 'Mr.Children',
  perfume: 'Perfume',
  utadaHikaru: '??????????????????',
  oneOkRock: 'ONE OK ROCK',
  spitz: '????????????',
  ketsumeishi: '???????????????',
  exile: 'EXILE',
  yuuri: '??????',
  fujiSou: '?????? ???',
  ado: 'Ado',
  bloomVase: 'BLOOM VASE',
  hiraiDai: '?????????',
  awesomeCityClub: 'Awesome City Club',
  zutto: '????????????????????????????????????',
  daice: 'Da-iCE',
  novelbright: 'Novelbright',
  dish: 'DISH//',
  kawasakiTakaya: '????????????',
  vaundy: 'Vaundy',
  ryokuou: '???????????????',
  // niziu: 'NiziU',
  radwimps: 'RADWIMPS',
  wanuka: '?????????',
  // mosao: '????????????',
  reol: 'Reol',
}

export const lowerCaseArtists = {
  bts: 'bts',
  eve: 'eve',
  backNumber: 'back+number',
  mrChilren: 'mr.children',
  perfume: 'perfume',
  oneOkRock: 'one+ok+rock',
  fujiSou: '??????+???',
  ado: 'ado',
  bloomVase: 'bloom+vase',
  awesomeCityClub: 'awesome+city+club',
  daice: 'da-ice',
  novelbright: 'novelbright',
  dish: 'dish//',
  vaundy: 'vaundy',
  niziu: 'niziu',
  radwimps: 'radwimps',
  reol: 'reol',
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

export const defaultArtist = 'aimyon'
export type OriginalArtists = keyof typeof originalArtists
