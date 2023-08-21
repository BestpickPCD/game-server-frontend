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
    console.log(data[status]);

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
            {item.senderName}
          </Typography>
        </>
      )
    },
    {
      align: 'inherit',
      children: (
        <>
          <CustomLink
            onClick={() => onRedirect(item.receiverId)}
            color="text.primary"
          >
            {item.receiverName}
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
      title: 'Sender Name',
      name: 'senderName'
    },
    {
      align: 'inherit',
      title: 'Receiver Name',
      name: 'receiverName'
    },
    {
      align: 'right',
      title: 'Amount',
      name: 'amount'
    },
    {
      align: 'right',
      title: 'Type',
      name: 'type'
    },
    {
      align: 'right',
      title: 'Status',
      name: 'status'
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
  const tableFilter = ({ type, dateFrom, dateTo }: TableFilterProps) => [
    <DatePicker label="From" onChange={dateFrom.onChange} />,
    <DatePicker label="To" onChange={dateTo.onChange} />,
    <FormControl sx={{ maxWidth: 140, width: 140 }}>
      <InputLabel id="Type">Type</InputLabel>
      <Select
        labelId="Type"
        value={type.value}
        label="Type"
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
