import { useEffect, useState } from 'react';
import TableComponent from 'src/components/Table';
import { PaginationAndSort } from 'src/components/Table/tableType';
import {
  useDeleteCurrencyMutation,
  useGetCurrencyByIdMutation,
  useGetCurrenciesQuery
} from 'src/services/currencyService';
import { formatToISOString, onSortTable } from 'src/utils';
import { useModal, useToast } from 'src/utils/hooks';
import CurrencyModal from './CurrencyModal';
import CurrencyTable from './CurrencyTable';

interface CurrencyPagination extends PaginationAndSort {
  status: string;
  dateFrom: string;
  dateTo: string;
}

const CurrencyManagements = (): JSX.Element => {
  const breadcrumbs = [
    {
      link: '/dashboards',
      name: 'Dashboards'
    },
    {
      name: 'Currency managements'
    }
  ];
  const { visible, hide, show } = useModal();
  const [detail, setDetail] = useState();
  const { notify, message } = useToast();
  const [data, setData] = useState<unknown[]>([]);
  const [pagination, setPagination] = useState<CurrencyPagination>({
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
  const { tableBody, tableHeader, tableFilter } = CurrencyTable();

  const {
    data: gameData,
    isFetching,
    refetch
  } = useGetCurrenciesQuery(
    {
      page: pagination.page,
      size: pagination.size,
      search: pagination.search
    },
    { refetchOnMountOrArgChange: true }
  );

  useEffect(() => {
    if (gameData && gameData?.length > 0) {
      setData(() =>
        onSortTable(
          gameData,
          tableHeader[pagination.sortBy]?.name,
          pagination.sortDirection
        )
      );
    }
  }, [gameData, pagination]);

  const [deleteGame, { isLoading: isLoadingDelete }] =
    useDeleteCurrencyMutation();
  const [getGameDetail, { isLoading }] = useGetCurrencyByIdMutation();

  const onAdd = () => {
    show();
    setDetail(null);
  };

  const onDelete = async (value: string) => {
    try {
      await deleteGame(value).unwrap();
      notify({ message: message.DELETED });
      refetch();
    } catch (error) {
      notify({ message: message.ERROR, type: 'error' });
    }
  };

  const onUpdate = async (value: string) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await getGameDetail(value);
      show();
      setDetail(response.data);
    } catch (error) {
      notify({ message: message.ERROR, type: 'error' });
    }
  };

  return (
    <>
      <TableComponent
        title="Currency Management"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data={data as any}
        tableHeader={tableHeader}
        tableBody={tableBody}
        headerTitle="Currency Management"
        breadcrumbs={breadcrumbs}
        onOpenModal={onAdd}
        isLoading={isFetching || isLoading || isLoadingDelete}
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
      <CurrencyModal
        open={visible}
        onClose={hide}
        refetch={refetch}
        hide={hide}
        detail={detail}
      />
    </>
  );
};

export default CurrencyManagements;