import React from 'react'
import styled from 'styled-components'
import { iTunesUrl, ninjaID } from 'utils/constant'
import AdmaxSwitch from 'components/templetes/Ninja'
import { StyledA } from 'utils/styled/common'

const Height = styled.div`
  height: 100vh;
  position: relative;
`
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`
const AdHeight = styled.div`
  height: 60px;
`
const Bottom = styled.div`
  position: absolute;
  bottom: 10vh;
`

const Layout: React.FC = ({ children }) => {
  return (
    <Height>
      <StyledContainer>
        <AdHeight>
          <AdmaxSwitch id={ninjaID} />
        </AdHeight>
        {children}
        <Bottom>
          このwebサイトは
          <StyledA href={iTunesUrl}>iTunes</StyledA>
          の試聴データを使用しています。
        </Bottom>
      </StyledContainer>
    </Height>
  )
}
export default Layout
