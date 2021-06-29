//ACTIONTYPES
export const ACTIONTYPES = {
  INIT: 'INIT',
  NEXT: 'NEXT',
  CHANGE_ARTIST: 'CHANGE_ARTIST',
  GAME_CLEAR: 'GAME_CLEAR',
  SOUND_PLAYING: 'SOUND_PLAYING',
  SELECT_ANSWER: 'SELECT_ANSWER',
  LOADING_TOGGLE: 'LOADING_TOGGLE',
  DIALOG_TOGGLE: 'DIALOG_TOGGLE',
} as const

export function initAction(artist: string): Action<string> {
  return { type: ACTIONTYPES.INIT, payload: artist }
}
export function changeArtist(artist: string): Action<string> {
  return { type: ACTIONTYPES.CHANGE_ARTIST, payload: artist }
}
export function selectAnswer(answer: string): Action<string> {
  return { type: ACTIONTYPES.SELECT_ANSWER, payload: answer }
}
export function soundPlaying(): BasicAction {
  return { type: ACTIONTYPES.SOUND_PLAYING }
}
export function nextQuestion(): BasicAction {
  return { type: ACTIONTYPES.NEXT }
}
export function gameClear(): BasicAction {
  return { type: ACTIONTYPES.GAME_CLEAR }
}
export function toggleDialog(): BasicAction {
  return { type: ACTIONTYPES.DIALOG_TOGGLE }
}
export function toggleLoading(): BasicAction {
  return { type: ACTIONTYPES.LOADING_TOGGLE }
}
