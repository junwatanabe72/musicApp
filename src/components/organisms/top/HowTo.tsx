import React from 'react'
import styled from 'styled-components'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import { howToText, howToText2, howToText3 } from 'utils/constant'

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const HowTo: React.FC = () => {
  return (
    <>
      <h3>{howToText}</h3>
      <h3>{howToText2}</h3>
      <Flex>
        <ArrowDownwardIcon />
        <h3>{howToText3}</h3>
      </Flex>
    </>
  )
}

export default HowTo
