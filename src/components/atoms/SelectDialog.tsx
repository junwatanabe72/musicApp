import React from 'react'
import styled from 'styled-components'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { media } from 'utils/styled/media'
import { Flex } from 'utils/styled/common'
import { howToText3 } from 'utils/constant'

interface Props {
  open: boolean
  targetArtist: string
  handleChange: (key: string) => void
  sortedArtists: { [k: string]: string }
}
const Size = styled.div`
  height: 80vh;
  max-width: 90vw;
  ${media.phone`
  width: 80vw;
  height: 60vh;
      `}
`

const Column = styled(Flex)`
  flex-wrap: wrap;
  justify-content: space-between;
`
const SelectSize = styled.div`
  min-width: 150px;
  height: 6vh;
  cursor: pointer;
  ${media.phone`
    min-width: 28vw;
    height: 5vh;
        `}
`
const StyledSelectSize = styled(SelectSize)`
  color: ${(props) => props.theme.palette.secondary.main};
`

const AnswerDialog: React.FC<Props> = ({
  open,
  targetArtist,
  handleChange,
  sortedArtists,
}) => {
  return (
    <Dialog aria-labelledby="simple-dialog-title" open={open}>
      <Size>
        <Column>
          <DialogTitle id="alert-dialog-title">{howToText3}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Column>
                {Object.entries(sortedArtists).map(([key, value]) => {
                  return key === targetArtist ? (
                    <StyledSelectSize
                      key={key}
                      onClick={() => {
                        handleChange(key)
                      }}
                    >
                      {value}
                    </StyledSelectSize>
                  ) : (
                    <SelectSize
                      key={key}
                      onClick={() => {
                        handleChange(key)
                      }}
                    >
                      {value}
                    </SelectSize>
                  )
                })}
              </Column>
            </DialogContentText>
          </DialogContent>
        </Column>
      </Size>
    </Dialog>
  )
}
export default AnswerDialog
