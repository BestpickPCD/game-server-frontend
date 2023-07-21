import { ReactNode } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

import { Box, useTheme } from '@mui/material';

interface ScrollbarProps {
  children?: ReactNode;
}

const Scrollbar = ({ children, ...rest }: ScrollbarProps): JSX.Element => {
  const theme = useTheme();

  return (
    <Scrollbars
      autoHide
      renderThumbVertical={() => (
        <Box
          sx={{
            width: 5,
            background: `${theme.colors.alpha.black[10]}`,
            borderRadius: `${theme.general.borderRadiusLg}`,
            transition: `${theme.transitions.create(['background'])}`,

            '&:hover': {
              background: `${theme.colors.alpha.black[30]}`
            }
          }}
        />
      )}
      {...rest}
    >
      {children}
    </Scrollbars>
  );
};

export default Scrollbar;
