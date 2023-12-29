import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import TableComponent from 'src/components/Table';
import { PaginationAndSort } from 'src/components/Table/tableType';
import { Transactions } from 'src/models';
import { useGetUserTransactionByIdQuery } from 'src/services/transactionService';
import { formatToISOString, onSortTable } from 'src/utils';
import UserTable from './TransactionTypeTable';

interface TransactionPagination extends PaginationAndSort {
  type: string[];
  status: string;
  dateFrom: string;
  dateTo: string;
}

const title = 'title.transactions-management';
const breadcrumbs = [
  {
    link: '/dashboards',
    name: 'title.dashboard'
  },
  {
    name: title
  }
];

const TransactionManagement = (): JSX.Element => {
  const { slug, type } = useParams();

  let typeParam;
  if (type === 'betting-history') {
    typeParam = 'bet,win,cancel';
  } else if (type === 'recharge-history') {
    typeParam = 'agent.add_balance,user.add_balance,deposit,withdraw';
  } else {
    typeParam = '';
  }

  const [searchParams] = useSearchParams();
  const { tableBody, tableHeader, tableFilter } = UserTable();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<Transactions[]>([]);
  const [pagination, setPagination] = useState<TransactionPagination>({
    page: 0,
    size: 10,
    status: '',
    totalPage: 1,
    totalItems: 10,
    sortBy: -1,
    search: '',
    sortDirection: 'asc',
    type: [typeParam],
    dateFrom: '',
    dateTo: ''
  });

  const { data: transactionData, isFetching } = useGetUserTransactionByIdQuery(
    {
      id: slug,
      ...pagination
    },
    { refetchOnMountOrArgChange: true }
  );

  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search);
    const type = queryParameters.get('type');
    if (type === 'agent.add_balance') {
      setPagination({
        ...pagination,
        type: [...pagination.type],
        status: 'pending'
      });
    }
    if (searchParams.get('type') === 'charging') {
      setPagination({
        ...pagination,
        type: [...pagination.type, 'agent.add_balance', 'user.add_balance']
      });
    }
  }, []);

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

  return (
    <>
      <TableComponent
        title={title}
        data={data}
        totalItems={transactionData?.data.totalItems}
        tableHeader={tableHeader}
        tableBody={tableBody}
        headerTitle={title}
        breadcrumbs={breadcrumbs}
        isLoading={isFetching}
        pagination={pagination}
        onPagination={setPagination}
        isShowBulkActions={false}
        tableFilter={tableFilter({
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
          },
          type: {
            value: pagination.type,
            onChange: (value: string[]) =>
              setPagination({
                ...pagination,
                type: Array.from(new Set(value))
              })
          },
          status: {
            value: pagination.status,
            onChange: (value: string) =>
              setPagination({ ...pagination, status: value })
          }
        })}
      />
    </>
  );
};

export default TransactionManagement;
