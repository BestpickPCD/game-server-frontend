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

interface ProfileSetting {
  accountNumber: string;
  callbackUrl: string;
  apiCall: string;
}

const ProfileFormSubmit = ({ data }: { data: ProfileSetting }): JSX.Element => {
  const updateSetting = async () => {
    try {
      console.log(inputValues);
      // continue here make api to update all these
    } catch (error) {
      console.log(error);
    }
  };

  const [inputValues, setInputValues] = useState<ProfileSetting>({
    accountNumber: data.accountNumber,
    callbackUrl: data.callbackUrl,
    apiCall: data.apiCall
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
    } else {
      reset();
    }
  }, [data]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          justifyItems: 'center',
          padding: 4
        }}
      >
        <CardHeader title={'Account and API Settings'} />
        <LoadingButton
          // loading={isLoadingUpdate}
          variant="outlined"
          sx={{ marginLeft: 2, marginRight: 1.5, padding: 1.5 }}
          onClick={updateSetting}
        >
          {'Update'}
        </LoadingButton>
      </div>
      <Divider />
      <TableContainer
      // component={Paper}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" colSpan={2}>
                <TextField
                  fullWidth
                  name="accountNumber"
                  label="Account number"
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
                  label="API call allowed IP settings"
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
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProfileFormSubmit;
