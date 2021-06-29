import React from 'react'
import styled from 'styled-components'
import { iTunesUrl, ninjaID } from 'utils/constant'
import AdmaxSwitch from 'components/templetes/Ninja'
import { Flex, StyledA } from 'utils/styled/common'
import { media } from 'utils/styled/media'

const Container = styled.div`
  position: relative;
  text-align: center;
`

const StyledContainer = styled(Flex)`
  flex-direction: column;
  text-align: center;
`

const Column = styled(Flex)`
  height: 50vh;
  flex-direction: column;
`
const AdHeight = styled.div`
  height: 60px;
`
const Bottom = styled.div`
  position: absolute;
  bottom: -36vh;
  ${media.phone`
  bottom: -20vh;
      `}
`

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <StyledContainer>
        <AdHeight>
          <AdmaxSwitch id={ninjaID} />
        </AdHeight>
        <Column>{children}</Column>
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
