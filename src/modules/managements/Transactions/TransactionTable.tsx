import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
  Typography,
  styled
} from '@mui/material';
import { format, parseISO } from 'date-fns';
import { TableBody, TableHeader } from 'src/components/Table/tableType';
import { ReactNode } from 'react';
import { Transactions } from 'src/models';
import { transactionTypes } from 'src/models/variables';
import Label from 'src/components/MUIComponents/Label';
import { useNavigate } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { display } from '@mui/system';
import StatusButtons from './StatusButtons';
import { stringify } from 'uuid';
interface TransactionTableProps {
  tableHeader: TableHeader[];
  tableBody: (item) => TableBody[];
  tableFilter: ({ type, dateFrom, dateTo }) => ReactNode[];
}
interface TableFilterProps {
  type: {
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
    failed: {
      text: 'Failed',
      color: 'error'
    },
    success: {
      text: 'Success',
      color: 'success'
    },
    ok: {
      text: 'Ok',
      color: 'success'
    },
    pending: {
      text: 'Pending',
      color: 'primary'
    },
    cancelled: {
      text: 'Cancel',
      color: 'warning'
    }
  };
  if (data[status]) {
    const { text, color } = data[status];
    return <Label color={color}>{text}</Label>;
  }
  return <Label>{status}</Label>;
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

  const navigate = useNavigate();

  const onRedirect = (id: number | string) => {
    navigate(`/management/transactions/${id}`);
  };
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
      align: 'right',
      children: (
        <>
          <Typography variant="body1" color="text.primary" noWrap>
            {item.amount}
          </Typography>
        </>
      )
    },
    {
      align: 'right',
      children: (
        <>
          <Typography variant="body1" color="text.primary" noWrap>
            {`${item.type.slice(0, 1).toUpperCase()}${item.type.slice(1)}`}
          </Typography>
        </>
      )
    },
    {
      align: 'right',
      children: (
        <>
          <Typography variant="body1" color="text.primary" noWrap>
            {item.method}
          </Typography>
        </>
      )
    },
    {
      align: 'right',
      children: (
        <>
          <Typography variant="body1" color="text.primary" noWrap>
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
          <StatusButtons
            id={item?.id}
            status={item?.status}
            method={item?.method}
            callbackId={item?.callbackId}
          />
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
      title: 'label.method',
      name: 'method'
    },
    {
      align: 'right',
      title: 'label.updated.at',
      name: 'updatedAt'
    },
    {
      align: 'center',
      title: 'label.status',
      name: 'updatedAt'
    },
    {
      align: 'right',
      title: 'label.actions'
    }
  ];
  const tableFilter = ({ type, dateFrom, dateTo }: TableFilterProps) => [
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
        onChange={(e) => type.onChange(e.target.value)}
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
    <>
      {seeRequest && backDefault === false ? (
        <Container>
          <Button href={'?type=agent.add_balance'} variant="outlined">
            {'See Requests'}
          </Button>
        </Container>
      ) : backDefault && seeRequest === true ? (
        <Container>
          <Button href={'?type='} variant="outlined" color="secondary">
            {'See All'}
          </Button>
        </Container>
      ) : null}
    </>
  ];

  return { tableBody, tableHeader, tableFilter };
};

export default TransactionTable;

const CustomLink = styled(Link)(
  ({ theme }) => `
  color: ${theme.colors.info.dark};
  cursor: pointer;
`
);
