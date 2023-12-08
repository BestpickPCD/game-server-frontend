import { LoadingButton } from '@mui/lab';
import { Box, Dialog, Grid, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { RootState } from 'src/app/store';
import TableComponent from 'src/components/Table';
import { PaginationAndSort } from 'src/components/Table/tableType';
import { Agent } from 'src/models';
import {
  useDeleteAgentMutation,
  useGetAgentByIdMutation,
  useGetAgentsQuery
} from 'src/services/agentService';
import { formatToISOString, onSortTable } from 'src/utils';
import { useModal, useToast } from 'src/utils/hooks';
import AgentModal from './AgentModal';
import UserTable from './AgentTable';
import { FormattedMessage } from 'react-intl';
import ModalTransaction from './ModalTransaction';
import ModalVendor from './ModalVendor';

interface UsersPagination extends PaginationAndSort {
  status: string;
  dateFrom: string;
  dateTo: string;
}

const pageName = 'title.agents-management';
const checkPermission = (permissionArray: string[], permission: string) =>
  permissionArray?.includes(permission);

const AgentsManagement = (): JSX.Element => {
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
    user,
    dialogType
  } = UserTable();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<Agent[]>([]);
  const [detail, setDetail] = useState<Agent>();
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
  const { permissions } = useSelector((state: RootState) => state.common);

  const [getAgentDetail] = useGetAgentByIdMutation();
  const [deleteAgent, { isLoading: isLoadingDelete }] =
    useDeleteAgentMutation();
  const {
    data: agentData,
    isFetching,
    refetch
  } = useGetAgentsQuery(
    {
      id: 1,
      page: pagination.page,
      size: pagination.size,
      search: pagination.search,
      dateFrom: pagination.dateFrom,
      dateTo: pagination.dateTo
    },
    {
      refetchOnMountOrArgChange: true,
      skip: !checkPermission(permissions, 'get')
    }
  );

  const handleUpdateToReset = (toReset) => {
    if (toReset === true) {
      notify({ message: message.UPDATED });
      toggleTransaction();
      hide();
      refetch();
      reset();
    }
  };

  useEffect(() => {
    if (agentData) {
      setData(() =>
        onSortTable(
          agentData.data.data,
          tableHeader[pagination.sortBy]?.name,
          pagination.sortDirection
        )
      );
    }
  }, [agentData, pagination]);

  const onAdd = () => {
    show();
    setDetail(null);
  };

  const onDelete = async (id: string) => {
    try {
      await deleteAgent({ id }).unwrap();
      notify({ message: message.DELETED });
      refetch();
    } catch (error) {
      notify({ message: error.data.message || message.ERROR, type: 'error' });
    }
  };

  const onUpdate = async (value: string) => {
    try {
      const response = await getAgentDetail({ id: value }).unwrap();
      show();
      setDetail(response.data);
    } catch (error) {
      notify({ message: message.ERROR, type: 'error' });
    }
  };
  return (
    <>
      <TableComponent
        title={pageName}
        data={data}
        totalItems={agentData?.data.totalItems}
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
      <AgentModal
        open={visible}
        detail={detail}
        onClose={hide}
        refetch={refetch}
        hide={hide}
      />
      <Dialog open={visibleTransaction} onClose={toggleTransaction}>
        <Box component="form" padding={2}>
          {dialogType === 'transaction' ? (
            <ModalTransaction
              user={user}
              onUpdateToReset={handleUpdateToReset}
            />
          ) : (
            <ModalVendor user={user} onUpdateToReset={handleUpdateToReset} />
          )}
        </Box>
      </Dialog>
    </>
  );
};

export default AgentsManagement;
