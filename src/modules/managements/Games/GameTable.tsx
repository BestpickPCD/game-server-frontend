import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
  Typography
} from '@mui/material';
import { format, parseISO } from 'date-fns';
import { ReactNode } from 'react';
import { TableBody, TableHeader } from 'src/components/Table/tableType';
import { FormattedMessage } from 'react-intl';
interface GameTableProps {
  tableHeader: TableHeader[];
  tableBody: (item: TableBody[]) => TableBody[];
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

const GameTable = (): GameTableProps => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tableBody = (item: any): TableBody[] => [
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
        <Tooltip title={item.link} placement="bottom">
          <Typography variant="body1" fontWeight="bold" color="text.primary">
            {item.link.slice(0, 30)}
          </Typography>
        </Tooltip>
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
            {item.type}
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
            {item.category_id}
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
      title: 'label.name',
      name: 'name'
    },
    {
      align: 'inherit',
      title: 'Link'
    },
    {
      align: 'inherit',
      title: 'label.type'
    },
    {
      align: 'right',
      title: 'Category',
      name: 'category_id'
    },
    {
      align: 'right',
      title: 'label.updated.at'
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
          <em>
            <FormattedMessage id="label.default" />
          </em>
        </MenuItem>
        <MenuItem value="active">
          <FormattedMessage id="label.active" />
        </MenuItem>
        <MenuItem value="disable">
          <FormattedMessage id="label.disable" />
        </MenuItem>
      </Select>
    </FormControl>
  ];

  return { tableBody, tableHeader, tableFilter };
};

export default GameTable;
