import React from 'react'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const MtbfRemainingTime = () => {
  const style = {
    tableColor: {
      backgroundColor: 'rgb(23, 20, 20, 0.1)',
      color: 'white'
    },
    fontColor: {
      color: 'white'
    },
    tableHead: {
      backgroundColor: 'rgb(255,4,210, 0)'
    },
    chartDescription1: {
      position: 'inherit',
      color: 'Yellow'
    }
  }

  function createData(name, time) {
    return { name, time }
  }

  const row = [
    createData('SX5000(B)', '250'),
    createData('Z248(A)', '706'),
    createData('KC8088(B)', '300'),
    createData('SX5000(A)', '40')
  ]

  return (
    <>
      <div
        style={{
          display: 'grid',
          height: '100%',
          overflow: 'hidden'
        }}>
        <div style={style.chartDescription1}>MTBF 잔여 시간</div>
        <TableContainer style={style.tableColor} component={Paper}>
          <Table aria-label="simple table">
            {/* <TableHead>
          <TableRow>
            <TableCell align="center">장비명</TableCell>
            <TableCell align="center">건</TableCell>
          </TableRow>
        </TableHead> */}
            <TableBody sx={{ borderBottom: '0px' }}>
              {row.map((row) => (
                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell sx={{ color: 'white', borderBottom: '0px' }} align="left">
                    {row.name}
                  </TableCell>
                  <TableCell sx={{ color: 'white', borderBottom: '0px' }} align="right">
                    {row.time}분
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

export default MtbfRemainingTime
