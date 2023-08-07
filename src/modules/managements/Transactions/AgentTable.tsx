import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from '@mui/material';
import { format, parseISO } from 'date-fns';
import { TableBody, TableHeader } from 'src/components/Table/tableType';
import { ReactNode } from 'react';

interface UserTableProps {
  tableHeader: TableHeader[];
  tableBody: (item) => TableBody[];
  tableFilter: ({ status, dateFrom, dateTo }) => ReactNode[];
}
interface TableFilterProps {
  status: {
    value: string;
    onChange: (value: string) => void;
  };
  dateFrom: {
    value: string;
    onChange: (value: string) => void;
  };
  dateTo: {
    value: string;
    onChange: (value: string) => void;
  };
}
const UserTable = (): UserTableProps => {
  const tableBody = (item): TableBody[] => [
    {
      align: 'inherit',
      children: (
        <>
          <Typography
            variant="body1"
            fontWeight="bold"
            color="text.primary"
            noWrap
          >
            {item.name}
          </Typography>
        </>
      )
    },
    {
      align: 'inherit',
      children: (
        <>
          <Typography
            variant="body1"
            fontWeight="bold"
            color="text.primary"
            noWrap
          >
            {item.agentParentName}
          </Typography>
        </>
      )
    },
    {
      align: 'right',
      children: (
        <>
          <Typography
            variant="body1"
            fontWeight="bold"
            color="text.primary"
            noWrap
          >
            {item.username}
          </Typography>
        </>
      )
    },
    {
      align: 'right',
      children: (
        <>
          <Typography
            variant="body1"
            fontWeight="bold"
            color="text.primary"
            noWrap
          >
            {item?.updatedAt &&
              format(parseISO(item?.updatedAt), 'dd/MM/yyyy HH:mm')}
          </Typography>
        </>
      )
    }
  ];
  const tableHeader: TableHeader[] = [
    {
      align: 'inherit',
      title: 'Name',
      name: 'name'
    },
    {
      align: 'inherit',
      title: 'Parent Name',
      name: 'agentParentName'
    },
    {
      align: 'right',
      title: 'Username',
      name: 'username'
    },
    {
      align: 'right',
      title: 'Updated At',
      name: 'updatedAt'
    },
    {
      align: 'right',
      title: 'Actions'
    }
  ];
  const tableFilter = ({ status, dateFrom, dateTo }: TableFilterProps) => [
    <DatePicker
      label="From"
      // value={dateFrom.value ?? null}
      onChange={dateFrom.onChange}
    />,
    <DatePicker
      label="To"
      // value={dateTo.value ?? null}
      onChange={dateTo.onChange}
    />,
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="isActive">Status</InputLabel>
      <Select
        labelId="isActive"
        value={status.value}
        label="Status"
        onChange={(e) => status.onChange(e.target.value)}
      >
        <MenuItem value="">
          <em>Default</em>
        </MenuItem>
        <MenuItem value="active">Activated</MenuItem>
        <MenuItem value="disable">Disabled</MenuItem>
      </Select>
    </FormControl>
  ];

  return { tableBody, tableHeader, tableFilter };
};

export default UserTable;
