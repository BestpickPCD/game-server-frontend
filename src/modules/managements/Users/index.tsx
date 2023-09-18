import { useEffect, useState } from 'react';
import TableComponent from 'src/components/Table';
import {
  useDeleteUserMutation,
  useGetUserByIdMutation
} from 'src/services/userService';
import { useGetUsersQuery } from 'src/services/userService';
import { useModal, useToast } from 'src/utils/hooks';
import UserModal from './UserModal';
import UserTable from './UserTable';
import { PaginationAndSort } from 'src/components/Table/tableType';
import { formatToISOString, onSortTable } from 'src/utils';
import { User } from 'src/models';
import { Box, Dialog, Grid, TextField, Typography } from '@mui/material';
import { useCreateTransactionMutation } from 'src/services/transactionService';
import { LoadingButton } from '@mui/lab';

interface UsersPagination extends PaginationAndSort {
  status: string;
  dateFrom: string;
  dateTo: string;
  isSubmit?: boolean;
  setIsSubmit?: () => void;
}

const title = 'title.users-management';
const UsersManagement = (): JSX.Element => {
  const breadcrumbs = [
    {
      link: '/dashboards',
      name: 'title.dashboard'
    },
    {
      name: title
    }
  ];
  const { visible, hide, show } = useModal();
  const { notify, message } = useToast();
  const {
    tableBody,
    tableHeader,
    tableFilter,
    visible: visibleTransaction,
    toggle: toggleTransaction,
    user
  } = UserTable();

  const [formData, setFormData] = useState({
    receiverUsername: '',
    amount: 0,
    type: 'add',
    note: '',
    status: 'pending'
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[]>([]);
  const [detail, setDetail] = useState<User>();
  const [pagination, setPagination] = useState<UsersPagination>({
    page: 0,
    size: 10,
    totalPage: 1,
    totalItems: 10,
    sortBy: -1,
    search: '',
    sortDirection: 'asc',
    status: '',
    dateFrom: '',
    dateTo: ''
  });

  const [getUserDetail] = useGetUserByIdMutation();
  const [deleteUser, { isLoading: isLoadingDelete }] = useDeleteUserMutation();
  const [createTransaction, { isLoading: isLoadingCreate }] =
    useCreateTransactionMutation();

  const {
    data: userData,
    isFetching,
    refetch
  } = useGetUsersQuery(
    {
      page: pagination.page,
      size: pagination.size,
      search: pagination.search,
      dateFrom: pagination.dateFrom,
      dateTo: pagination.dateTo
    },
    { refetchOnMountOrArgChange: true }
  );

  useEffect(() => {
    if (userData) {
      setData(() =>
        onSortTable(
          userData.data.data,
          tableHeader[pagination.sortBy]?.name,
          pagination.sortDirection
        )
      );
    }
  }, [userData, pagination.sortBy, pagination.sortDirection]);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, receiverUsername: user?.username }));
    setFormData((prev) => ({ ...prev, status: 'success' }));
  }, [user]);

  const onAdd = () => {
    show();
    setDetail(null);
  };

  const onDelete = async (value: string) => {
    try {
      await deleteUser(value).unwrap();
      notify({ message: message.DELETED });
      refetch();
    } catch (error) {
      notify({ message: message.ERROR, type: 'error' });
    }
  };

  const onUpdate = async (value: string) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = await getUserDetail(value).unwrap();
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
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onInput = (value, inputName) => {
    setFormData((prev) => ({ ...prev, [`${inputName}`]: value }));
  };

  return (
    <>
      <TableComponent
        title={title}
        data={data}
        totalItems={userData?.data.totalItems}
        tableHeader={tableHeader}
        tableBody={tableBody}
        headerTitle={title}
        breadcrumbs={breadcrumbs}
        onOpenModal={onAdd}
        isLoading={isFetching || isLoadingDelete}
        onDelete={onDelete}
        onUpdate={onUpdate}
        pagination={pagination}
        onPagination={setPagination}
        tableFilter={tableFilter({
          status: {
            value: pagination.status,
            onChange: (value) => setPagination({ ...pagination, status: value })
          },
          dateFrom: {
            value: pagination.dateFrom,
            onChange: (value) =>
              setPagination({
                ...pagination,
                dateFrom: formatToISOString(value, 'from')
              })
          },
          dateTo: {
            value: pagination.dateTo,
            onChange: (value) =>
              setPagination({
                ...pagination,
                dateTo: formatToISOString(value, 'to')
              })
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
                Add transaction
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                label="Insert the amount here"
                variant="outlined"
                fullWidth
                onInput={(event) =>
                  onInput((event.target as HTMLInputElement).value, 'amount')
                }
              />
            </Grid>
            <Grid item xs={4} sx={{ padding: 1 }}>
              <LoadingButton
                loading={isLoadingCreate}
                onClick={handleSubmit}
                size="large"
                variant="contained"
              >
                + Add
              </LoadingButton>
            </Grid>
          </Grid>
        </Box>
      </Dialog>
    </>
  );
};

export default UsersManagement;
