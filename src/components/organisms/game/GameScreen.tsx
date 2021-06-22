import React from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import CustomButton from 'components/atoms/CustomButton'
import GameHeadText from 'components/atoms/GameHead'
import { QUESTIONSNUMBER } from 'utils/constant'
import { Padding, StyledA } from 'utils/styled/common'
import { CLEAR } from 'utils/constant/number'
import ClearScreen from './ClearScreen'

interface Props {
  isOver: boolean
  answers: string[]
  questions: Music[]
  num: number
  onClick: (trakName: string) => Promise<void>
  retry: () => Promise<void>
}
const Con = styled.div`
  // position: relative;
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Bottom = styled.div`
  position: absolute;
  bottom: 12vh;
`

const GameScreen: React.FC<Props> = ({
  isOver,
  questions,
  answers,
  num,
  onClick,
  retry,
}) => {
  return (
    <Con>
      {isOver ? (
        <ClearScreen questions={questions} retry={retry} />
      ) : (
        <Container>
          <Padding top={CLEAR.SMALL}>
            <GameHeadText value={`${questions[num]?.artistName ?? ''}`} />
            <GameHeadText value={`第${num + 1}問 / ${QUESTIONSNUMBER}問`} />
          </Padding>
          <Padding top={CLEAR.SMALL} />
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            {answers &&
              answers.map((answer) => {
                return (
                  <Padding key={answer} bottom={CLEAR.TINY}>
                    <CustomButton
                      value={answer}
                      onClick={() => {
                        onClick(answer)
                      }}
                    />
                  </Padding>
                )
              })}
          </Grid>
          {questions[num - 1] && (
            <Bottom>
              <Padding all={CLEAR.TINY}>
                「{questions[num - 1].trackName}」は
                <StyledA href={questions[num - 1].collectionViewUrl}>
                  ここ
                </StyledA>
                からダウンロードできます！
              </Padding>
            </Bottom>
          )}
        </Container>
      )}
    </Con>
  )
}

export default GameScreen
