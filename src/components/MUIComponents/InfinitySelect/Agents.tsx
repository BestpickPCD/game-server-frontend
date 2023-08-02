import { useEffect, useRef, useState } from 'react';
import { Select } from 'src/components/MUIComponents/';
import { Agent } from 'src/models';
import { useGetAgentsQuery } from 'src/services/agentService';
import useDebounce from 'src/utils/hooks/useDebounce';

interface Options {
  id: string | number;
  name: string;
  value: string | number;
}

const formatAgents = (data: Agent[]): Options[] =>
  data.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.id
  }));
const formatParent = (data): Options => ({
  id: data.parentAgentId,
  name: data.name,
  value: data.parentAgentId
});
interface AgentInfinityProps {
  control?: unknown;
  name?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parent?: any;
}

const AgentInfinity = ({
  control,
  name,
  parent
}: AgentInfinityProps): JSX.Element => {
  const searchTermRef = useRef('');
  const [pagination, setPagination] = useState({
    size: 20,
    page: 0,
    search: '',
    totalItems: 0,
    id: 1
  });
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 500);
  const [agent, setAgent] = useState<Options[]>([]);

  useEffect(() => {
    setSearchTerm(debouncedSearchTerm);
    setPagination((prev) => ({ ...prev, search: debouncedSearchTerm }));
  }, [debouncedSearchTerm]);

  const { data, isFetching } = useGetAgentsQuery(
    {
      size: pagination.size,
      page: pagination.page,
      search: pagination.search,
      id: 1
    },
    {
      refetchOnMountOrArgChange: true,
      skip:
        !!pagination.totalItems &&
        pagination.page * pagination.size > pagination.totalItems
    }
  );

  function loadMoreItems(event: React.UIEvent<HTMLDivElement>) {
    const element = event.target as HTMLDivElement;
    if (element.scrollHeight === element.scrollTop + element.clientHeight) {
      if ((pagination.page + 1) * pagination.size < pagination.totalItems) {
        return setPagination({
          page: pagination.page + 1,
          size: 20,
          search: pagination.search,
          totalItems: pagination.totalItems,
          id: 1
        });
      }
    }
  }

  useEffect(() => {
    if (!searchTerm) {
      if (data?.data && data?.data.data.length > 0) {
        if (pagination.page === 0) {
          setPagination({
            page: data.data.page,
            size: data.data.size,
            search: '',
            totalItems: data.data.totalItems,
            id: 1
          });
          return setAgent([
            formatParent(parent),
            ...formatAgents(data?.data.data).filter(
              (item) => Number(item.id) !== Number(formatParent(parent).id)
            )
          ]);
        } else if (pagination.page > 0) {
          if ((pagination.page + 1) * pagination.size < pagination.totalItems) {
            return setAgent((prev) => [
              ...prev,
              ...formatAgents(data?.data.data).filter(
                (item) => Number(item.id) !== Number(formatParent(parent).id)
              )
            ]);
          }
        } else {
          return setAgent([]);
        }
      }
    }
    if (searchTermRef.current === searchTerm) {
      if (data?.data && data?.data.data.length > 0) {
        if (pagination.page === 0) {
          setPagination({
            page: 0,
            size: 20,
            search: searchTerm,
            totalItems: data.data.totalItems,
            id: 1
          });
          return setAgent([...formatAgents(data?.data.data)]);
        } else if (pagination.page > 0) {
          setPagination({
            page: data.data.page,
            size: data.data.size,
            search: searchTerm,
            totalItems: data.data.totalItems,
            id: 1
          });
          return setAgent((prev) => [
            ...prev,
            ...formatAgents(data?.data.data)
          ]);
        }
        return setAgent([]);
      }
    }

    // Update the oldSearchTermRef with the current searchTerm
  }, [data, searchTerm, parent]);

  useEffect(() => {
    if (searchTermRef.current !== searchTerm) {
      setAgent([]);
      setPagination((prev) => ({
        ...prev,
        page: 0,
        totalItems: 0
      }));
    }
    searchTermRef.current = searchTerm;
  }, [searchTerm]);

  return (
    <Select
      onScroll={loadMoreItems}
      name={name}
      label={'Agents'}
      options={agent}
      control={control}
      MenuProps={{
        className: 'infinity-select',
        autoFocus: false,
        PaperProps: {
          onScroll: loadMoreItems
        },
        style: {
          maxHeight: 500,
          padding: 0
        }
      }}
      isFetching={isFetching}
      onSearch={setSearchTerm}
    />
  );
};

export default AgentInfinity;
