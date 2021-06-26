export const play = (
  audio: HTMLAudioElement,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  music: Music[],
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
