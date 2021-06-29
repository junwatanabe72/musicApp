import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import Game from '../components/pages/Game'
import {
  toggleDialog,
  toggleLoading,
  soundPlaying,
  nextQuestion,
  gameClear,
  selectAnswer,
  initAction,
} from '../actions/index'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapStateToProps = (state: any) => {
  return { value: state.gameReducer }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dispatchInitAction: (value: string) => {
      dispatch(initAction(value))
    },
    dispatchSelectAnswer: (value: string) => {
      dispatch(selectAnswer(value))
    },
    dispatchToggleDialog: () => {
      dispatch(toggleDialog())
    },
    dispatchToggleLoding: () => {
      dispatch(toggleLoading())
    },
    dispatchToggleSoundPlaying: () => {
      dispatch(soundPlaying())
    },
    dispatchNextQuestion: () => {
      dispatch(nextQuestion())
    },
    dispatchGameClear: () => {
      dispatch(gameClear())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
