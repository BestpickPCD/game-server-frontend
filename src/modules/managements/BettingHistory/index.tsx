/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import TableComponent from 'src/components/Table';
import { Transactions } from 'src/models';
import { useGetBettingListQuery } from 'src/services/gameService';
import { formatToISOString, onSortTable } from 'src/utils';
import { useModal } from 'src/utils/hooks';
import TransactionModal from './TransactionModal';
import TransactionTable from './TransactionTable';

export interface PaginationAndSort {
  page: number;
  size: number;
  totalPage: number;
  totalItems: number;
  search: string;
  sortBy: number;
  sortDirection: 'asc' | 'desc';
}

interface TransactionPagination extends PaginationAndSort {
  type: string;
  dateFrom: string;
  dateTo: string;
}

const title = 'title.betting-history';
const TransactionManagement = (): JSX.Element => {
  const { tableBody, tableHeader, tableFilter } = TransactionTable();
  const { visible, hide, show } = useModal();

  const [data, setData] = useState<Transactions[]>([]);
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

  const {
    data: transactionData,
    isFetching,
    refetch
  } = useGetBettingListQuery(
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
          tableHeader[pagination.sortBy]?.name || '',
          pagination.sortDirection
        )
      );
    }
  }, [transactionData, pagination.sortBy, pagination.sortDirection]);

  const onCreate = () => {
    show();
  };
  return (
    <>
      <TableComponent
        data={data}
        totalItems={transactionData?.data.totalItems}
        tableHeader={tableHeader}
        tableBody={tableBody}
        breadcrumbs={[]}
        isLoading={isFetching}
        pagination={pagination}
        onPagination={setPagination}
        // onOpenModal={onCreate}
        tableFilter={tableFilter({
          type: {
            value: pagination.type,
            onChange: (value: any) =>
              setPagination({ ...pagination, type: value })
          },
          dateFrom: {
            value: pagination.dateFrom,
            onChange: (value: any) =>
              setPagination({
                ...pagination,
                dateFrom: formatToISOString(value, 'from')
              })
          },
          dateTo: {
            value: pagination.dateTo,
            onChange: (value: any) =>
              setPagination({
                ...pagination,
                dateTo: formatToISOString(value, 'to')
              })
          }
        })}
        title={title}
        headerTitle={title}
      />
      {/* <TransactionModal open={visible} onClose={hide} refetch={refetch} /> */}
    </>
  );
};

export default TransactionManagement;
