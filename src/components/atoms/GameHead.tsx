import React from 'react'
import styled from 'styled-components'
import { media } from 'utils/styled/media'

interface Props {
  value: string
}

const Container = styled.div`
  font-size: 3em;
  min-width: 50vw;
  color: ${(props) => props.theme.palette.common.black};
  ${media.phone`
  font-size: 1.8em;
      `}
`

const GameHeadText: React.FC<Props> = ({ value }) => {
  return <Container>{value}</Container>
}
export default GameHeadText
