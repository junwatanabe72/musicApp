export const originalArtists = {
  bts: 'BTS',
  // yuri: '優里',
  yonezugenshi: '米津玄師',
  backNumber: 'back number',
  yoazobi: 'YOASOBI',
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
export const upperCaseArtists = {
  bts: 'bts',
  higedan: 'official髭男dism',
  // ado: 'ado',
  eve: 'eve',
  // lisa: 'lisa',
  // dish: 'dish//',
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
export const artists = Object.fromEntries(tmp)
