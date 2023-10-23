import { SelectProps } from '@mui/material';
import { useEffect, useState } from 'react';
import { Select } from 'src/components/MUIComponents/';
import { User } from 'src/models';
import { useGetAgentsQuery } from 'src/services/agentService';
import useDebounce from 'src/utils/hooks/useDebounce';

interface Options {
  id: string | number;
  name: string;
  value: string | number;
}

const formatAgents = (data: User[]): Options[] =>
  (data || []).map((item) => ({
    id: item.id,
    name: item.name,
    value: item.id
  }));
const formatParent = (data: Options): Options => ({
  id: data.id,
  name: data.name,
  value: data.value
});
interface AgentInfinityProps extends SelectProps {
  control?: unknown;
  name?: string;
  parent?: Options;
  label?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any;
}

const AgentInfinity = ({
  control,
  name,
  parent,
  label = 'Agents',
  errors,
  ...props
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
  const [selected, setSelected] = useState<Options>({
    id: '',
    name: '',
    value: ''
  });

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
  }, [debouncedSearchTerm, parent]);

  useEffect(() => {
    if (parent) {
      return setAgent((prev) => {
        const newArr = [...prev, ...formatAgents(data?.data?.data)].filter(
          (item) => Number(item.id) !== 1
        );
        newArr.unshift(formatParent(parent));
        return newArr;
      });
    }
    return setAgent((prev) => [...prev, ...formatAgents(data?.data.data)]);
  }, [data, parent]);

  useEffect(() => {
    if (selected.id) {
      setAgent((prev: Options[]) => {
        const newArr = prev.filter(
          (item) => Number(item.id) !== Number(selected.id)
        );
        newArr.unshift(selected);
        return newArr;
      });
    }
  }, [selected, data]);

  return (
    <Select
      onScroll={loadMoreItems}
      name={name}
      label={label}
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
      searchTerm={searchTerm}
      errors={errors}
      setSelected={setSelected}
      {...props}
    />
  );
};

export default AgentInfinity;
