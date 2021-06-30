import React from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import CustomButton from 'components/atoms/CustomButton'
import GameHeadText from 'components/atoms/GameHead'
import {
  Padding,
  StyledA,
  JUSTIFYCONTENT,
  ALIGNITEMS,
  Flex,
} from 'utils/styled/common'
import { CLEAR } from 'utils/constant/number'
import ClearScreen from './ClearScreen'
import { media } from 'utils/styled/media'

interface Props {
  isOver: boolean
  answers: string[]
  questions: Music[]
  num: number
  onClick: (trakName: string) => Promise<void>
  retry: () => void
}
const Container = styled.div`
  height: 50vh;
  ${media.phone`
  height: 50vh;
      `}
`
const StyledContainer = styled(Flex)`
  flex-direction: column;
  text-align: center;
`
const Bottom = styled(Flex)`
  position: absolute;
  bottom: -13vh;
  ${media.phone`
  bottom: 0vh;
      `}
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
    <Container>
      {isOver ? (
        <ClearScreen questions={questions} retry={retry} />
      ) : (
        <>
          <Padding>
            <GameHeadText value={`${questions[num]?.artistName ?? ''}`} />
            <GameHeadText value={`第${num + 1}問 / ${questions.length}問`} />
          </Padding>
          <Grid
            container
            direction="column"
            justify={JUSTIFYCONTENT.CENTER}
            alignItems={ALIGNITEMS.CENTER}
          >
            {answers &&
              answers.map((answer) => {
                return (
                  <Padding key={answer} all={CLEAR.TINY}>
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
            <StyledContainer>
              <Bottom>
                <Padding all={CLEAR.TINY}>
                  「{questions[num - 1].trackName}」は
                  <StyledA href={questions[num - 1].collectionViewUrl}>
                    ここ
                  </StyledA>
                  からダウンロードできます！
                </Padding>
              </Bottom>
            </StyledContainer>
          )}
        </>
      )}
    </Container>
  )
}

export default GameScreen
