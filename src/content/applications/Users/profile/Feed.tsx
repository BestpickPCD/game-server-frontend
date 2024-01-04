import { Alert, AlertTitle, Box, Card, Divider, Grid } from '@mui/material';
import AffiliatedAgentCard from './affiliatedAgentCard';
import { FormattedMessage } from 'react-intl';
import { LoadingButton } from '@mui/lab';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { useEffect, useState } from 'react';
import { useGetSumBalancesMutation } from 'src/services/userService';

interface Users {
  id: number;
  username: string;
  type: string;
}

const Feed = ({ users }: { users: (Users | null)[] }): JSX.Element => {
  const [charts, setCharts] = useState();
  const [userType, setUserType] = useState('player');
  const [show, setShow] = useState(true);
  const [getSumBalances] = useGetSumBalancesMutation();

  const usernames = users.reduce((acc, user) => {
    // eslint-disable-next-line no-param-reassign
    acc[user.id] = {
      username: user.username,
      id: user.id
    };
    return acc;
  }, {});

  useEffect(() => {
    if (users.length !== 0) {
      changeType(userType);
    }
  }, [users]);

  const changeType = async (userType: string) => {
    let ids = [];
    if (userType === 'player') {
      setUserType('agent');
      ids = users
        .filter((user) => user.type === 'agent')
        .map((user) => user.id);
    } else {
      setUserType('player');
      ids = users
        .filter((user) => user.type === 'player')
        .map((user) => user.id);
    }
    if (ids.length > 0) {
      try {
        const result = await getSumBalances({ userIds: ids.join(',') });
        if ('data' in result) {
          const sumBalances = result.data;
          setCharts(sumBalances.data);
        }
        setShow(true);
      } catch (error) {
        console.error('Error fetching sum balances:', error);
      }
    } else {
      setShow(false);
    }
  };
  return (
    <>
      {charts && (
        <Card>
          <Box sx={{ padding: 1 }}>
            <LoadingButton
              variant="outlined"
              fullWidth
              endIcon={<AutorenewIcon />}
              onClick={() => changeType(userType)}
            >
              {userType === 'agent' ? (
                <FormattedMessage id="label.affiliated-agent" />
              ) : (
                <FormattedMessage id="label.users" />
              )}
            </LoadingButton>
          </Box>
          <Divider />
          <Box
            p={2}
            sx={{
              overflow: 'auto',
              height: '73vh'
            }}
          >
            <Grid container spacing={0}>
              {show ? (
                Object.entries(charts).map(([chartKey, chartValue]) => (
                  <AffiliatedAgentCard
                    key={chartKey}
                    data={chartValue}
                    details={usernames[chartKey]}
                  />
                ))
              ) : (
                <Alert severity="info">
                  <AlertTitle>Warning</AlertTitle>
                  Transactions — <strong>No Transaction made</strong>
                </Alert>
              )}
            </Grid>
          </Box>
        </Card>
      )}
    </>
  );
};

export default Feed;
