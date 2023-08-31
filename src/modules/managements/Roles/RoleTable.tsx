import { Badge, Box, Button, Typography } from '@mui/material';
import { format, parseISO } from 'date-fns';
import { TableBody, TableHeader } from 'src/components/Table/tableType';
import { useModal } from 'src/utils/hooks';

interface UserTableProps {
  tableHeader: TableHeader[];
  tableBody: (item) => TableBody[];
  visible: boolean;
  toggle: () => void;
}

const UserTable = (): UserTableProps => {
  const { visible, toggle } = useModal();

  const tableBody = (item): TableBody[] => [
    {
      align: 'inherit',
      children: (
        <Typography color="text.primary" noWrap>
          {item.name}
        </Typography>
      )
    },
    {
      align: 'left',
      children: (
        <Box display="flex" alignItems="center" gap="8px" flexWrap="wrap">
          {Object.keys(item.permissions).map((feature) => (
            <Badge
              badgeContent={item.permissions[feature].length || 0}
              color="primary"
            >
              <Button
                variant="outlined"
                color="primary"
                sx={{ padding: '4px 8px', cursor: 'default' }}
              >
                {feature}
              </Button>
            </Badge>
          ))}
        </Box>
      ),
      tableProps: {
        width: '60%'
      }
    },
    {
      align: 'right',
      children: (
        <Typography color="text.primary" noWrap>
          {item?.updatedAt &&
            format(parseISO(item?.updatedAt), 'dd/MM/yyyy HH:mm')}
        </Typography>
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
      align: 'left',
      title: 'label.permissions',
      name: 'permissions',
      tableProps: {
        width: '60%'
      }
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

  return { tableBody, tableHeader, toggle, visible };
};

export default UserTable;
