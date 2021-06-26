import { QUESTIONSNUMBER } from '../utils/constant'
import { fetchData } from '../services'
import { artists } from '../utils/constant/artist'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const regex = /\(.*\)/g
const shuffle = (array: string[]): string[] => {
  for (let i = array.length; 1 < i; i--) {
    const k = Math.floor(Math.random() * i)
    ;[array[k], array[i - 1]] = [array[i - 1], array[k]]
  }
  return array
}

export const extractValidSoundSources = (
  sources: Music[],
  key: string,
): Music[] => {
  const artist = artists[key]
  const sourceNames = sources.map((music: Music) => music.trackName)
  const extractSources = sources.filter(function (value: Music, index: number) {
    const isDuplicate = sourceNames.indexOf(value.trackName) === index
    const isTargetArtist = value.artistName === artist
    const isNoVoice = value.trackName.match(regex)
    return isDuplicate && !isNoVoice && isTargetArtist
  })
  return extractSources
}

export const createTrackNames = (sources: Music[]): string[] => {
  const sourceNames = sources.map((music: Music) => {
    return music.trackName
  })
  return sourceNames
}

export const createQuestions = (sources: Music[], max: number): Music[] => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  extractSources: Music[]
} => {
  const trackNames = createTrackNames(extractSources)
  const questions = createQuestions(extractSources, QUESTIONSNUMBER)
  const answers = createAnswers(questions, trackNames)
  return { questions, answers, extractSources }
}

export const init = async (
  targetUrl: string,
  key: string,
): Promise<{
  questions: Music[]
  answers: string[][]
  extractSources: Music[]
}> => {
  try {
    const sources = await fetchData(targetUrl)
    // console.log(sources)
    const extractSources = extractValidSoundSources(sources, key)
    // console.log(extractSources)
    const trackNames = createTrackNames(extractSources)
    const questions = createQuestions(extractSources, QUESTIONSNUMBER)
    // console.log(questions)
    const answers = createAnswers(questions, trackNames)
    // console.log(questions)
    // console.log(answers)
    return { questions, answers, extractSources }
  } catch (e) {
    console.log(e)
    const extractSources: never[] = []
    const questions: never[] = []
    const answers: never[] = []
    return { questions, answers, extractSources }
  }
}
