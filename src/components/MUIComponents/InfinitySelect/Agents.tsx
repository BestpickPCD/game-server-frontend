import { useEffect, useState } from 'react';
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
  (data || []).map((item) => ({
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
      refetchOnMountOrArgChange: true
    }
  );

  function loadMoreItems(event: React.UIEvent<HTMLDivElement>) {
    const element = event.target as HTMLDivElement;
    if (element.scrollHeight === element.scrollTop + element.clientHeight) {
      if ((data.data.page + 1) * data.data.size < data.data.totalItems) {
        return setPagination((prev) => ({
          ...prev,
          page: pagination.page + 1
        }));
      }
    }
  }

  useEffect(() => {
    setPagination({
      search: debouncedSearchTerm || '',
      id: 1,
      totalItems: 0,
      page: 0,
      size: 20
    });
    setAgent([]);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (parent) {
      return setAgent((prev) => {
        const newArr = [...prev, ...formatAgents(data?.data?.data)].filter(
          (item) => Number(item.id) !== Number(formatParent(parent).id)
        );
        return [formatParent(parent), ...newArr];
      });
    }
    return setAgent((prev) => [...prev, ...formatAgents(data?.data.data)]);
  }, [data, parent]);

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
