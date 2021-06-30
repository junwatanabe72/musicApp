import React, { useState } from 'react'
import styled from 'styled-components'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { OriginalArtists, sortedArtists } from 'store'
import { media } from 'utils/styled/media'

interface Props {
  state: GameState
  dispatchChangeArtist: (value: OriginalArtists) => void
}

const StyledSelect = styled(Select)`
  min-width: 17vw;
  ${media.phone`  
  min-width: 40vw;
      `}
`

const SelectArtist: React.FC<Props> = ({ state, dispatchChangeArtist }) => {
  const [targetArtist, setTargetArtist] = useState<string>(state.artist)
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTargetArtist(event.target.value as string)
    dispatchChangeArtist(event.target.value as OriginalArtists)
  }
  return (
    <StyledSelect
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={targetArtist}
      onChange={handleChange}
    >
      {Object.entries(sortedArtists).map(([key, value]) => {
        return (
          <MenuItem key={key} value={key}>
            {value}
          </MenuItem>
        )
      })}
    </StyledSelect>
  )
}

export default SelectArtist
