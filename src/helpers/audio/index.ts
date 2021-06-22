export const play = (
  audio: HTMLAudioElement,
  music: any[],
  num: number,
): void => {
  const { previewUrl } = music[num]
  audio.preload = 'auto'
  audio.src = previewUrl
  audio.load()
  audio.loop = true
  audio.play()
}

export const stop = (audio: HTMLAudioElement): void => {
  audio.pause()
  audio.currentTime = 0
}
