import React from 'react'
import styled from 'styled-components'
import { iTunesUrl, ninjaID } from 'utils/constant'
import AdmaxSwitch from 'components/templetes/Ninja'
import { StyledA } from 'utils/styled/common'

const Container = styled.div`
  position: relative;
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`
const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70vh;
`
const AdHeight = styled.div`
  height: 60px;
`
const Bottom = styled.div`
  position: absolute;
  bottom: -10vh;
`

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <StyledContainer>
        <AdHeight>
          <AdmaxSwitch id={ninjaID} />
        </AdHeight>
        <Flex>{children}</Flex>
        <Bottom>
          このwebサイトは
          <StyledA href={iTunesUrl}>iTunes</StyledA>
          の試聴データを使用しています。
        </Bottom>
      </StyledContainer>
    </Container>
  )
}
export default Layout
