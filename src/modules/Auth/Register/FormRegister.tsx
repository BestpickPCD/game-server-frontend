import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Grid, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useRegisterMutation } from 'src/services/authService';
import { useToast } from 'src/utils/hooks';
import { Select } from 'src/components/MUIComponents';
import { LoadingButton } from '@mui/lab';
import * as yup from 'yup';
import { useEffect, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { useRolesQuery } from 'src/services/commonServices';
import { useGetAffiliatedAgentsQuery } from 'src/services/agentService';

const schema = yup.object().shape({
  username: yup
    .string()
    .trim('Username no space')
    .matches(/[a-zA-Z]/, 'Username can only contain letters.')
    .required('Username is required'),
  name: yup
    .string()
    .matches(/[a-zA-Z]/, 'Name can only contain letters.')
    .required('First name is required'),
  type: yup.string().required('Type is required'),
  rate: yup.number().required('Rate is required'),
  parentAgentId: yup.number().required('Rate is required'),
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

  const { data: affAgentData } = useGetAffiliatedAgentsQuery({
    refetchOnMountOrArgChange: true
  });

  const { notify, message } = useToast();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      rate: 0,
      email: '',
      username: '',
      parentAgentId: 0,
      type: 'agent',
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

  const { data: rolesData } = useRolesQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );

  const isRoleArray = Array.isArray(affAgentData);

  const affAgentOptions = useMemo(() => {
    if (isRoleArray) {
      return affAgentData.map((role) => ({
        id: role.id,
        name: role.name,
        value: role.id
      }));
    }
    return [];
  }, [affAgentData]);

  const roleOptions = useMemo(
    () =>
      rolesData?.data?.data?.map((role) => ({
        id: role.id,
        name: role.name,
        value: role.id
      })),
    [rolesData]
  );

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
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Name"
            autoFocus
            sx={{ my: 1 }}
            error={!!errors['name']}
            helperText={errors['name'] ? errors['name'].message : ''}
            {...register('name')}
            onBlur={(e) => setValue('name', e.target.value.trim())}
          />
        </Grid>
        <Grid item xs={8}>
          <Select
            label="Agent"
            name="parentAgentId"
            control={control}
            options={affAgentOptions}
            sx={{ my: 2 }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            fullWidth
            label="Rate"
            autoFocus
            sx={{ my: 1 }}
            error={!!errors['rate']}
            helperText={errors['rate'] ? errors['rate'].message : ''}
            {...register('rate')}
            onBlur={(e) => setValue('rate', parseFloat(e.target.value.trim()))}
          />
        </Grid>
        <Grid item xs={8}>
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
        </Grid>
        <Grid item xs={4}>
          <Select
            label="Role"
            name="roleId"
            control={control}
            options={roleOptions}
            sx={{ my: 2 }}
          />
        </Grid>
        <Grid item xs={12}>
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
        </Grid>
        <Grid item xs={6}>
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
        </Grid>
        <Grid item xs={6}>
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
        </Grid>
      </Grid>
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
