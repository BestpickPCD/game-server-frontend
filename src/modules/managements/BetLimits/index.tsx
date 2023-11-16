import { LoadingButton } from '@mui/lab';
import { Box, Dialog, Grid, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { RootState } from 'src/app/store';
import TableComponent from 'src/components/Table';
import { PaginationAndSort } from 'src/components/Table/tableType';
import { TransactionLimit } from 'src/models';
import {
  useDeleteTransactionLimitMutation,
  useGetTransactionLimitByIdMutation,
  useGetTransactionLimitQuery
} from 'src/services/transactionService';
import { useCreateTransactionMutation } from 'src/services/transactionService';
import { formatToISOString, onSortTable } from 'src/utils';
import { useModal, useToast } from 'src/utils/hooks';
import UserModal from './BetLimitModal';
import UserTable from './BetLimitTable';
import { FormattedMessage } from 'react-intl';

interface UsersPagination extends PaginationAndSort {
  page: number;
  type: string;
  dateFrom: string;
  dateTo: string;
}

const pageName = 'title.bet-set';
const checkPermission = (permissionArray: string[], permission: string) =>
  permissionArray?.includes(permission);

const BetLimitManagement = (): JSX.Element => {
  const breadcrumbs = [
    {
      link: '/dashboards',
      name: 'title.dashboard'
    },
    {
      name: pageName
    }
  ];
  const { visible, hide, show } = useModal();
  const { reset } = useForm();
  const { notify, message } = useToast();
  const {
    tableBody,
    tableHeader,
    tableFilter,
    visible: visibleTransaction,
    toggle: toggleTransaction,
    user
  } = UserTable();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<TransactionLimit[]>([]);
  const [detail, setDetail] = useState<TransactionLimit>();
  const [pagination, setPagination] = useState<UsersPagination>({
    page: 0,
    size: 10,
    totalPage: 1,
    totalItems: 10,
    sortBy: -1,
    search: '',
    sortDirection: 'asc',
    type: '',
    dateFrom: '',
    dateTo: ''
  });
  const { permissions } = useSelector((state: RootState) => state.common);

  const [getBetLimitDetail] = useGetTransactionLimitByIdMutation();
  const [deleteBetLimit, { isLoading: isLoadingDelete }] =
    useDeleteTransactionLimitMutation();
  const [createTransaction, { isLoading: isLoadingCreate }] =
    useCreateTransactionMutation({});
  const {
    data: betLimitData,
    isFetching,
    refetch
  } = useGetTransactionLimitQuery(
    // {
    //   page: pagination.page,
    //   size: pagination.size,
    //   search: pagination.search,
    //   type: pagination.type
    // },
    {
      refetchOnMountOrArgChange: true,
      skip: !checkPermission(permissions, 'get')
    }
  );

  const [formData, setFormData] = useState({
    receiverUsername: '',
    amount: 0,
    type: 'add',
    note: ''
  });

  useEffect(() => {
    formData.receiverUsername = user?.username;
    setFormData((prev) => ({ ...prev, status: 'success' }));
  }, [user]);

  useEffect(() => {
    if (betLimitData) {
      setData(() =>
        onSortTable(
          betLimitData.data,
          tableHeader[pagination.sortBy]?.name,
          pagination.sortDirection
        )
      );
    }
  }, [betLimitData, pagination]);

  const onAdd = () => {
    show();
    setDetail(null);
  };

  const onDelete = async (id: string) => {
    try {
      await deleteBetLimit({ id: Number(id) }).unwrap();
      notify({ message: message.DELETED });
      refetch();
    } catch (error) {
      notify({ message: message.ERROR, type: 'error' });
    }
  };

  const onUpdate = async (value: string) => {
    try {
      const response = await getBetLimitDetail({ id: Number(value) }).unwrap();
      show();
      setDetail(response.data);
    } catch (error) {
      notify({ message: message.ERROR, type: 'error' });
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await createTransaction(formData).unwrap();
      if (response) {
        toggleTransaction();
        notify({ message: message.UPDATED });
        refetch();
        hide();
        reset();
      }
    } catch (error) {
      notify({ message: message.ERROR, type: 'error' });
    }
  };

  const onInput = (value, inputName) => {
    setFormData((prev) => ({ ...prev, [`${inputName}`]: value }));
  };

  return (
    <>
      <TableComponent
        title={pageName}
        data={data}
        totalItems={betLimitData?.data.totalItems}
        tableHeader={tableHeader}
        tableBody={tableBody}
        headerTitle={pageName}
        breadcrumbs={breadcrumbs}
        onOpenModal={onAdd}
        isLoading={isFetching || isLoadingDelete}
        onDelete={onDelete}
        onUpdate={onUpdate}
        pagination={pagination}
        onPagination={setPagination}
        tableFilter={tableFilter({
          type: {
            value: pagination.type,
            onChange: (value) => setPagination({ ...pagination, type: value })
          }
        })}
      />
      <UserModal
        open={visible}
        detail={detail}
        onClose={hide}
        refetch={refetch}
        hide={hide}
      />
      <Dialog open={visibleTransaction} onClose={toggleTransaction}>
        <Box component="form" padding={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography gutterBottom variant="h5" component="div">
                <FormattedMessage id="title.add-transaction" />
              </Typography>
            </Grid>
            <Box
              justifyContent="center"
              display="flex"
              width={'100%'}
              paddingLeft="18px"
              gap="12px"
              marginTop="8px"
            >
              <TextField
                label="Insert the amount here"
                variant="outlined"
                fullWidth
                onInput={(event) =>
                  onInput((event.target as HTMLInputElement).value, 'amount')
                }
              />
              <LoadingButton
                loading={isLoadingCreate}
                onClick={handleSubmit}
                size="large"
                variant="contained"
                sx={{ width: 120 }}
              >
                <Box>
                  <span>+ &nbsp;</span>
                  <span>Add</span>
                </Box>
              </LoadingButton>
            </Box>
          </Grid>
        </Box>
      </Dialog>
    </>
  );
};

export default BetLimitManagement;
