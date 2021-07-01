import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { originalArtists, OriginalArtists, sortedArtists } from 'store'
import SelectDialog from 'components/atoms/SelectDialog'

interface Props {
  state: GameState
  dispatchChangeArtist: (value: OriginalArtists) => void
}

const StyledButton = styled(Button)`
  color: ${(props) => props.theme.palette.secondary.light};
`
const SelectArtist: React.FC<Props> = ({ state, dispatchChangeArtist }) => {
  const [targetArtist, setTargetArtist] = useState<string>(state.artist)
  const [showDialog, setShowDialog] = useState<boolean>(false)
  const handleChange = (value: string) => {
    setTargetArtist(value)
    dispatchChangeArtist(value as OriginalArtists)
    setShowDialog(!showDialog)
  }
  const toggleDialog = (): void => {
    setShowDialog(!showDialog)
  }
  return (
    <>
      <StyledButton
        size="large"
        style={{ textTransform: 'none' }}
        onClick={() => {
          toggleDialog()
        }}
      >
        {originalArtists[targetArtist as OriginalArtists]}
      </StyledButton>
      <SelectDialog
        open={showDialog}
        targetArtist={targetArtist}
        handleChange={handleChange}
        sortedArtists={sortedArtists}
      />
    </>
  )
}

export default SelectArtist
