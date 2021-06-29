import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import GameHeadText from 'components/atoms/GameHead'
import { Padding, StyledA } from 'utils/styled/common'
import { CLEAR } from 'utils/constant/number'
import { media } from 'utils/styled/media'
import { Flex } from 'utils/styled/common'

interface Props {
  questions: Music[]
  retry: () => void
}
const Container = styled(Padding)`
  font-size: 1.5em;
  ${media.phone`
  font-size: 1.3em;
      `}
`

const ClearScreen: React.FC<Props> = ({ questions, retry }) => {
  return (
    <>
      <GameHeadText value={'GAME CLEAR !!'} />
      <Container>今回のセットリスト</Container>
      <Container>
        {questions.map((value: Music, number: number) => {
          return (
            <div key={number}>
              {`${number + 1}.`}
              <StyledA
                href={questions[number].collectionViewUrl}
              >{`${value.trackName}`}</StyledA>
            </div>
          )
        })}
      </Container>
      <Container>
        「{questions[0].artistName}」の曲は
        <StyledA href={questions[0].artistViewUrl}>ここ</StyledA>
        からダウンロードできます！
      </Container>
      <Container>
        <Flex>
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={() => {
              retry()
            }}
          >
            retry
          </Button>
          <Padding all={CLEAR.TINY} />
          <Button size="large" variant="contained" color="secondary">
            <Link to={'/'}>Top page</Link>
          </Button>
        </Flex>
      </Container>
    </>
  )
}

export default ClearScreen
