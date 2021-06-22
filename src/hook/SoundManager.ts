import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { audio } from 'utils/constant'
import { stop } from 'helpers/audio'

const SoundManager = (): void => {
  const location = useLocation()
  useEffect(() => {
    console.log('effect')
    if (!audio) {
      audio
    }
    if (location.pathname !== '/game') {
      console.log('game')
      stop(audio)
      return
    }
  }, [location])
}
export default SoundManager
