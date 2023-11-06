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
  oldPassword: yup.string().required('Password is required'),
  password: yup.string().required('Password is required'),
  confirmPassword: yup.string().required('Password is required')
});

const passwordUpdate = (): JSX.Element => {
  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();
  const { notify, message } = useToast();
  const navigate = useNavigate();

  const defaultValues = {
    oldPassword: '',
    password: '',
    confirmPassword: ''
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues // Use the updated defaultValues here
  });

  const onSubmit = async (values) => {
    try {
      console.log(values);
      const response = await updatePassword(values).unwrap();
      console.log(response);
      // if (response.message === 'SUCCESS') {
      //   reset();
      //   notify({ message: 'update Successfully' });
      //   navigate('/dashboards');
      // }
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
          <CardHeader title={'Change Password'} />
          <Divider />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">
                    <TextField
                      type="text"
                      fullWidth
                      label="Old Password"
                      name="oldPassword"
                      required
                      {...register('oldPassword')}
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
                      type="password"
                      fullWidth
                      label="New Passoword"
                      name="password"
                      required
                      {...register('password')}
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
                      type="password"
                      fullWidth
                      label="PConfirm Password"
                      name="confirmPassword"
                      required
                      {...register('confirmPassword')}
                      helperText={'error'}
                      autoComplete="off"
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
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
          </TableContainer>
          <Divider />
        </Card>
      </Box>
    </>
  );
};

export default passwordUpdate;
