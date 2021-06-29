type ACTIONTYPES =
  | INIT
  | LOADING_TOGGLE
  | DIALOG_TOGGLE
  | NEXT
  | GAME_CLEAR
  | SOUND_PLAYING
  | SELECT_ANSWER
  | CHANGE_ARTIST

interface Action<T> extends Action<ACTIONTYPES, T> {
  type: ACTIONTYPES
  payload: T
}
interface BasicAction extends Action {
  type: ACTIONTYPES
}
