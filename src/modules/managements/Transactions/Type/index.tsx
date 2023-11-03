import { Card, Container, Paper, TableContainer, styled } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import TableComponent from 'src/components/Table';
import { useParams } from 'react-router';
import { useGetUserTransactionByIdQuery } from 'src/services/transactionService';

const columns: GridColDef[] = [
  {
    field: 'username',
    headerName: 'Username',
    width: 200
  },
  { field: 'type', headerName: 'type', width: 200 },
  {
    field: 'agentUsername',
    headerName: 'Agent Username',
    width: 200
  },
  { field: 'status', headerName: 'status', width: 200 },
  { field: 'amount', headerName: 'amount', width: 200, type: 'number' }
];

let rows = [];
const showRows = async (data) => {
  const { data: rowData } = data 
  rows = rowData;
};

export default function name(): JSX.Element {
  const { slug, type } = useParams();

  let typeParam;
  if (type === 'betting-history') {
    typeParam = 'bet,win,cancel';
  } else if (type === 'recharge-history') {
    typeParam = 'agent.add_balance,user.add_balance,deposit,withdraw';
  } else {
    typeParam = '';
  }

  const { data } = useGetUserTransactionByIdQuery({
    id: slug,
    type: `?type=${typeParam}`
  });

  if (data) {
    showRows(data);
  }

  return (
    <Container sx={{ marginTop: 4 }}>
      <Card>
        <DataTable
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
      </Card>
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
