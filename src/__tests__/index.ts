import {
  extractValidSoundSources,
  createTrackNames,
  createQuestions,
  createAnswers,
} from '../helpers'

// beforeAll(async () => {})

describe('helper', () => {
  const someMusic = [
    {
      trackName: '好きって言ってよ',
      artistName: 'あいみょん',
    },
    { trackName: 'マリーゴールド', artistName: 'あいみょん' },
    { trackName: '愛を知るまでは', artistName: 'あいみょん' },
    { trackName: '桜が降る夜は', artistName: 'あいみょん' },
    {
      trackName: 'ミニスカートとハイライト',
      artistName: 'あいみょん',
    },
    { trackName: '貴方解剖純愛歌 〜死ね〜', artistName: 'あいみょん' },
    { trackName: '生きていたんだよな', artistName: 'あいみょん' },
    { trackName: '愛を伝えたいだとか', artistName: 'あいみょん' },
    {
      trackName: '君はロックを聴かない',
      artistName: 'あいみょん',
    },
    { trackName: 'ふたりの世界', artistName: 'あいみょん' },
    { trackName: '今夜このまま', artistName: 'あいみょん' },
    { trackName: '恋をしたから', artistName: 'あいみょん' },
    { trackName: 'ハルノヒ', artistName: 'あいみょん' },
    { trackName: '裸の心', artistName: 'あいみょん' },
    { trackName: '裸の心', artistName: 'あいみょん' },
    { trackName: '裸の心', artistName: 'あいみょん' },
  ]
  const key = 'aimyon'
  describe('extractValidSoundSources', () => {
    test('正常動作 重複要素除外', (done) => {
      const result = extractValidSoundSources(someMusic as Music[], key)
      expect(result.length).toBe(someMusic.length - 2)
      done()
    })
  })
  describe('createQuestions', () => {
    test('正常動作 シャッフルされる。重複要素なし', (done) => {
      const sources = extractValidSoundSources(someMusic as Music[], key)
      const questions = createQuestions(sources as Music[], 10)
      const trakNames = createTrackNames(questions as Music[])
      const result = new Set(trakNames)
      expect(result.size).toBe(10)
      done()
    })
  })
  describe('createAnswers', () => {
    test('正常動作 answersに正解が含まれている', (done) => {
      const sources = extractValidSoundSources(someMusic as Music[], key)
      const questions = createQuestions(sources as Music[], 10)
      const trackNames = createTrackNames(sources as Music[])
      const answers = createAnswers(questions, trackNames)
      const result = questions.filter((question, num) => {
        console.log(question.trackName)
        console.log(answers[num])
        return !answers[num].includes(question.trackName)
      })
      expect(result.length).toBe(0)
      done()
    })
  })
})
