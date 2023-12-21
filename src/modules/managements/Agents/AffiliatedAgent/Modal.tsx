import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Tooltip,
  Typography
} from '@mui/material';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import Label from 'src/components/MUIComponents/Label';
import Modals from 'src/components/Modals';
interface AffiliatedAgentModalProps {
  open: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  onClose: () => void;
}
const AffiliatedAgentModal = ({
  data,
  open,
  onClose
}: AffiliatedAgentModalProps): JSX.Element => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [detail, setDetail] = useState<any>({});

  const handleTooltipClose = () => {
    setDetail({});
  };

  const handleTooltipOpen = (row) => {
    setDetail(row);
  };

  const TooltipComponent = useMemo(
    () => (
      <div style={{ height: '450px', overflow: 'auto' }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          padding={0}
        >
          <Label color="success">Agents of {detail.name}</Label>
          <Button
            fullWidth
            sx={{
              color: '#fff',
              justifyContent: 'flex-start'
            }}
          >
            Correction
          </Button>
          <Button
            fullWidth
            sx={{
              color: '#fff',
              justifyContent: 'flex-start'
            }}
          >
            SubList
          </Button>
          <Button
            onClick={() => navigate(`/management/transactions/${detail.id}`)}
            fullWidth
            sx={{
              color: '#fff',
              justifyContent: 'flex-start'
            }}
          >
            Payment details
          </Button>
          <Button
            onClick={() =>
              navigate(`/management/transactions/${detail.id}?type=charging`)
            }
            fullWidth
            sx={{
              color: '#fff',
              justifyContent: 'flex-start'
            }}
          >
            Charging history
          </Button>
          <Button
            fullWidth
            sx={{
              color: '#fff',
              justifyContent: 'flex-start'
            }}
          >
            Daily profit statistics
          </Button>
          <Button
            fullWidth
            sx={{
              color: '#fff',
              justifyContent: 'flex-start'
            }}
          >
            Statistics by game
          </Button>
          <Button
            fullWidth
            sx={{
              color: '#fff',
              justifyContent: 'flex-start'
            }}
          >
            Pot distribution statistics
          </Button>
          <Button
            fullWidth
            sx={{
              color: '#fff',
              justifyContent: 'flex-start'
            }}
          >
            Maximum bet amount limit
          </Button>
          <Button
            fullWidth
            sx={{
              color: '#fff',
              justifyContent: 'flex-start'
            }}
          >
            Maximum winning amount limited
          </Button>
        </Box>
        <Divider />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          padding={0}
        >
          <Label color="success">Developer</Label>
          <Button
            fullWidth
            sx={{
              color: '#fff',
              justifyContent: 'flex-start'
            }}
          >
            API error log
          </Button>
        </Box>
        <Divider />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          padding={0}
        >
          <Label color="success">User</Label>
          <Button
            fullWidth
            sx={{
              color: '#fff',
              justifyContent: 'flex-start'
            }}
          >
            User List
          </Button>
          <Button
            fullWidth
            sx={{
              color: '#fff',
              justifyContent: 'flex-start'
            }}
          >
            Payment details
          </Button>
        </Box>
      </div>
    ),
    [detail]
  );

  return (
    <Modals title={'AffiliatedAgentModal'} open={open} onClose={onClose}>
      <List>
        {data.map((item, index) => (
          <ListItem key={index} sx={{ my: 2 }}>
            <Tooltip
              onClose={handleTooltipClose}
              open={detail?.id === item.id}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title={TooltipComponent}
              placement="right"
            >
              <Box onClick={() => handleTooltipOpen(item)}>
                <Typography mb={1}>{item.name}</Typography>
                <Label color="success">@{item.username}</Label>
              </Box>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Modals>
  );
};

export default AffiliatedAgentModal;
