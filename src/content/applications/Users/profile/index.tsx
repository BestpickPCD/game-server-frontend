import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Footer';

import { Container, Grid } from '@mui/material';

import { useGetDashboardQuery } from 'src/services/userService';
import Feed from './Feed';
import UserInfo from './UserInfo';

export interface UserDashboard {
  id: number;
  name: string;
  username: string;
  currency: {
    name: string;
    code: string;
  };
  type: string;
  accountNumber: string;
  callbackUrl: string;
  apiCall: string;
  subAgent: number;
  apiKey: string;
  parentAgentId: number;
  balance: {
    balance: number;
    calculatedBalance: number;
    sendOut: number;
    receive: number;
    bet: number;
    charge: number;
  };
  avatar: string;
  jobTitle: string;
  coverImg: string;
}

const ManagementUserProfile = (): JSX.Element => {
  const { data } = useGetDashboardQuery({ refetchOnMountOrArgChange: true });

  const user: UserDashboard = {
    id: data?.userId,
    name: data?.name,
    username: data?.username,
    currency: data?.currency,
    type: data?.type,
    accountNumber: data?.accountNumber,
    callbackUrl: data?.callbackUrl,
    apiCall: data?.apiCall,
    apiKey: data?.apiKey,
    subAgent: data?.subAgent,
    parentAgentId: data?.parentAgentId,
    balance: data?.balance,
    avatar: '/static/images/avatars/4.jpg',
    jobTitle: data?.type,
    coverImg: '/static/images/placeholders/covers/5.jpg'
  };

  return (
    <>
      <Helmet>
        <title>User Details - Management</title>
      </Helmet>
      <Container sx={{ mt: 3 }} maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} md={7}>
            <UserInfo user={user} />
          </Grid>
          <Grid item xs={12} md={5}>
            <Feed users={data?.affiliatedAgents ?? []} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default ManagementUserProfile;
