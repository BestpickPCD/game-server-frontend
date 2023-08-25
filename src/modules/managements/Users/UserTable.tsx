import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from '@mui/material';
import { format, parseISO } from 'date-fns';
import { TableBody, TableHeader } from 'src/components/Table/tableType';
import { ReactNode, useState } from 'react';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import { useModal } from 'src/utils/hooks';
import { User } from 'src/models';

interface UserTableProps {
  tableHeader: TableHeader[];
  tableBody: (item) => TableBody[];
  tableFilter: ({ status, dateFrom, dateTo }) => ReactNode[];
  visible: boolean;
  toggle: () => void;
  user: User;
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
            {item.user.name}
          </Typography>
        </>
      )
    },
    {
      align: 'inherit',
      children: (
        <>
          <Button
            variant="outlined"
            startIcon={<PaidOutlinedIcon />}
            href={`transactions/${item.id}`}
          >
            {item.user.balance}
          </Button>
        </>
      )
    },
    {
      align: 'inherit',
      children: (
        <>
          <Button
            variant="outlined"
            startIcon={<PaidOutlinedIcon />}
            href={`transactions/${item.id}/betting-history`}
          >
            {item.user.betGameAmount}
          </Button>
        </>
      )
    },
    {
      align: 'inherit',
      children: (
        <>
          <Button
            variant="outlined"
            startIcon={<PaidOutlinedIcon />}
            href={`transactions/${item.id}/recharge-history`}
          >
            {item.user.amountReceived}
          </Button>
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
            {item.user.username}
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
            {item?.user.updatedAt &&
              format(parseISO(item?.user.updatedAt), 'dd/MM/yyyy HH:mm')}
          </Typography>
        </>
      )
    },
    {
      align: 'center',
      children: (
        <>
          <Button
            disabled={JSON.parse(localStorage.getItem('user'))?.id != item.agentId}
            variant="outlined"
            startIcon={<PaidOutlinedIcon />}
            onClick={() => onClickButton(item)}
          >
            Payment
          </Button>
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
      title: 'Balance',
      name: 'balance'
    },
    {
      align: 'inherit',
      title: 'Total Betting amount',
      name: 'totalBettingAmount'
    },
    {
      align: 'inherit',
      title: 'Total Recharge Amount',
      name: 'totalBettingAmount'
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
      align: 'center',
      title: 'Management',
      name: 'management'
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

  return { tableBody, tableHeader, tableFilter, visible, toggle, user };
};

export default UserTable;
