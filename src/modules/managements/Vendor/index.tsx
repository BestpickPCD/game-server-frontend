/* eslint-disable @typescript-eslint/no-explicit-any */
// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useGetVendorsQuery } from 'src/services/vendorService';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { FormattedMessage } from 'react-intl';

export default function Vendors(): JSX.Element {
  const { data } = useGetVendorsQuery({});

  return (
    <TableContainer component={Paper} sx={{ margin: 4 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <FormattedMessage id="label.name" />
            </TableCell>
            <TableCell align="left">Link</TableCell>
            <TableCell align="center">Games</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(data as any[])?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Button
                  disabled={!row.canSee}
                  variant="contained"
                  size="small"
                  sx={{ width: '200px' }}
                >
                  <Link to={`${row.name}`}>{row.name}</Link>
                </Button>
              </TableCell>
              <TableCell align="left">{row.url}</TableCell>
              <TableCell align="center">{row.gamesTotal}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
