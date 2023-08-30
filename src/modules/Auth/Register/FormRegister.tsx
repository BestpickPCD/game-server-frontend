import { yupResolver } from '@hookform/resolvers/yup';
import { Box, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useRegisterMutation } from 'src/services/authService';
import { useToast } from 'src/utils/hooks';

import { LoadingButton } from '@mui/lab';
import * as yup from 'yup';
import { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

const schema = yup.object().shape({
  username: yup
    .string()
    .trim('Username no space')
    .matches(/[a-zA-Z]/, 'Username can only contain letters.')
    .required('Username is required'),
  firstName: yup
    .string()
    .matches(/[a-zA-Z]/, 'First name can only contain letters.')
    .required('First name is required'),
  lastName: yup
    .string()
    .matches(/[a-zA-Z]/, 'Last name can only contain letters.')
    .required('First name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('First name is required'),
  password: yup
    .string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).+$/,
      'Password contains characters, numbers and at least one special character'
    )
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password is required')
});
interface FormRegisterProps {
  isUserRegister?: boolean;
  isSubmit?: boolean;
  setIsSubmit?: () => void;
  refetch?: () => void;
  onClose?: () => void;
}
const FormRegister = ({
  isUserRegister = false,
  isSubmit = false,
  setIsSubmit,
  refetch,
  onClose
}: FormRegisterProps): JSX.Element => {
  const [onRegister, { isLoading }] = useRegisterMutation();
  const { notify, message } = useToast();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    }
  });

  useEffect(() => {
    if (isSubmit) {
      handleSubmit(onSubmit)();
      isSubmit && setIsSubmit();
    }
  }, [isSubmit]);

  const onSubmit = async (values) => {
    try {
      const response = await onRegister(values).unwrap();
      if (response && response.message === 'CREATED') {
        reset();
        notify({ message: 'Registered Successfully' });
        if (!isUserRegister) {
          navigate('/login');
        } else {
          refetch();
          onClose();
        }
      }
    } catch (error) {
      if (error.data.message === 'DUPLICATE') {
        return notify({
          message: 'Duplicated username or email',
          type: 'error'
        });
      }
      return notify({ message: message.ERROR, type: 'error' });
    }
  };
  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{ mt: 1 }}
    >
      <TextField
        required
        fullWidth
        label="First name"
        autoFocus
        sx={{ my: 1 }}
        error={!!errors['firstName']}
        helperText={errors['firstName'] ? errors['firstName'].message : ''}
        {...register('firstName')}
        onBlur={(e) => setValue('firstName', e.target.value.trim())}
      />
      <TextField
        required
        fullWidth
        label="Last name"
        sx={{ my: 1 }}
        error={!!errors['lastName']}
        helperText={errors['lastName'] ? errors['lastName'].message : ''}
        {...register('lastName')}
        onBlur={(e) => setValue('lastName', e.target.value.trim())}
      />
      <TextField
        required
        fullWidth
        label="Email"
        type="email"
        sx={{ my: 1 }}
        error={!!errors['email']}
        helperText={errors['email'] ? errors['email'].message : ''}
        {...register('email')}
        onBlur={(e) => setValue('email', e.target.value.trim())}
      />
      <TextField
        required
        fullWidth
        label={<FormattedMessage id="label.username" />}
        sx={{ my: 1 }}
        error={!!errors['username']}
        helperText={errors['username'] ? errors['username'].message : ''}
        {...register('username')}
        onBlur={(e) => setValue('username', e.target.value.trim())}
      />
      <TextField
        required
        fullWidth
        label="Password"
        type="password"
        sx={{ my: 1 }}
        error={!!errors['password']}
        helperText={errors['password'] ? errors['password'].message : ''}
        {...register('password')}
        onBlur={(e) => setValue('password', e.target.value.trim())}
      />
      <TextField
        required
        fullWidth
        label="Confirm Password"
        type="password"
        sx={{ my: 1 }}
        error={!!errors['confirmPassword']}
        helperText={
          errors['confirmPassword'] ? errors['confirmPassword'].message : ''
        }
        {...register('confirmPassword')}
        onBlur={(e) => setValue('confirmPassword', e.target.value.trim())}
      />
      {!isUserRegister && (
        <LoadingButton
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          loading={isLoading}
        >
          Sign Up
        </LoadingButton>
      )}
    </Box>
  );
};

export default FormRegister;
