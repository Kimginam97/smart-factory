import React from 'react'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const AnomalyDetection = () => {
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

  function createData(name, count) {
    return { name, count }
  }

  const row = [
    createData('SX5000(A)', '1'),
    createData('KC8088(A)', '1'),
    createData('KC8088(B)', '1'),
    createData('SX5000(C)', '1')
  ]

  return (
    <>
      <div
        style={{
          display: 'grid',
          height: '100%',
          overflow: 'hidden'
        }}>
        <div style={style.chartDescription1}>이상감지</div>
        <TableContainer style={style.tableColor} component={Paper}>
          <Table aria-label="simple table" sx={{ borderBottom: '0px' }}>
            {/* <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: 'rgb(0,0,0)' }} align="center">
                  장비명
                </TableCell>
                <TableCell sx={{ backgroundColor: 'rgb(0,0,0)' }} align="center">
                  건
                </TableCell>
              </TableRow>
            </TableHead> */}
            <TableBody sx={{ borderBottom: '0px' }}>
              {row.map((row) => (
                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell sx={{ color: 'white', borderBottom: '0px' }} align="left">
                    {row.name}
                  </TableCell>
                  <TableCell sx={{ color: 'white', borderBottom: '0px' }} align="right">
                    {row.count}건
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

export default AnomalyDetection
