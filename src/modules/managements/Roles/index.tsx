import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/app/store';
import TableComponent from 'src/components/Table';
import { Permissions } from 'src/models';
import {
  useDeleteRolesMutation,
  useRolesQuery
} from 'src/services/commonServices';
import { onSortTable } from 'src/utils';
import { useToast } from 'src/utils/hooks';
import RoleModal from './RoleModal';
import UserTable from './RoleTable';

const pageName = 'title.agents-management';
const checkPermission = (permissionArray: string[], permission: string) =>
  permissionArray?.includes(permission);

const breadcrumbs = [
  {
    link: '/dashboards',
    name: 'title.dashboard'
  },
  {
    name: pageName
  }
];
const RolesManagement = (): JSX.Element => {
  const { notify, message } = useToast();
  const { tableBody, tableHeader } = UserTable();

  const [data, setData] = useState<Permissions[]>([]);
  const [open, setOpen] = useState<{ id: number; open: boolean }>({
    id: 0,
    open: false
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [pagination, setPagination] = useState<any>({
    sortBy: -1,
    page: 0,
    size: 10
  });
  const { permissions } = useSelector((state: RootState) => state.common);

  const [deleteRole, { isLoading: isLoadingDelete }] = useDeleteRolesMutation();

  const {
    data: rolesData,
    isFetching,
    refetch
  } = useRolesQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
      skip: !checkPermission(permissions, 'get')
    }
  );

  useEffect(() => {
    if (rolesData) {
      setData(() =>
        onSortTable(
          rolesData.data,
          tableHeader[pagination.sortBy]?.name,
          pagination.sortDirection
        )
      );
    }
  }, [rolesData, pagination]);

  const onAdd = () => {
    setOpen({ id: 0, open: true });
  };

  const onDelete = async (id: string) => {
    try {
      await deleteRole({ id: Number(id) }).unwrap();
      notify({ message: message.DELETED });
      refetch();
    } catch (error) {
      notify({ message: message.ERROR, type: 'error' });
    }
  };

  const onUpdate = async (value) => {
    setOpen({ id: value, open: true });
  };
  console.log(data);

  return (
    <>
      <TableComponent
        title={pageName}
        data={data}
        totalItems={rolesData?.data.length}
        tableHeader={tableHeader}
        tableBody={tableBody}
        headerTitle={pageName}
        breadcrumbs={breadcrumbs}
        onOpenModal={checkPermission(permissions, 'create') && onAdd}
        isLoading={isFetching || isLoadingDelete}
        onDelete={checkPermission(permissions, 'delete') && onDelete}
        onUpdate={checkPermission(permissions, 'update') && onUpdate}
        pagination={pagination}
        onPagination={setPagination}
      />
      <RoleModal
        open={open}
        onClose={() => setOpen((prev) => ({ ...prev, open: false }))}
        refetch={refetch}
        hide={() => setOpen((prev) => ({ ...prev, open: false }))}
      />
    </>
  );
};

export default RolesManagement;
