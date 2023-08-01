/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { Select } from 'src/components/MUIComponents/';
import { useGetAgentsQuery } from 'src/services/agentService';
import useDebounce from 'src/utils/hooks/useDebounce';

const formatAgent = (data: any[]) =>
  data.map((item) => ({
    id: item.id,
    label: item.username,
    value: item.id
  }));

interface AgentInfinityProps {
  control?: any;
  name?: string;
}

const AgentInfinity = ({ control, name }: AgentInfinityProps): JSX.Element => {
  const [pagination, setPagination] = useState({
    size: 3,
    page: 0,
    search: '',
    totalItems: 0,
    id: 1
  });
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 500);

  useEffect(() => {
    setPagination({
      ...pagination,
      search: debouncedSearchTerm
    });
  }, [debouncedSearchTerm]);

  const [agent, setAgent] = useState<any[]>([]);

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

  function loadMoreItems(event: React.UIEvent<HTMLDivElement, UIEvent>) {
    const element = event.target as HTMLDivElement;
    if (element.scrollHeight === element.scrollTop + element.clientHeight) {
      if ((pagination.page + 1) * pagination.size < pagination.totalItems) {
        return setPagination({
          page: pagination.page + 1,
          size: 3,
          search: pagination.search,
          totalItems: pagination.totalItems,
          id: 1
        });
      }
      return;
    }
  }

  useEffect(() => {
    if (data?.data && data?.data.data.length > 0) {
      if (pagination.page === 0) {
        setPagination({
          page: data.data.page,
          size: data.data.size,
          search: '',
          totalItems: data.data.totalItems,
          id: 1
        });
        setAgent([
          ...formatAgent(data?.data.data as any[]),
          ...formatAgent(data?.data.data as any[]),
          ...formatAgent(data?.data.data as any[]),
          ...formatAgent(data?.data.data as any[]),
          ...formatAgent(data?.data.data as any[])
        ]);
      } else if (pagination.page > 0) {
        setAgent((prev) => [...prev, ...formatAgent(data?.data.data as any[])]);
      } else {
        setAgent([]);
      }
    }
  }, [data]);

  function ListboxComponent(props) {
    return (
      <>
        <ul {...props} onScroll={loadMoreItems}>
          {isFetching && <div>Loading...</div>}
          {props.children}
        </ul>
      </>
    );
  }

  return (
    <Autocomplete
      options={agent}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Agents"
          onChange={(e: any) => setSearchTerm(e.target.value)}
        />
      )}
      onKeyDown={(event: any) => {
        if (event.key === 'Enter') {
          // eslint-disable-next-line no-param-reassign
          event.defaultMuiPrevented = true;
        }
      }}
      ListboxComponent={ListboxComponent}
      style={{
        height: 100
      }}
    />
  );
};

export default AgentInfinity;
