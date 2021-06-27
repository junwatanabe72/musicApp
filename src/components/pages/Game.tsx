import React, { useState, useEffect } from 'react'
import ReactHowler from 'react-howler'
import { answer, Answer } from 'utils/constant'
import { init, retry } from 'helpers'
import Layout from 'components/templetes/Layout'
import LoadingComponent from 'components/atoms/Loading'
import AnswerDialog from 'components/atoms/AnswerDialog'
import GameScreen from 'components/organisms/game/GameScreen'
import { useLocation } from 'react-router-dom'

const Game: React.FC = () => {
  const { state } = useLocation()
  const [playing, setPlaying] = useState(false)
  const [questions, setQuestions] = useState<Music[]>([])
  const [allSources, setAllSources] = useState<Music[]>([])
  const [answers, setAnswers] = useState<string[][]>([])
  const [num, setNum] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isCorrect, setIsCorrect] = useState<Answer>(answer.isNotSelected)
  const [isOver, setIsOver] = useState<boolean>(false)
  const [open, setOpen] = useState(false)
  // console.log(state)
  const initData = async () => {
    // const url = createTargetUrl(state as string)
    const { questions, answers, extractSources } = init(state as string)
    if (questions.length === 0) {
      setIsLoading(false)
      return
    }
    setQuestions(questions)
    setAnswers(answers)
    setAllSources(extractSources)
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setPlaying(true)
    setIsLoading(false)
  }

  const retryData = async () => {
    setIsLoading(true)
    setIsOver(false)
    setNum(0)
    const { questions, answers, extractSources } = retry(allSources)
    setQuestions(questions)
    setAnswers(answers)
    setAllSources(extractSources)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    setPlaying(true)
  }

  const handleChangeNum = () => {
    if (!isLoading) {
      setIsLoading(true)
    }
    if (num === questions.length - 1) {
      setIsLoading(false)
      setIsCorrect(answer.isNotSelected)
      setIsOver(true)
      setPlaying(false)
      return
    }
    setNum((num) => {
      return num + 1
    })
    setIsCorrect(answer.isNotSelected)
    setIsLoading(false)
  }
  const onClick = async (trakName: string): Promise<void> => {
    if (!questions[num] || isLoading) {
      return
    }
    setIsLoading(true)
    if (trakName !== questions[num].trackName) {
      setIsCorrect(answer.isIncorrect)
      setOpen(true)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsCorrect(answer.isNotSelected)
      setOpen(false)
      setIsLoading(false)
      return
    }
    setIsCorrect(answer.isCorrect)
    setOpen(true)
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsLoading(false)
    setOpen(false)
    handleChangeNum()
    return
  }
  useEffect(() => {
    initData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout>
      <ReactHowler
        src={[questions[num]?.previewUrl ?? '']}
        playing={playing}
        loop={true}
      />
      {isLoading ? (
        <LoadingComponent open={isLoading} />
      ) : (
        <GameScreen
          isOver={isOver}
          questions={questions}
          answers={answers[num]}
          onClick={onClick}
          retry={retryData}
          num={num}
        />
      )}
      <AnswerDialog
        open={open}
        isCorrect={isCorrect}
        question={questions[num]}
      />
    </Layout>
  )
}
export default Game
