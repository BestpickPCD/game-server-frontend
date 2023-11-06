import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from '@mui/material';
import { TableBody, TableHeader } from 'src/components/Table/tableType';
import { ReactNode, useState } from 'react';
import { User } from 'src/models';
import { useModal } from 'src/utils/hooks';
import { FormattedMessage } from 'react-intl';

interface UserTableProps {
  tableHeader: TableHeader[];
  tableBody: (item) => TableBody[];
  tableFilter: ({ type }) => ReactNode[];
  visible: boolean;
  toggle: () => void;
  user: User;
}
interface TableFilterProps {
  type: {
    value: string;
    onChange: (value: string) => void;
  };
}

const UserTable = (): UserTableProps => {
  const { visible, toggle } = useModal();
  const [user, setUser] = useState<User>();

  const onClickButton = (user) => {
    setUser(user);
    toggle();
  };

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
            {item.limitType}
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
            {item.limitTypeId}
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
            {item.limit}
          </Typography>
        </>
      )
    }
  ];
  const tableHeader: TableHeader[] = [
    {
      align: 'inherit',
      title: 'Type',
      name: 'type'
    },
    {
      align: 'inherit',
      title: 'Name (id)',
      name: 'name'
    },
    {
      align: 'inherit',
      title: 'Limit',
      name: 'limit'
    },
    {
      align: 'right',
      title: 'label.actions'
    }
  ];
  const tableFilter = ({ type }: TableFilterProps) => [
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="isActive">{'Type'}</InputLabel>
      <Select
        labelId="isActive"
        value={type.value}
        label={'Type'}
        onChange={(e) => type.onChange(e.target.value)}
      >
        <MenuItem value="">
          <em>Default</em>
        </MenuItem>
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="vendor">Vendors</MenuItem>
        <MenuItem value="game">Games</MenuItem>
        <MenuItem value="type">Types</MenuItem>
      </Select>
    </FormControl>
  ];

  return { tableBody, tableHeader, tableFilter, user, toggle, visible };
};

export default UserTable;
