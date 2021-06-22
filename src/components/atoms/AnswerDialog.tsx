import React from 'react'
import styled from 'styled-components'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { media } from 'utils/styled/media'
import { answer, Answer } from 'utils/constant'

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
      `}
`
const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
        <Flex>
          {title(isCorrect)}
          {isCorrect === answer.isCorrect && (
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <Container>{question.trackName} </Container>
              </DialogContentText>
            </DialogContent>
          )}
          {isCorrect === answer.isIncorrect && (
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <Container>不正解です</Container>
              </DialogContentText>
            </DialogContent>
          )}
        </Flex>
      </Size>
    </Dialog>
  )
}
export default AnswerDialog
