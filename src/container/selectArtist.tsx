import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import SelectArtist from '../components/organisms/top/SelectArtist'
import { changeArtist } from '../actions/index'
import { OriginalArtists } from 'store'

const mapStateToProps = (state: GameState) => {
  return { state: state }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dispatchChangeArtist: (value: OriginalArtists) => {
      dispatch(changeArtist(value))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectArtist)
