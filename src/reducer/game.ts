import { init } from 'helpers'
import { defaultArtist } from 'store'
import { answer } from 'utils/constant'
import { ACTIONTYPES } from '../actions/index'

const initialState: GameState = {
  artist: defaultArtist,
  soundPlaying: false,
  questions: [],
  answers: [],
  num: 0,
  isCorrect: answer.isNotSelected,
  isOver: false,
  showLoad: false,
  showDialog: false,
}

export default function gameReducer(
  state = initialState,
  action: Action<string>,
): GameState {
  let newState = state
  switch (action.type) {
    case ACTIONTYPES.INIT: {
      const artist = action.payload
      const { questions, answers } = init(artist)
      console.log(questions)
      newState = {
        ...state,
        questions,
        answers,
        num: 0,
        showLoad: false,
        isOver: false,
        soundPlaying: false,
        artist: artist,
      }
      return newState
    }
    case ACTIONTYPES.SELECT_ANSWER: {
      const answer = action.payload
      return { ...state, isCorrect: answer }
    }
    case ACTIONTYPES.CHANGE_ARTIST: {
      const artist = action.payload
      return { ...state, artist: artist }
    }
    case ACTIONTYPES.NEXT:
      return { ...state, num: state.num + 1 }

    case ACTIONTYPES.SOUND_PLAYING:
      return { ...state, soundPlaying: !state.soundPlaying }
    case ACTIONTYPES.GAME_CLEAR:
      return { ...state, isOver: !state.isOver }
    case ACTIONTYPES.DIALOG_TOGGLE:
      return { ...state, showDialog: !state.showDialog }
    case ACTIONTYPES.LOADING_TOGGLE:
      return { ...state, showLoad: !state.showLoad }
    default:
      return state
  }
}
