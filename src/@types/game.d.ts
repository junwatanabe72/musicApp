type Answer =
  | typeof answer.isCorrect
  | typeof answer.isIncorrect
  | typeof answer.isNotSelected

type GameState = {
  artist: string
  soundPlaying: boolean
  questions: Music[]
  answers: string[][]
  num: number
  isCorrect: Answer
  isOver: boolean
  showLoad: boolean
  showDialog: boolean
}
