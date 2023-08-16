import { useEffect, useState } from 'react';
import TableComponent from 'src/components/Table';
import { PaginationAndSort } from 'src/components/Table/tableType';
import { Transactions } from 'src/models';
import {
  useGetTransactionByIdMutation,
  useGetTransactionQuery
} from 'src/services/transactionService';
import { formatToISOString, onSortTable } from 'src/utils';
import { useModal, useToast } from 'src/utils/hooks';
import TransactionModal from './TransactionModal';
import UserTable from './TransactionTable';

interface TransactionPagination extends PaginationAndSort {
  type: string;
  dateFrom: string;
  dateTo: string;
}

const pageName = 'Transactions Management';
const TransactionManagement = (): JSX.Element => {
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
  const [data, setData] = useState<Transactions[]>([]);
  const [detail, setDetail] = useState<Transactions>();
  const [pagination, setPagination] = useState<TransactionPagination>({
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

  const [getTransactionDetail] = useGetTransactionByIdMutation();

  const {
    data: transactionData,
    isFetching,
    refetch
  } = useGetTransactionQuery(
    {
      id: 1,
      page: pagination.page,
      size: pagination.size,
      search: pagination.search,
      dateFrom: pagination.dateFrom,
      dateTo: pagination.dateTo,
      type: pagination.type
    },
    { refetchOnMountOrArgChange: true }
  );

  useEffect(() => {
    if (transactionData) {
      setData(() =>
        onSortTable(
          transactionData.data.data,
          tableHeader[pagination.sortBy]?.name,
          pagination.sortDirection
        )
      );
    }
  }, [transactionData, pagination.sortBy, pagination.sortDirection]);

  const onAdd = () => {
    show();
    setDetail(null);
  };
  const onUpdate = async (value: string) => {
    try {
      const response = await getTransactionDetail({
        id: Number(value)
      }).unwrap();
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
        totalItems={transactionData?.data.totalItems}
        tableHeader={tableHeader}
        tableBody={tableBody}
        headerTitle={pageName}
        breadcrumbs={breadcrumbs}
        onOpenModal={onAdd}
        isLoading={isFetching}
        onUpdate={onUpdate}
        pagination={pagination}
        onPagination={setPagination}
        tableFilter={tableFilter({
          type: {
            value: pagination.type,
            onChange: (value) => setPagination({ ...pagination, type: value })
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
      <TransactionModal
        open={visible}
        detail={detail}
        onClose={hide}
        refetch={refetch}
      />
    </>
  );
};

export default TransactionManagement;
