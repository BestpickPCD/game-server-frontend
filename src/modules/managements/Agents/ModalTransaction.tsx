import { LoadingButton } from '@mui/lab';
import { Box, Grid, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { User } from 'src/models';
import { useCreateTransactionMutation } from 'src/services/transactionService';
import { useToast } from 'src/utils/hooks';
import { useForm } from 'react-hook-form';

interface data {
  user: User;
  onUpdateToReset: (reset: boolean) => void;
}

export default function ModalTransaction({
  user,
  onUpdateToReset
}: data): JSX.Element {
  const [formData, setFormData] = useState({
    userId: '',
    amount: 0,
    type: 'user.add_balance',
    note: '',
    token: ''
  });

  const { notify, message } = useToast();

  useEffect(() => {
    formData.userId = user?.id;
    setFormData((prev) => ({ ...prev, status: 'success' }));
  }, [user]);

  const [createTransaction, { isLoading: isLoadingCreate }] =
    useCreateTransactionMutation({});

  const handleSubmit = async () => {
    try {
      const response = await createTransaction({
        ...formData,
        currencyId: user.currencyId
      }).unwrap();
      if (response) {
        onUpdateToReset(true);
      }
    } catch (error) {
      notify({ message: error?.data?.message || message.ERROR, type: 'error' });
    }
  };

  const onInput = (value, inputName) => {
    setFormData((prev) => ({ ...prev, [`${inputName}`]: value }));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h5" component="div">
          <FormattedMessage id="title.add-transaction" />
        </Typography>
      </Grid>
      <Box
        justifyContent="center"
        display="flex"
        width={'100%'}
        paddingLeft="18px"
        gap="12px"
        marginTop="8px"
      >
        <TextField
          label="Insert the amount here"
          variant="outlined"
          fullWidth
          onInput={(event) =>
            onInput(Number((event.target as HTMLInputElement).value), 'amount')
          }
        />
        <LoadingButton
          loading={isLoadingCreate}
          onClick={handleSubmit}
          size="large"
          variant="contained"
          sx={{ width: 120 }}
        >
          <Box>
            <span>+ &nbsp;</span>
            <span>Add</span>
          </Box>
        </LoadingButton>
      </Box>
    </Grid>
  );
}
