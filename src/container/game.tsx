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
import { OriginalArtists } from 'store'

const mapStateToProps = (state: GameState) => {
  return { state: state }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dispatchInitAction: (value: OriginalArtists) => {
      dispatch(initAction(value))
    },
    dispatchSelectAnswer: (value: Answer) => {
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
