import { combineReducers } from 'redux'
import gameReducer from './game'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducers = (): any =>
  combineReducers({
    gameReducer,
  })

export default reducers
