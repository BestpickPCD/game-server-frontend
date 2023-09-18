import { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Transactions } from 'src/models';
import { useGetUserTransactionByIdQuery } from 'src/services/transactionService';
import { useParams } from 'react-router';
import { Paper, TableContainer } from '@mui/material';

const columns: GridColDef[] = [
  {
    field: 'receiverUsername',
    headerName: 'Receiver',
    width: 200,
    valueGetter: (params: GridValueGetterParams) => params.row.receiverUsername
  },
  { field: 'type', headerName: 'type', width: 200 },
  {
    field: 'senderUsername',
    headerName: 'Sender',
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      params.row.senderUsername ?? params.row.receiverUsername
  },
  { field: 'status', headerName: 'status', width: 200 },
  { field: 'amount', headerName: 'amount', width: 200, type: 'number' }
];

let rows = [];
const showRows = async (data) => {
  rows = data;
};

export default function UserTransaction(): JSX.Element {
  const { slug } = useParams();
  const { data } = useGetUserTransactionByIdQuery({
    id: slug,
    type: '?type=add,bet'
  });
  if (data) {
    showRows(data);
  }

  return (
    <TableContainer component={Paper} sx={{ margin: 6 }}>
      <div style={{ width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 }
            }
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </TableContainer>
  );
}
