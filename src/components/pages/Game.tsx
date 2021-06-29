import React, { useState, useEffect } from 'react'
import ReactHowler from 'react-howler'
import { answer, Answer } from 'utils/constant'
import { init, retry } from 'helpers'
import Layout from 'components/templetes/Layout'
import LoadingComponent from 'components/atoms/Loading'
import AnswerDialog from 'components/atoms/AnswerDialog'
import GameScreen from 'components/organisms/game/GameScreen'
import { useLocation } from 'react-router-dom'
import { artistMusicData } from 'store'

const Game: React.FC = () => {
  const { state } = useLocation()
  const [playing, setPlaying] = useState(false)
  const [questions, setQuestions] = useState<Music[]>([])
  const [answers, setAnswers] = useState<string[][]>([])
  const [num, setNum] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isCorrect, setIsCorrect] = useState<Answer>(answer.isNotSelected)
  const [isOver, setIsOver] = useState<boolean>(false)
  const [open, setOpen] = useState(false)

  const initData = async () => {
    const { questions, answers } = init(state as string)
    if (questions.length === 0) {
      setIsLoading(false)
      return
    }
    setQuestions(questions)
    setPlaying(true)
    setAnswers(answers)
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  const retryData = async () => {
    setIsLoading(true)
    setIsOver(false)
    setNum(0)
    const { questions, answers } = retry(
      artistMusicData[state as keyof typeof artistMusicData],
    )
    setQuestions(questions)
    setAnswers(answers)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    setPlaying(true)
  }

  const inCorrectAction = async (): Promise<void> => {
    setIsCorrect(answer.isIncorrect)
    setOpen(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsCorrect(answer.isNotSelected)
    setOpen(false)
    return
  }

  const correctAction = async (): Promise<void> => {
    setIsCorrect(answer.isCorrect)
    setOpen(true)
    if (num === questions.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsCorrect(answer.isNotSelected)
      setIsOver(true)
      setOpen(false)
      return
    }
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setNum((num) => {
      return num + 1
    })
    setIsCorrect(answer.isNotSelected)
    setOpen(false)
    // await new Promise((resolve) => setTimeout(resolve, 3000))
    return
  }

  const onClick = async (trakName: string): Promise<void> => {
    if (!questions[num] || isLoading) {
      return
    }
    setIsLoading(true)
    if (trakName !== questions[num].trackName) {
      await inCorrectAction()
      setIsLoading(false)
      return
    }
    await correctAction()
    setIsLoading(false)
    return
  }

  useEffect(() => {
    initData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout>
      {questions && (
        <ReactHowler
          src={[questions[num]?.previewUrl ?? '']}
          playing={playing}
          loop={true}
          preload={true}
        />
      )}

      <GameScreen
        isOver={isOver}
        questions={questions}
        answers={answers[num]}
        onClick={onClick}
        retry={retryData}
        num={num}
      />
      {isLoading ? <LoadingComponent open={isLoading} /> : <></>}
      <AnswerDialog
        open={open}
        isCorrect={isCorrect}
        question={questions[num]}
      />
    </Layout>
  )
}
export default Game
