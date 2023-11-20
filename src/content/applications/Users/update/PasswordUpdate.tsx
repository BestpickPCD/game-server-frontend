import {
  Box,
  Card,
  CardHeader,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField
} from '@mui/material';
import { ResponseMessage } from 'src/models';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useUpdatePasswordMutation } from 'src/services/userService';
import { useToast } from 'src/utils/hooks';
import * as yup from 'yup';
import { LoadingButton } from '@mui/lab';

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
          <Divider />
          <CardHeader title={'Change Password'} />
          <Divider />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 350 }} aria-label="simple table">
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
                      label="Confirm Password"
                      name="confirmPassword"
                      required
                      {...register('confirmPassword')}
                      autoComplete="off"
                    />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">
                    <LoadingButton
                      type="submit"
                      fullWidth
                      variant="outlined" 
                      loading={isLoading}
                    >
                      {'Update'}
                    </LoadingButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Box>
    </>
  );
};

export default passwordUpdate;
