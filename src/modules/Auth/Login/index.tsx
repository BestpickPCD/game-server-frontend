import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import { ResponseMessage } from 'src/models';
import { useLoginMutation } from 'src/services/authService';
import { useToast } from 'src/utils/hooks';
import * as yup from 'yup';
import AuthLayout from '../AuthLayout';
import { FormattedMessage } from 'react-intl';
import { useEffect } from 'react';

const schema = yup.object().shape({
  username: yup
    .string()
    .trim('Username no space')
    .matches(/[a-zA-Z]/, 'Username can only contain letters.')
    .required('Username is required'),
  password: yup
    .string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).+$/,
      'Password contains characters, numbers and at least one special character'
    )
    .required('Password is required')
});

const Login = (): JSX.Element => {
  const navigate = useNavigate();
  useEffect(() => {
    const tokens = localStorage.getItem('tokens');
    if (tokens) {
      navigate('/dashboards');
    }
  }, [navigate]);

  const [onLogin, { isLoading }] = useLoginMutation();
  const { notify, message } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const onSubmit = async (values: { username: string; password: string }) => {
    try {
      const response = await onLogin(values).unwrap();
      if (response.message === 'SUCCESS') {
        reset();
        notify({ message: 'Login Successfully' });
        navigate('/dashboards');
        const { tokens, ...rest } = response.data;
        localStorage.setItem(
          'tokens',
          JSON.stringify({
            token: tokens
          })
        );
        localStorage.setItem('user', JSON.stringify(rest));
      }
    } catch (error) {
      if ((error.data.message as ResponseMessage) === 'NOT_FOUND') {
        return notify({
          message: 'Username or password is not correct',
          type: 'error'
        });
      }
      return notify({ message: message.ERROR, type: 'error' });
    }
  };
  return (
    <AuthLayout>
      <>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            label={<FormattedMessage id="label.username" />}
            autoFocus
            sx={{ my: 2 }}
            error={!!errors['username']}
            helperText={errors['username'] ? errors['username'].message : ''}
            {...register('username')}
          />
          <TextField
            required
            fullWidth
            label="Password"
            type="password"
            error={!!errors['password']}
            helperText={errors['password'] ? errors['password'].message : ''}
            {...register('password')}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            loading={isLoading}
          >
            Sign In
          </LoadingButton>
          <Grid container>
            <Grid item xs>
              <RouterLink to="/">Forgot password?</RouterLink>
            </Grid>
            <Grid item xs>
              <RouterLink to="/register">
                <span>Don&apos;t have an account? </span>
                <span>Sign Up</span>
              </RouterLink>
            </Grid>
          </Grid>
        </Box>
      </>
    </AuthLayout>
  );
};

export default Login;
