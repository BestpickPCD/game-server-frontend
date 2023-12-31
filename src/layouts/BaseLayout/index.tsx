import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

interface BaseLayoutProps {
  children?: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps): JSX.Element => (
  <Box
    sx={{
      flex: 1,
      height: '100%'
    }}
  >
    {children || <Outlet />}
  </Box>
);

export default BaseLayout;
