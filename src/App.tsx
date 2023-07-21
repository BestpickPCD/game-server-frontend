import { useRoutes } from 'react-router-dom';
import router from 'src/router';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = (): JSX.Element => {
  const content = useRoutes(router);
  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <CssBaseline />
        {content}
        <ToastContainer />
      </LocalizationProvider>
    </ThemeProvider>
  );
};
export default App;
