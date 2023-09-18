import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
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
            {item.senderUsername}
          </Typography>
        </>
      )
    },
    {
      align: 'inherit',
      children: (
        <>
          <CustomLink
            onClick={() => onRedirect(item.receiverUsername)}
            color="text.primary"
          >
            {item.receiverUsername}
          </CustomLink>
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
      title: 'label.sender.name',
      name: 'senderName'
    },
    {
      align: 'inherit',
      title: 'label.receiver.name',
      name: 'receiverName'
    },
    {
      align: 'right',
      title: 'label.amount',
      name: 'amount'
    },
    {
      align: 'right',
      title: 'label.title',
      name: 'type'
    },
    {
      align: 'right',
      title: 'label.status',
      name: 'status'
    },
    {
      align: 'right',
      title: 'label.updated.at',
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
    </FormControl>
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
