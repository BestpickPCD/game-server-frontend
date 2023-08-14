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

interface UsersPagination extends PaginationAndSort {
  status: string;
  dateFrom: string;
  dateTo: string;
}
const UsersManagement = (): JSX.Element => {
  const breadcrumbs = [
    {
      link: '/dashboards',
      name: 'Dashboards'
    },
    {
      name: 'User managements'
    }
  ];
  const { visible, hide, show } = useModal();
  const { notify, message } = useToast();
  const { tableBody, tableHeader, tableFilter } = UserTable();

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

  return (
    <>
      <TableComponent
        title="User Management"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data={data as any}
        totalItems={userData?.data.totalItems}
        tableHeader={tableHeader}
        tableBody={tableBody}
        headerTitle="User Management"
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
                dateFrom: formatToISOString(value)
              })
          },
          dateTo: {
            value: pagination.dateTo,
            onChange: (value) =>
              setPagination({ ...pagination, dateTo: formatToISOString(value) })
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
    </>
  );
};

export default UsersManagement;
