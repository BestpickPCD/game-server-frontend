import { LoadingButton } from '@mui/lab';
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useToast } from 'src/utils/hooks';
import { useTransactionActionMutation } from 'src/services/transactionService';

interface data {
  status: string;
  id: string;
}

const StatusButtons = (data: data): JSX.Element => {
  let isAdmin = false;

  const { role } = JSON.parse(localStorage.getItem('user'));
  if (role.name === 'admin') {
    isAdmin = true;
  }

  const { notify } = useToast();
  const { id, status } = data;

  const [transactionAction] = useTransactionActionMutation();
  const [loading, setLoading] = useState(false);
  const [statusTransaction, setStatus] = useState(status);

  useEffect(() => {
    setStatus(status);
  }, []);

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
        <Grid container>
          <Grid item xs={12}>
            <LoadingButton fullWidth variant="outlined" color="success">
              {'Approved'}
            </LoadingButton>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default StatusButtons;
