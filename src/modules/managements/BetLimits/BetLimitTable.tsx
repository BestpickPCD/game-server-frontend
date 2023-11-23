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
      title: 'label.type',
      name: 'type'
    },
    {
      align: 'inherit',
      title: 'label.name',
      name: 'name'
    },
    {
      align: 'inherit',
      title: 'label.limit',
      name: 'limit'
    },
    {
      align: 'right',
      title: 'label.actions'
    }
  ];
  const tableFilter = ({ type }: TableFilterProps) => [
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="isActive">
        {<FormattedMessage id="label.type" />}
      </InputLabel>
      <Select
        labelId="isActive"
        value={type.value}
        label={'Type'}
        onChange={(e) => type.onChange(e.target.value)}
      >
        <MenuItem value="">
          <em>
            <FormattedMessage id="label.default" />
          </em>
        </MenuItem>
        <MenuItem value="all">
          <FormattedMessage id="label.all" />
        </MenuItem>
        <MenuItem value="vendor">
          <FormattedMessage id="label.vendor" />
        </MenuItem>
        <MenuItem value="game">
          <FormattedMessage id="label.game" />
        </MenuItem>
        <MenuItem value="type">
          <FormattedMessage id="label.type" />
        </MenuItem>
      </Select>
    </FormControl>
  ];

  return { tableBody, tableHeader, tableFilter, user, toggle, visible };
};

export default UserTable;
