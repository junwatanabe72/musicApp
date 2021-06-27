import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { sortedArtists } from 'store'

interface Props {
  targetArtist: string
  handleChange: (
    event: React.ChangeEvent<{
      value: unknown
    }>,
  ) => void
}
const SelectArtist: React.FC<Props> = ({ targetArtist, handleChange }) => {
  return (
    <Select
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
    </Select>
  )
}

export default SelectArtist
