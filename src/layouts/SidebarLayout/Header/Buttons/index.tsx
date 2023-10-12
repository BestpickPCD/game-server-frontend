import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material';
import HeaderSearch from './Search';
import HeaderNotifications from './Notifications';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getLang } from 'src/app/commonSlice';
import { FormattedMessage } from 'react-intl';

const HeaderButtons = (): JSX.Element => {
  const [lang, setLang] = useState('en');
  const dispatch = useDispatch();
  const onChangeLanguage = (e: SelectChangeEvent) => {
    setLang(e.target.value);
    localStorage.setItem('lang', e.target.value);
    dispatch(getLang(e.target.value));
  };

  useEffect(() => {
    const localStorageLang = localStorage.getItem('lang');
    if (localStorageLang) {
      dispatch(getLang(localStorageLang));
      return setLang(localStorageLang);
    }
    dispatch(getLang('en'));
    return setLang('en');
  }, []);

  const handleOpenNewWindow = () => {
    window.open(
      `https://chat-service-frontend.vercel.app/?token=${localStorage.getItem(
        'tokens'
      )}&user=${localStorage.getItem('user')}`,
      '_blank',
      'width=600,height=400'
    );
  };

  console.log(process.env.NEXT_PUBLIC_CHAT_URL);

  return (
    <Box sx={{ mr: 1 }} display="flex" alignItems="center" gap="2px">
      <Button onClick={handleOpenNewWindow} variant="outlined">
        Chat
      </Button>
      <HeaderSearch />
      <Box sx={{ mx: 0.5 }} component="span">
        <HeaderNotifications />
      </Box>
      <FormControl sx={{ width: '120px', marginLeft: '8px' }}>
        <InputLabel id="demo-simple-select-label">
          <FormattedMessage id="label.languages" />
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lang}
          label={<FormattedMessage id="label.languages" />}
          onChange={onChangeLanguage}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="ko">Korean</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
export default HeaderButtons;
