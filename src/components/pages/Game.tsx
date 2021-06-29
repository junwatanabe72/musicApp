import React, { useEffect } from 'react'
import ReactHowler from 'react-howler'
import { answer } from 'utils/constant'
import Layout from 'components/templetes/Layout'
import LoadingComponent from 'components/atoms/Loading'
import AnswerDialog from 'components/atoms/AnswerDialog'
import GameScreen from 'components/organisms/game/GameScreen'

interface Props {
  value: GameState
  dispatchInitAction: (value: string) => void
  dispatchSelectAnswer: (value: string) => void
  dispatchToggleDialog: () => void
  dispatchToggleLoding: () => void
  dispatchToggleSoundPlaying: () => void
  dispatchNextQuestion: () => void
  dispatchGameClear: () => void
}

const Game: React.FC<Props> = ({
  value,
  dispatchInitAction,
  dispatchSelectAnswer,
  dispatchToggleDialog,
  dispatchToggleLoding,
  dispatchToggleSoundPlaying,
  dispatchNextQuestion,
  dispatchGameClear,
}) => {
  const initData = () => {
    dispatchInitAction(value.artist)
    dispatchToggleSoundPlaying()
    // dispatchToggleLoding()
    // await new Promise((resolve) => setTimeout(resolve, 1000))
    // dispatchToggleLoding()
    return
  }

  const retryData = () => {
    dispatchInitAction(value.artist)
    dispatchToggleSoundPlaying()
    // await new Promise((resolve) => setTimeout(resolve, 1000))
    return
  }

  const inCorrectAction = async (): Promise<void> => {
    dispatchSelectAnswer(answer.isIncorrect)
    dispatchToggleDialog()
    await new Promise((resolve) => setTimeout(resolve, 1000))
    dispatchSelectAnswer(answer.isNotSelected)
    dispatchToggleDialog()
    return
  }

  const correctAction = async (): Promise<void> => {
    dispatchSelectAnswer(answer.isCorrect)
    dispatchToggleDialog()
    if (value.num === value.questions.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      dispatchGameClear()
      dispatchSelectAnswer(answer.isNotSelected)
      dispatchToggleDialog()
      return
    }
    await new Promise((resolve) => setTimeout(resolve, 3000))
    dispatchNextQuestion()
    dispatchSelectAnswer(answer.isNotSelected)
    dispatchToggleDialog()
    return
  }

  const onClick = async (trakName: string): Promise<void> => {
    if (!value.questions[value.num] || value.showLoad) {
      return
    }
    dispatchToggleLoding()
    if (trakName !== value.questions[value.num].trackName) {
      await inCorrectAction()
      dispatchToggleLoding()
      return
    }
    await correctAction()
    dispatchToggleLoding()
    return
  }

  useEffect(() => {
    initData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout>
      {value.questions && (
        <ReactHowler
          src={[value.questions[value.num]?.previewUrl ?? '']}
          playing={value.soundPlaying}
          loop={true}
          preload={true}
        />
      )}

      <GameScreen
        isOver={value.isOver}
        questions={value.questions}
        answers={value.answers[value.num]}
        onClick={onClick}
        retry={retryData}
        num={value.num}
      />
      <LoadingComponent open={value.showLoad} />
      <AnswerDialog
        open={value.showDialog}
        isCorrect={value.isCorrect}
        question={value.questions[value.num]}
      />
    </Layout>
  )
}
export default Game
