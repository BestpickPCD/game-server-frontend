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
import { useRef } from 'react';
// import { TablePagination } from '@mui/material';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

export default function Vendors(): JSX.Element {
  const abc = useRef();
  // const [page, setPage] = React.useState(2);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // const handleChangePage = (
  //     event: React.MouseEvent<HTMLButtonElement> | null,
  //     newPage: number,
  // ) => {
  //     setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (
  //     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  // ) => {
  //     setRowsPerPage(parseInt(event.target.value, 10));
  //     setPage(0);
  // };
  const { data } = useGetVendorsQuery({});

  return (
    <TableContainer component={Paper} sx={{ margin: 4 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
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
                <Link to={`${row.name}`}>{row.name}</Link>
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
