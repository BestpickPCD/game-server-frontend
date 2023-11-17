import { LoadingButton } from '@mui/lab';
import {
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField
} from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useUpdateUserMutation } from 'src/services/userService';
import { useToast } from 'src/utils/hooks';
import { FormattedMessage } from 'react-intl';

interface ProfileSetting {
  userId: string;
  accountNumber: string;
  callbackUrl: string;
  apiCall: string;
}

const ProfileFormSubmit = ({ data }: { data: ProfileSetting }): JSX.Element => {
  const { notify } = useToast();

  const [updateUser, { isLoading: isLoadingUpdate }] = useUpdateUserMutation();

  const updateSetting = async () => {
    try {
      await updateUser({ id: data.userId, body: inputValues }).unwrap();
      notify({ message: 'API Details updated' });
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const [inputValues, setInputValues] = useState<ProfileSetting>({
    userId: data.userId,
    accountNumber: '',
    callbackUrl: '',
    apiCall: ''
  });

  const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value
    });
  };

  const { setValue, reset } = useForm({
    defaultValues: inputValues
  });

  useEffect(() => {
    if (data) {
      setValue('accountNumber', data?.accountNumber);
      setValue('callbackUrl', data?.callbackUrl);
      setValue('apiCall', data?.apiCall);

      setInputValues({
        accountNumber: data?.accountNumber,
        apiCall: data?.apiCall,
        callbackUrl: data?.callbackUrl,
        userId: data?.userId
      });
    } else {
      reset();
    }
  }, [data]);

  return (
    <>
      <CardHeader title={<FormattedMessage id="label.set-api" />}  />
      <Divider />
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" colSpan={2}>
                <TextField
                  fullWidth
                  name="accountNumber"
                  label={<FormattedMessage id="label.account-number" />}
                  required
                  helperText={''}
                  onChange={changeValue}
                  value={inputValues.accountNumber}
                />
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">
                <TextField
                  fullWidth
                  name="apiCall"
                  label={<FormattedMessage id="label.apicall-setting" />}
                  required
                  helperText={''}
                  onChange={changeValue}
                  value={inputValues.apiCall}
                />
              </TableCell>
              <TableCell align="left">
                <TextField
                  fullWidth
                  name="callbackUrl"
                  label="Callback URL"
                  required
                  helperText={''}
                  onChange={changeValue}
                  value={inputValues.callbackUrl}
                />
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" colSpan={2}>
                <LoadingButton
                  loading={isLoadingUpdate}
                  fullWidth
                  variant="outlined"
                  onClick={updateSetting}
                >
                  <FormattedMessage id="label.edit" />
                </LoadingButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProfileFormSubmit;
