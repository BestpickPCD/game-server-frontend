import { Paper, TableContainer } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useParams } from 'react-router';
import { useGetUserTransactionByIdQuery } from 'src/services/transactionService';

const columns: GridColDef[] = [
  {
    field: 'user.name',
    headerName: 'Receiver',
    width: 200,
    valueGetter: (params: GridValueGetterParams) => params.row.user?.name
  },
  { field: 'action', headerName: 'type', width: 200 },
  {
    field: 'sender.name',
    headerName: 'Sender',
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      params.row.sender?.name ?? params.row.receiver?.name
  },
  { field: 'status', headerName: 'status', width: 200 },
  { field: 'amount', headerName: 'amount', width: 200, type: 'number' }
];

let rows = [];
const showRows = async (data) => {
  rows = data.details;
};

export default function name(): JSX.Element {
  const { slug, type } = useParams();

  let typeParam;
  if (type === 'betting-history') {
    typeParam = 'bet,win,charge';
  } else if (type === 'recharge-history') {
    typeParam = 'add,adjust';
  }

  const { data } = useGetUserTransactionByIdQuery({
    id: slug,
    type: `?type=${typeParam}`
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
