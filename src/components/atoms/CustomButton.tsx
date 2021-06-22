import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { media } from 'utils/styled/media'

interface Props {
  value: string
  onClick: (num?: string) => void
}

const StyledButton = styled(Button)`
  font-size: 1.5em;
  width: 60vw;
  height: 10vh;
  border: solid 1px;
  color: ${(props) => props.theme.palette.common.black};
  ${media.phone`
  width: 80vw;
  font-size: 1.5em;
      `}
`

const CustomButton: React.FC<Props> = ({ value, onClick }) => {
  return (
    <StyledButton
      onClick={() => {
        onClick(value)
      }}
    >
      {value}
    </StyledButton>
  )
}
export default CustomButton
