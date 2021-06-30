import React, { useEffect } from 'react'
import ReactHowler from 'react-howler'
import { answer } from 'utils/constant'
import Layout from 'components/templetes/Layout'
import LoadingComponent from 'components/atoms/Loading'
import AnswerDialog from 'components/atoms/AnswerDialog'
import GameScreen from 'components/organisms/game/GameScreen'
import { OriginalArtists } from 'store'

interface Props {
  state: GameState
  dispatchInitAction: (value: OriginalArtists) => void
  dispatchSelectAnswer: (value: Answer) => void
  dispatchToggleDialog: () => void
  dispatchToggleLoding: () => void
  dispatchToggleSoundPlaying: () => void
  dispatchNextQuestion: () => void
  dispatchGameClear: () => void
}

const Game: React.FC<Props> = ({
  state,
  dispatchInitAction,
  dispatchSelectAnswer,
  dispatchToggleDialog,
  dispatchToggleLoding,
  dispatchToggleSoundPlaying,
  dispatchNextQuestion,
  dispatchGameClear,
}) => {
  const {
    artist,
    num,
    questions,
    answers,
    showDialog,
    showLoad,
    soundPlaying,
    isOver,
    isCorrect,
  } = state

  const initData = () => {
    dispatchInitAction(artist)
    dispatchToggleSoundPlaying()
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
    await new Promise((resolve) => setTimeout(resolve, 3000))
    if (num === questions.length - 1) {
      dispatchGameClear()
      dispatchSelectAnswer(answer.isNotSelected)
      dispatchToggleDialog()
      return
    }
    dispatchNextQuestion()
    dispatchSelectAnswer(answer.isNotSelected)
    dispatchToggleDialog()
    return
  }

  const onClick = async (trakName: string): Promise<void> => {
    if (!questions[num] || showLoad) {
      return
    }
    dispatchToggleLoding()
    if (trakName !== questions[num].trackName) {
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
      <GameScreen
        isOver={isOver}
        questions={questions}
        answers={answers[num]}
        onClick={onClick}
        retry={initData}
        num={num}
      />
      <LoadingComponent open={showLoad} />
      <AnswerDialog
        open={showDialog}
        isCorrect={isCorrect}
        question={questions[num]}
      />
      <>
        <ReactHowler
          src={[questions[num]?.previewUrl ?? '']}
          playing={soundPlaying}
          loop={true}
          preload={true}
        />
      </>
    </Layout>
  )
}
export default Game
