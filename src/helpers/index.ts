import { QUESTIONSNUMBER } from '../utils/constant'
import { artistMusicData } from 'store'

const shuffle = (array: string[]): string[] => {
  for (let i = array.length; 1 < i; i--) {
    const k = Math.floor(Math.random() * i)
    ;[array[k], array[i - 1]] = [array[i - 1], array[k]]
  }
  return array
}

export const createTrackNames = (sources: Music[]): string[] => {
  const sourceNames = sources.map((music: Music) => {
    return music.trackName
  })
  return sourceNames
}

export const createQuestions = (sources: Music[], max: number): Music[] => {
  const selectedList = [] as number[]
  const callback = (_: Music): Music => {
    const num = Math.floor(Math.random() * sources.length - 1)
    if (!selectedList.includes(num) && sources[num]) {
      selectedList.push(num)
      return sources[num]
    }
    return callback(_)
  }
  if (sources.length === 0) {
    return []
  }
  const array = Array.from({ length: max }, callback)
  return array
}
export const createAnswers = (
  questions: Music[],
  trackNames: string[],
): string[][] => {
  const sourceNames = questions.map((question: Music) => {
    if (Object.values(question).length === 0) {
      return []
    }
    const { trackName } = question
    const shuffles = shuffle(trackNames)
    const [a, b, c, d] = shuffles
    const result = [a, b, c, d].filter((v) => v !== trackName)
    if (result.length === 3) {
      return shuffle([a, b, c, d])
    }
    return shuffle([a, b, c, trackName])
  })
  return sourceNames
}

export const retry = (
  extractSources: Music[],
): {
  questions: Music[]
  answers: string[][]
} => {
  const trackNames = createTrackNames(extractSources)
  const questions = createQuestions(extractSources, QUESTIONSNUMBER)
  const answers = createAnswers(questions, trackNames)
  return { questions, answers }
}

export const init = (
  key: string,
): {
  questions: Music[]
  answers: string[][]
} => {
  const extractSources: Music[] =
    artistMusicData[key as keyof typeof artistMusicData]
  const trackNames = createTrackNames(extractSources)
  const questions = createQuestions(extractSources, QUESTIONSNUMBER)
  const answers = createAnswers(questions, trackNames)
  return { questions, answers }
}
