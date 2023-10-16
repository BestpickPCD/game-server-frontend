import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Tooltip
} from '@mui/material';
import { ResponseMessage } from 'src/models';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { styled } from '@mui/material/styles';
import { FormattedMessage } from 'react-intl';

import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import { UserDashboard } from '.';
import { useEffect, useState } from 'react';
import {
  useGetUserByIdMutation,
  useGetApiKeyMutation,
  useUpdatePasswordMutation
} from 'src/services/userService';
import { useToast } from 'src/utils/hooks';
import * as yup from 'yup';
import { width } from '@mui/system';
import { LoadingButton } from '@mui/lab';

interface ProfileCoverProps {
  user: UserDashboard;
}

const schema = yup.object().shape({
  oldPassword: yup
    .string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).+$/,
      'Password contains characters, numbers and at least one special character'
    )
    .required('Password is required'),
  password: yup
    .string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).+$/,
      'Password contains characters, numbers and at least one special character'
    )
    .required('Password is required'),
  passwordConfirm: yup
    .string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).+$/,
      'Password contains characters, numbers and at least one special character'
    )
    .required('Password is required')
});

const passwordUpdate = (): JSX.Element => {
  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();
  const { notify, message } = useToast();
  const navigate = useNavigate();
  const {
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      password: ''
    }
  });

  const onSubmit = async (values) => {
    try {
      console.log('aa');
      const response = await updatePassword(values).unwrap();
      if (response.message === 'SUCCESS') {
        reset();
        notify({ message: 'update Successfully' });
        navigate('/dashboards');
      }
    } catch (error) {
      if ((error.data.message as ResponseMessage) === 'NOT_FOUND') {
        return notify({
          message: 'password is not correct',
          type: 'error'
        });
      }
      return notify({ message: message.ERROR, type: 'error' });
    }
  };

  return (
    <>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        sx={{ mt: 1 }}
      >
        <Card>
          {/* <CardHeader title={user.name} /> */}
          <Divider />
          <CardHeader title={'Password Update'} />
          <Divider />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      label="Old Password"
                      required
                      helperText={'error'}
                      autoComplete="off"
                    />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      label="New Passoword"
                      required
                      helperText={'error'}
                      autoComplete="off"
                    />
                  </TableCell>
                </TableRow>

                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      label="Passowrd Confirm"
                      required
                      helperText={'error'}
                      autoComplete="off"
                    />
                  </TableCell>
                </TableRow>
                <div>
                  <LoadingButton
                    type="submit"
                    variant="outlined"
                    sx={{ marginLeft: 2, padding: 1.5 }}
                    loading={isLoading}
                  >
                    {'Update'}
                  </LoadingButton>
                </div>
              </TableBody>
            </Table>
          </TableContainer>
          <Divider />
        </Card>
      </Box>
    </>
  );
};

export default passwordUpdate;
