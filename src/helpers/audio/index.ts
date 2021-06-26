export const play = (
  audio: HTMLAudioElement,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  music?: Music[],
  num?: number,
): void => {
  if (!music) {
    audio.load()
    audio.play()
    return
  }

  const { previewUrl } = music[num ?? 0]
  audio.preload = 'auto'
  audio.src = previewUrl
  console.log(previewUrl)
  audio.load()
  audio.loop = true
  audio.play()
}

export const stop = (audio: HTMLAudioElement): void => {
  audio.pause()
  audio.currentTime = 0
}
