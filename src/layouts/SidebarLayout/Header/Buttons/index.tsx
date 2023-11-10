import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { getLang } from 'src/app/commonSlice';
import { User } from 'src/models';
import HeaderNotifications from './Notifications';
import HeaderSearch from './Search';

const HeaderButtons = ({ user }: { user: User }): JSX.Element => {
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

  const handleClick = () => {
    window.open(
      `${process.env.REACT_APP_CHAT_URL}/?id=${
        user.id
      }&tokens=${localStorage.getItem('tokens')}`,
      '_blank',
      'location=yes,height=570,width=520,scrollbars=yes,status=yes'
    );
  };

  return (
    <Box sx={{ mr: 1 }} display="flex" alignItems="center" gap="2px">
      <Button variant="outlined" onClick={handleClick}>
        <Typography>Chat</Typography>
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
