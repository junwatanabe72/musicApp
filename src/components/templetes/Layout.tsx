import React from 'react'
import styled from 'styled-components'
import { iTunesUrl } from 'utils/constant'
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
  height: 70vh;
  flex-direction: column;
  ${media.phone`
  height: 70vh;
      `}
`

const Bottom = styled.div`
  position: absolute;
  bottom: -15vh;
  ${media.phone`
  bottom: -5vh;
      `}
`

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <StyledContainer>
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
