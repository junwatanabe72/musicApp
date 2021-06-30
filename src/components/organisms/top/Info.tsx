import React from 'react'
import styled from 'styled-components'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { TableCell } from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'
import FiberNewIcon from '@material-ui/icons/FiberNew'
import { infotitle } from 'utils/constant'
import { Flex, Padding } from 'utils/styled/common'
import { CLEAR } from 'utils/constant/number'
import { infoTexts } from 'utils/constant/info'

const infomations = Object.values(infoTexts).reverse()

const StyledTableContainer = styled(TableContainer)`
  max-height: 40vh;
  border-radius: 6px;
`

const StyledTableCell = styled(TableCell)`
  font-size: 1.2em;
  max-width: 33vw;
  background-color: ${(props) => props.theme.palette.grey[100]};
`

const Info: React.FC = () => {
  return (
    <StyledTableContainer>
      <Table stickyHeader aria-label="sticky table" size="small">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" colSpan={3}>
              <Flex>
                <InfoIcon color="primary" />
                <Padding left={CLEAR.TINY}>{infotitle}</Padding>
              </Flex>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {infomations.map(
            (info: { content: string; date: string }, num: number) => {
              return num === 0 ? (
                <TableRow key={num}>
                  <TableCell>
                    <FiberNewIcon color="secondary" />
                  </TableCell>
                  <TableCell>{info.content}</TableCell>
                  <TableCell>{info.date}</TableCell>
                </TableRow>
              ) : (
                <TableRow key={num}>
                  <TableCell></TableCell>
                  <TableCell>{info.content}</TableCell>
                  <TableCell>{info.date}</TableCell>
                </TableRow>
              )
            },
          )}
        </TableBody>
      </Table>
    </StyledTableContainer>
  )
}

export default Info
