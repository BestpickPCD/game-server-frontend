import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { format, parseISO } from 'date-fns';
import { ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
import Label from 'src/components/MUIComponents/Label';
import { TableBody, TableHeader } from 'src/components/Table/tableType';
import { Transactions } from 'src/models';
import { transactionTypes } from 'src/models/variables';

interface TransactionTableProps {
  tableHeader: TableHeader[];
  tableBody: (item) => TableBody[];
  tableFilter: ({ type, dateFrom, dateTo, status }) => ReactNode[];
}
interface TableFilterProps {
  type: {
    value: string;
    onChange: (value: string[]) => void;
  };
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

const getStatusLabel = (status: string): JSX.Element => {
  const data = {
    approved: {
      text: 'Approved',
      color: 'success'
    },
    pending: {
      text: 'Pending',
      color: 'warning'
    },
    'agent.add_balance': {
      text: 'Agent Add Balance',
      color: 'primary'
    },
    'user.add_balance': {
      text: 'User Add Balance',
      color: 'info'
    }
  };
  if (isNaN(Number(status))) {
    if (data[status]) {
      const { text, color } = data[status];
      return <Label color={color}>{text}</Label>;
    }
  }
  if (Number(status) > 0) {
    return <Label color="success">{String(status)}</Label>;
  }
  return <Label color="error">{String(status)}</Label>;
};

const TransactionTable = (): TransactionTableProps => {
  let seeRequest = false;
  let backDefault = false;
  const queryParameters = new URLSearchParams(window.location.search);
  const type = queryParameters.get('type');
  if (type === 'agent.add_balance') {
    backDefault = true;
  }

  const { role } = JSON.parse(localStorage.getItem('user'));
  if (role.name === 'admin') {
    seeRequest = true;
  }

  const tableBody = (item: Transactions): TableBody[] => [
    {
      align: 'inherit',
      children: (
        <>
          <Typography variant="body1" color="text.primary" noWrap>
            {item.username}
          </Typography>
        </>
      )
    },
    {
      align: 'inherit',
      children: (
        <>
          <Typography variant="body1" color="text.primary" noWrap>
            {item.agentUsername}
          </Typography>
        </>
      )
    },
    {
      align: 'right',
      children: (
        <>
          <Typography variant="body1" color="text.primary" noWrap>
            {getStatusLabel(String(item.amount))}
          </Typography>
        </>
      )
    },
    {
      align: 'right',
      children: (
        <>
          <Typography variant="body1" color="text.primary" noWrap>
            {getStatusLabel(item.type)}
          </Typography>
        </>
      )
    },
    {
      align: 'right',
      children: (
        <>
          <Typography variant="body1" color="text.primary" noWrap>
            {getStatusLabel(item.status)}
          </Typography>
        </>
      )
    },
    {
      align: 'right',
      children: (
        <>
          <Typography variant="body1" color="text.primary" noWrap>
            {item?.createdAt &&
              format(parseISO(item?.createdAt), 'dd/MM/yyyy HH:mm')}
          </Typography>
        </>
      )
    }
  ];

  const tableHeader: TableHeader[] = [
    {
      align: 'inherit',
      title: 'label.username',
      name: 'username'
    },
    {
      align: 'left',
      title: 'label.agent.username',
      name: 'agentUsername'
    },
    {
      align: 'right',
      title: 'label.amount',
      name: 'amount'
    },
    {
      align: 'right',
      title: 'label.type',
      name: 'type'
    },
    {
      align: 'right',
      title: 'label.status',
      name: 'status'
    },
    {
      align: 'right',
      title: 'label.created.at',
      name: 'createdAt'
    }
  ];
  const tableFilter = ({
    type,
    status,
    dateFrom,
    dateTo
  }: TableFilterProps) => [
    <DatePicker
      label={<FormattedMessage id="label.from" />}
      onChange={dateFrom.onChange}
    />,
    <DatePicker
      label={<FormattedMessage id="label.to" />}
      onChange={dateTo.onChange}
    />,
    <FormControl sx={{ maxWidth: 140, width: 140 }}>
      <InputLabel id="Type">
        <FormattedMessage id="label.type" />
      </InputLabel>
      <Select
        labelId="Type"
        value={type.value}
        label={<FormattedMessage id="label.type" />}
        onChange={(e) => {
          type.onChange([...e.target.value]);
        }}
        multiple
      >
        <MenuItem value="">
          <em>Default</em>
        </MenuItem>
        {transactionTypes.map((item) => (
          <MenuItem key={item} value={item}>
            {`${item.slice(0, 1).toUpperCase()}${item.slice(1)}`}
          </MenuItem>
        ))}
      </Select>
    </FormControl>,
    <FormControl sx={{ maxWidth: 140, width: 140 }}>
      <InputLabel id="status">
        <FormattedMessage id="label.status" />
      </InputLabel>
      <Select
        labelId="status"
        value={status.value}
        label={<FormattedMessage id="label.status" />}
        onChange={(e) => status.onChange(e.target.value)}
      >
        <MenuItem value="">
          <em>Default</em>
        </MenuItem>
        <MenuItem key={1} value={'approved'}>
          Approved
        </MenuItem>
        <MenuItem key={2} value={'pending'}>
          Pending
        </MenuItem>
      </Select>
    </FormControl>,
    <>
      {seeRequest && backDefault === false ? (
        <Button
          href={'?type=agent.add_balance'}
          variant="outlined"
          sx={{ whiteSpace: 'nowrap', height: '53.13px' }}
        >
          <FormattedMessage id="label.See-request" />
        </Button>
      ) : backDefault && seeRequest === true ? (
        <Button
          href={'?type='}
          variant="outlined"
          color="secondary"
          sx={{ whiteSpace: 'nowrap', height: '53.13px' }}
        >
          <FormattedMessage id="label.See-all" />
        </Button>
      ) : null}
    </>
  ];

  return { tableBody, tableHeader, tableFilter };
};

export default TransactionTable;
