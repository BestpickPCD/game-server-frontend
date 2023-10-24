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
import { FormattedMessage } from 'react-intl';

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

  const onCalculate = (item) =>
    Math.abs(
      Object.keys(item?.balances)
        .filter(
          (item) =>
            item === 'deposit' ||
            item === 'withdraw' ||
            item === 'user.add_balance'
        )
        .reduce((acc: number, cur: string) => acc + item.balances[cur], 0)
    );

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
          <Button
            variant="outlined"
            startIcon={<PaidOutlinedIcon />}
            href={`transactions/${item.id}`}
          >
            {item.balance}
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
            {(item?.balances?.win ?? 0) +
              (item?.balances?.bet ?? 0) +
              (item?.balances?.cancel ?? 0) ?? 0}
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
            {item?.balances && onCalculate(item)}
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
    },
    {
      align: 'center',
      children: (
        <>
          <Button
            disabled={
              JSON.parse(localStorage.getItem('user'))?.id != item.agentId
            }
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
      title: 'label.name',
      name: 'name'
    },
    {
      align: 'inherit',
      title: 'label.balance',
      name: 'balance'
    },
    {
      align: 'inherit',
      title: 'label.betting',
      name: 'totalBettingAmount'
    },
    {
      align: 'inherit',
      title: 'label.recharge',
      name: 'totalBettingAmount'
    },
    {
      align: 'right',
      title: 'label.username',
      name: 'username'
    },
    {
      align: 'right',
      title: 'label.updated.at',
      name: 'updatedAt'
    },
    {
      align: 'center',
      title: 'title.managements',
      name: 'management'
    },
    {
      align: 'right',
      title: 'label.actions'
    }
  ];
  const tableFilter = ({ status, dateFrom, dateTo }: TableFilterProps) => [
    <DatePicker
      label={<FormattedMessage id="label.from" />}
      // value={dateFrom.value ?? null}
      onChange={dateFrom.onChange}
    />,
    <DatePicker
      label={<FormattedMessage id="label.to" />}
      // value={dateTo.value ?? null}
      onChange={dateTo.onChange}
    />,
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="isActive">
        <FormattedMessage id="label.status" />
      </InputLabel>
      <Select
        labelId="isActive"
        value={status.value}
        label={<FormattedMessage id="label.status" />}
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
