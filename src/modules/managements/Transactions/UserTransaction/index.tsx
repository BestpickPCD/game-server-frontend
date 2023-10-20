import { styled } from '@mui/material';
import { Container } from '@mui/system';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useParams } from 'react-router';
import { useGetUserTransactionByIdQuery } from 'src/services/transactionService';

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

  const MyCustomNoRowsOverlay = () => (
    <div>12312312h3h123h1232121123ljbkj123123123123jb12k321</div>
  );

  return (
    <Container sx={{ marginTop: 4 }}>
      <DataTable
        rows={[]}
        slots={{
          noResultsOverlay: MyCustomNoRowsOverlay
        }}
        columns={columns}
        // initialState={{
        //   pagination: {
        //     paginationModel: { page: 0, pageSize: 5 }
        //   }
        // }}
        // pageSizeOptions={[5, 10]}
        // checkboxSelection
      />
    </Container>
  );
}
const DataTable = styled(DataGrid)(({ theme }) => ({
  '.MuiDataGrid-columnHeaderTitleContainer': {
    '&:active, &:focus, &:focus-within, &:focus-visible': {
      border: 'none !important',
      outline: 'none !important'
    }
  },
  '.MuiDataGrid-columnHeader': {
    outline: 'none !important'
  },
  '.MuiDataGrid-virtualScroller': {
    minHeight: '50px'
  }
}));
