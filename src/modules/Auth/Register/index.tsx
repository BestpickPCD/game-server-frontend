import { Box, Typography } from '@mui/material';
import AuthLayout from '../AuthLayout';

import { Link } from 'react-router-dom';
import FormRegister from './FormRegister';

const Register = (): JSX.Element => (
  <AuthLayout>
    <Box>
      <Typography component="h1" variant="h5" width="100%" textAlign="center">
        Sign Up
      </Typography>
      <FormRegister />
    </Box>
    <Box width="100%" textAlign="right">
      <Link to="/login">Already have account? Sign in</Link>
    </Box>
  </AuthLayout>
);
export default Register;
