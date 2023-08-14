/* eslint-disable @typescript-eslint/no-explicit-any */
// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableComponent from 'src/components/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useGetVendorsQuery } from 'src/services/vendorService';
import { Link } from 'react-router-dom';
import { useState } from 'react';
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

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9)
];

export default function Vendors(): JSX.Element {
  const [vendors, setVendors] = useState([]);
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

  const { data } = useGetVendorsQuery(
    { vendors },
    {
      refetchOnMountOrArgChange: true
    }
  );

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Vendors</TableCell>
              <TableCell align="center">URL</TableCell>
              <TableCell align="center">Total Games</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(data as any[])?.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">
                  <Link to={row.name}>{row.name}</Link>
                </TableCell>
                <TableCell align="left">{row.url}</TableCell>
                <TableCell align="center">{row.gamesTotal}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
