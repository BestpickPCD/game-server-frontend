import { LoadingButton } from '@mui/lab';
import {
  Grid,
  Modal,
  Stack,
  Button,
  Card,
  Box,
  Typography,
  TextField
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useToast } from 'src/utils/hooks';
import {
  useTransactionActionMutation,
  useGetCallbackTransactionDetailsMutation
} from 'src/services/transactionService';
interface data {
  status: string;
  id: string;
  method: string;
  callbackId: string | null;
}

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: 'white',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
  alignItems: 'center',
  backgroundColor: 'white',
  boxShadow: 4,
  p: 2,
  borderRadius: 1
};

const StatusButtons = (data: data): JSX.Element => {
  let isAdmin = false;

  const { role } = JSON.parse(localStorage.getItem('user'));
  if (role.name === 'admin') {
    isAdmin = true;
  }

  const { notify } = useToast();
  const { id, status, method, callbackId } = data;

  const [transactionAction] = useTransactionActionMutation();
  const [loading, setLoading] = useState(false);
  const [statusTransaction, setStatus] = useState(status);
  const [seamlessDetail, setSeamlessDetail] = useState(false);
  const [callbackData, setCallbackData] = useState({
    username: '',
    amount: 0,
    transaction: {}
  });

  useEffect(() => {
    setStatus(status);
    if (method === 'seamless') {
      setSeamlessDetail(true);
    }
  }, []);

  const [getCallbackTransaction] = useGetCallbackTransactionDetailsMutation();

  const [open, setOpen] = useState(false);

  const handleOpen = async () => {
    const result = await getCallbackTransaction({ id: callbackId });
    if ('data' in result) {
      const { data: callbackData } = result.data;
      setCallbackData(callbackData);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const approveTransaction = async () => {
    setLoading(true);
    const { data } = await transactionAction({
      id,
      body: { action: 'approved' }
    }).unwrap();
    if (data?.action) {
      setStatus(data?.action);
      setLoading(false);
      notify({
        message: `Remaining Balance: ${data?.balance} | Status: ${data?.action}`
      });
    }
  };

  const rejectTransaction = async () => {
    setLoading(true);
    const { data } = await transactionAction({
      id,
      body: { action: 'rejected' }
    }).unwrap();
    if (data?.action) {
      setStatus(data?.action);
      setLoading(false);
      notify({
        message: `Remaining Balance: ${data?.balance} | Status: ${data?.action}`
      });
    }
  };

  return (
    <>
      {isAdmin && statusTransaction === 'pending' ? (
        <Grid container>
          <Grid item xs={6}>
            <LoadingButton
              loading={loading}
              variant="contained"
              color="success"
              onClick={() => approveTransaction()}
            >
              {'Approve'}
            </LoadingButton>
          </Grid>
          <Grid item xs={6}>
            <LoadingButton
              loading={loading}
              variant="outlined"
              color="error"
              onClick={() => rejectTransaction()}
            >
              {'Reject'}
            </LoadingButton>
          </Grid>
        </Grid>
      ) : statusTransaction === 'pending' ? (
        <Grid container>
          <Grid item xs={12}>
            <LoadingButton fullWidth variant="outlined" color="secondary">
              {'Pending'}
            </LoadingButton>
          </Grid>
        </Grid>
      ) : statusTransaction === 'rejected' ? (
        <Grid container>
          <Grid item xs={12}>
            <LoadingButton fullWidth variant="outlined" color="error">
              {'Rejected'}
            </LoadingButton>
          </Grid>
        </Grid>
      ) : (
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" flexWrap="wrap">
          <LoadingButton
            sx={{ flex: 1 }}
            fullWidth
            variant="outlined"
            color="success"
          >
            {'Approved'}
          </LoadingButton>

          {seamlessDetail && (
            <LoadingButton
              sx={{ flex: 1 }}
              fullWidth
              variant="outlined"
              color="info"
              onClick={handleOpen}
            >
              {'Details'}
            </LoadingButton>
          )}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalStyle}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                value={callbackData.username}
              />
              <TextField
                label="Amount"
                variant="outlined"
                fullWidth
                value={callbackData.amount}
              />
              <div>
                <p>JSON Data:</p>
                <pre>{JSON.stringify(callbackData.transaction, null, 2)}</pre>
              </div>
              <Button fullWidth variant="outlined" onClick={handleClose}>
                Close
              </Button>
            </Box>
          </Modal>
        </Stack>
      )}
    </>
  );
};

export default StatusButtons;
