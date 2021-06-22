import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import GameHeadText from 'components/atoms/GameHead'
import { Padding, StyledA } from 'utils/styled/common'
import { CLEAR } from 'utils/constant/number'
import { Button } from '@material-ui/core'
import { media } from 'utils/styled/media'

interface Props {
  questions: Music[]
  retry: () => Promise<void>
}
const Container = styled.div`
  font-size: 1.5em;
  ${media.phone`
  font-size: 1.1em;
      `}
`
const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ClearScreen: React.FC<Props> = ({ questions, retry }) => {
  return (
    <Container>
      <Padding all={CLEAR.XSMALL}>
        <GameHeadText value={'GAME CLEAR !!'} />
        <Padding all={CLEAR.TINY}>今回のセットリスト</Padding>
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
        <Padding all={CLEAR.TINY}>
          「{questions[0].artistName}」の曲は
          <StyledA href={questions[0].artistViewUrl}>ここ</StyledA>
          からダウンロードできます！
        </Padding>
        <Padding all={CLEAR.TINY}>
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
        </Padding>
      </Padding>
    </Container>
  )
}

export default ClearScreen
