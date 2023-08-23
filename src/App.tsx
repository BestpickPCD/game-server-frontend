import { CssBaseline } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { default as enLanguage } from 'src/locales/en.json';
import { default as koLanguage } from 'src/locales/ko.json';
import router from 'src/router';
import 'src/styles/index.scss';
import { RootState } from './app/store';
import ThemeProvider from './theme/ThemeProvider';
const messages = {
  en: enLanguage,
  ko: koLanguage
};

const App = (): JSX.Element => {
  const content = useRoutes(router);

  const { lang } = useSelector((state: RootState) => state.common);

  return (
    <IntlProvider locale={lang || 'en'} messages={messages[lang || 'en']}>
      <ThemeProvider>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <CssBaseline />
          {content}
          <ToastContainer />
        </LocalizationProvider>
      </ThemeProvider>
    </IntlProvider>
  );
};
export default App;
