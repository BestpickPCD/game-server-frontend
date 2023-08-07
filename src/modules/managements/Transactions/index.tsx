import { useEffect, useState } from 'react';
import TableComponent from 'src/components/Table';
import { PaginationAndSort } from 'src/components/Table/tableType';
import { Agent } from 'src/models';
import {
  useDeleteAgentMutation,
  useGetAgentByIdMutation
} from 'src/services/agentService';
import { useGetTransactionQuery } from 'src/services/transactionService';
import { formatToISOString, onSortTable } from 'src/utils';
import { useModal, useToast } from 'src/utils/hooks';
import UserModal from './AgentModal';
import UserTable from './AgentTable';

interface UsersPagination extends PaginationAndSort {
  status: string;
  dateFrom: string;
  dateTo: string;
}

const pageName = 'Agents Management';
const AgentsManagement = (): JSX.Element => {
  const breadcrumbs = [
    {
      link: '/dashboards',
      name: 'Dashboards'
    },
    {
      name: pageName
    }
  ];
  const { visible, hide, show } = useModal();
  const { notify, message } = useToast();
  const { tableBody, tableHeader, tableFilter } = UserTable();

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

  const [getAgentDetail] = useGetAgentByIdMutation();
  const [deleteAgent, { isLoading: isLoadingDelete }] =
    useDeleteAgentMutation();

  const {
    data: agentData,
    isFetching,
    refetch
  } = useGetTransactionQuery(
    {
      id: 1,
      page: pagination.page,
      size: pagination.size,
      search: pagination.search,
      dateFrom: pagination.dateFrom,
      dateTo: pagination.dateTo
    },
    { refetchOnMountOrArgChange: true }
  );

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
  }, [agentData, pagination.sortBy, pagination.sortDirection]);

  const onAdd = () => {
    show();
    setDetail(null);
  };

  const onDelete = async (id: string) => {
    try {
      await deleteAgent({ id: Number(id) }).unwrap();
      notify({ message: message.DELETED });
      refetch();
    } catch (error) {
      notify({ message: message.ERROR, type: 'error' });
    }
  };

  const onUpdate = async (value: string) => {
    try {
      const response = await getAgentDetail({ id: Number(value) }).unwrap();
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

export default AgentsManagement;
