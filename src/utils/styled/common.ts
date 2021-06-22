import styled from 'styled-components'

export const StyledA = styled.a`
  color: ${(props) => props.theme.palette.error.main};
`
export const Padding = styled.div<PaddingProps>`
  padding-top: ${(props) => props.top}vw;
  padding-right: ${(props) => props.right}vw;
  padding-bottom: ${(props) => props.bottom}vw;
  padding-left: ${(props) => props.left}vw;
  padding: ${(props) => props.all}vw;
`

export const ALIGNITEMS = {
  CENTER: 'center',
  START: 'start',
  END: 'end',
} as const

export const JUSTIFYCONTENT = {
  CENTER: 'center',
  FSTART: 'flex-start',
  FEND: 'flex-end',
  END: 'end',
  START: 'start',
  BETWEEN: 'space-between',
  AROUND: 'space-around',
  EVENLY: 'space-evenly',
} as const

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
`
export const Between = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: ${JUSTIFYCONTENT.BETWEEN};
`
