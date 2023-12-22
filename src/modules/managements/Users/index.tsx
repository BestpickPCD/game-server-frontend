import { LoadingButton } from '@mui/lab';
import { Box, Dialog, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from 'src/app/store';
import TableComponent from 'src/components/Table';
import { PaginationAndSort } from 'src/components/Table/tableType';
import { User } from 'src/models';
import { useCreateTransactionMutation } from 'src/services/transactionService';
import {
  useDeleteUserMutation,
  useGetUserByIdMutation,
  useGetUsersQuery
} from 'src/services/userService';
import { formatToISOString, onSortTable } from 'src/utils';
import { useModal, useToast } from 'src/utils/hooks';
import UserModal from './UserModal';
import UserTable from './UserTable';
import { useSearchParams } from 'react-router-dom';

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
  const [searchParams] = useSearchParams();
  const { visible, hide, show } = useModal();
  const { notify, message } = useToast();
  const { reset } = useForm();
  const {
    tableBody,
    tableHeader,
    tableFilter,
    visible: visibleTransaction,
    toggle: toggleTransaction,
    user
  } = UserTable();

  const [formData, setFormData] = useState({
    userId: '',
    amount: 0,
    type: 'user.add_balance',
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

  const checkPermission = (permissionArray: string[], permission: string) =>
    permissionArray?.includes(permission);
  const { permissions } = useSelector((state: RootState) => state.common);

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
      const searchParamsId = searchParams.get('parentId');
      if (searchParamsId) {
        const filterData = userData.data.data.filter(
          (item) => item.agentId === searchParamsId
        );
        setData(() =>
          onSortTable(
            filterData,
            tableHeader[pagination.sortBy]?.name,
            pagination.sortDirection
          )
        );
      } else {
        setData(() =>
          onSortTable(
            userData.data.data,
            tableHeader[pagination.sortBy]?.name,
            pagination.sortDirection
          )
        );
      }
    }
  }, [userData, pagination.sortBy, pagination.sortDirection, searchParams]);

  useEffect(() => {
    user &&
      setFormData((prev) => ({
        ...prev,
        userId: user?.id,
        amount: Number(prev.amount)
      }));
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
      notify({ message: error?.data?.message || message.ERROR, type: 'error' });
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
        notify({ message: message.UPDATED });
        refetch();
        hide();
        reset();
      }
    } catch (error) {
      notify({ message: error?.data?.message || message.ERROR, type: 'error' });
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
        isLoading={isFetching || isLoadingDelete}
        onDelete={onDelete}
        onUpdate={onUpdate}
        pagination={pagination}
        onPagination={setPagination}
        onOpenModal={checkPermission(permissions, 'create') && onAdd}
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
        <Box component="form" padding={2} width="400px">
          <Typography gutterBottom variant="h5" component="div">
            Add transaction
          </Typography>
          <Box display="flex" alignItems="center" width="100%" gap={2} pt={2}>
            <TextField
              label="Insert the amount here"
              variant="outlined"
              fullWidth
              onInput={(event) =>
                onInput(
                  Number((event.target as HTMLInputElement).value),
                  'amount'
                )
              }
            />
            <LoadingButton
              loading={isLoadingCreate}
              onClick={handleSubmit}
              size="large"
              variant="contained"
            >
              <Typography whiteSpace="nowrap">+ Add</Typography>
            </LoadingButton>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default UsersManagement;
