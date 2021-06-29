import React, { useState } from 'react'
import styled from 'styled-components'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { sortedArtists } from 'store'
import { media } from 'utils/styled/media'

interface Props {
  value: GameState
  dispatchChangeArtist: (value: string) => void
}

const StyledSelect = styled(Select)`
  min-width: 17vw;
  ${media.phone`  
  min-width: 40vw;
      `}
`

const SelectArtist: React.FC<Props> = ({ value, dispatchChangeArtist }) => {
  const [targetArtist, setTargetArtist] = useState<string>(value.artist)
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTargetArtist(event.target.value as string)
    dispatchChangeArtist(event.target.value as string)
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
