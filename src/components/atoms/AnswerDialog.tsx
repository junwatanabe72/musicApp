import React from 'react'
import styled from 'styled-components'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { media } from 'utils/styled/media'
import { answer, Answer, incorrectText } from 'utils/constant'
import { Flex } from 'utils/styled/common'

interface Props {
  open: boolean
  question: Music
  isCorrect: Answer
}
const Size = styled.div`
  height: 30vh;
  width: 30vw;
  ${media.phone`
  width: 80vw;
  height: 40vh;
      `}
`

const Column = styled(Flex)`
  flex-direction: column;
`

const Container = styled.div`
  font-size: 1.5em;
  color: ${(props) => props.theme.palette.common.black};
  ${media.phone`
  font-size: 1.5em;
      `}
`
const StyledDialogTitle = styled(DialogTitle)`
  color: ${(props) => props.theme.palette.secondary.main};
`
const showText = {
  isCorrect: '正解',
  isIncorrect: '不正解',
} as const

const title = (isCorrect: Answer) => {
  return (
    <>
      {isCorrect === answer.isCorrect ? (
        <StyledDialogTitle id="alert-dialog-title">
          {showText[isCorrect as 'isCorrect']}
        </StyledDialogTitle>
      ) : (
        <DialogTitle id="alert-dialog-title">
          {showText[isCorrect as 'isIncorrect']}
        </DialogTitle>
      )}
    </>
  )
}

const AnswerDialog: React.FC<Props> = ({ open, question, isCorrect }) => {
  return (
    <Dialog aria-labelledby="simple-dialog-title" open={open}>
      <Size>
        <Column>
          {title(isCorrect)}
          {isCorrect === answer.isCorrect && (
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <Column>
                  <Container>{question.trackName} </Container>
                  <img src={question.artworkUrl100} />
                </Column>
              </DialogContentText>
            </DialogContent>
          )}
          {isCorrect === answer.isIncorrect && (
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <Container>{incorrectText}</Container>
              </DialogContentText>
            </DialogContent>
          )}
        </Column>
      </Size>
    </Dialog>
  )
}
export default AnswerDialog
