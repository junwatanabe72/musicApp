import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import SelectArtist from '../components/organisms/top/SelectArtist'
import { changeArtist } from '../actions/index'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapStateToProps = (state: any) => {
  return { value: state.gameReducer }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dispatchChangeArtist: (value: string) => {
      dispatch(changeArtist(value))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectArtist)
