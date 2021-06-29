import React from 'react'
import styled from 'styled-components'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { sortedArtists } from 'store'
import { media } from 'utils/styled/media'

interface Props {
  targetArtist: string
  handleChange: (
    event: React.ChangeEvent<{
      value: unknown
    }>,
  ) => void
}

const StyledSelect = styled(Select)`
  min-width: 17vw;
  ${media.phone`  
  min-width: 40vw;
      `}
`

const SelectArtist: React.FC<Props> = ({ targetArtist, handleChange }) => {
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
