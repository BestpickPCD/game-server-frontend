import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { format, parseISO } from 'date-fns';
import { ReactNode, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useSearchParams } from 'react-router-dom';
import { TableBody, TableHeader } from 'src/components/Table/tableType';
import { User } from 'src/models';
import { useModal } from 'src/utils/hooks';
import { UseModalProps } from 'src/utils/hooks/useModal';

interface UserTableProps {
  tableHeader: TableHeader[];
  visible: boolean;
  parentAgentIds: string[];
  user: User;
  dialogType: string;
  affiliatedAgentModal: UseModalProps;
  tableBody: (item) => TableBody[];
  tableFilter: ({ status, dateFrom, dateTo }) => ReactNode[];
  onAffiliatedAgents: (data) => void;
  toggle: () => void;
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
  const affiliatedAgentModal = useModal();
  const [user, setUser] = useState<User>();
  const [localUser, setUserLocal] = useState<User>();
  const [dialogType, setDialogType] = useState('');
  const [parentAgentIds, setParentAgentIds] = useState<string[]>([]);
  const [_, setSearchParams] = useSearchParams();
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUserLocal(JSON.parse(user));
    }
  }, []);

  const onClickButton = (user, type) => {
    setDialogType(type);
    setUser(user);
    toggle();
  };

  const onAffiliatedAgents = (ids) => {
    setParentAgentIds(ids);
    affiliatedAgentModal.toggle();
  };

  const onLowerPart = (id) => {
    setSearchParams({ parentId: id });
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
            {item?.parent?.name ?? '-'}
          </Typography>
        </>
      )
    },
    {
      align: 'inherit',
      children: (
        <Box display="flex" alignItems="center" gap={1}>
          <Button
            variant="outlined"
            onClick={() => onAffiliatedAgents(item.parentAgentIds)}
          >
            <Typography whiteSpace="nowrap" fontWeight={600}>
              Top
            </Typography>
          </Button>
          <Button
            variant="outlined"
            color="success"
            onClick={() => onLowerPart(item?.id)}
          >
            <Typography whiteSpace="nowrap" fontWeight={600}>
              Lower Part
            </Typography>
          </Button>
        </Box>
      )
    },
    {
      align: 'left',
      children: (
        <>
          <Typography
            variant="body1"
            fontWeight="bold"
            color="text.primary"
            noWrap
          >
            {parseFloat(item.rate).toFixed(2)}%
          </Typography>
        </>
      )
    },
    {
      align: 'right',
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
      align: 'right',
      children: (
        <>
          <Typography
            variant="body1"
            fontWeight="bold"
            color="text.primary"
            noWrap
          >
            {item?.loggedIn &&
              format(parseISO(item?.loggedIn), 'dd/MM/yyyy HH:mm')}
          </Typography>
        </>
      )
    },
    {
      align: 'center',
      children: (
        <Box display="flex" alignItems="center" gap={1}>
          <Button
            variant="outlined"
            startIcon={<PaidOutlinedIcon />}
            onClick={() => onClickButton(item, 'transaction')}
            disabled={localUser?.level + 1 !== item.level}
          >
            Payment
          </Button>
          <Button
            variant="outlined"
            color="success"
            startIcon={<PaidOutlinedIcon />}
            onClick={() => onClickButton(item, 'vendor')}
            disabled={localUser?.level + 1 !== item.level}
          >
            Vendors
          </Button>
        </Box>
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
      title: 'label.parent.name',
      name: 'agentParentName'
    },
    {
      align: 'inherit',
      title: 'label.affiliated.agent',
      name: ''
    },
    {
      align: 'inherit',
      title: 'label.rate',
      name: 'rate'
    },
    {
      align: 'right',
      title: 'label.balance',
      name: 'balance'
    },
    {
      align: 'right',
      title: 'label.loggedin',
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
          <FormattedMessage id="label.default" />
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

  return {
    tableHeader,
    visible,
    user,
    dialogType,
    parentAgentIds,
    affiliatedAgentModal,
    tableBody,
    tableFilter,
    toggle,
    onAffiliatedAgents
  };
};

export default UserTable;
