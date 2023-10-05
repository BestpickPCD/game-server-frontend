import { Box, Card, CardHeader, Divider, Grid } from '@mui/material';
import AffiliatedAgentCard from './affiliatedAgentCard';
interface AffiliatedAgent {
  id: number;
  name: string;
  username: string;
  email: string;
  allSums: {
    winGame: {
      _sum: {
        amount: number;
      };
    };
    betGame: {
      _sum: {
        amount: number;
      };
    };
    chargeGame: {
      _sum: {
        amount: number;
      };
    };
    sentOut: {
      _sum: {
        amount: number;
      };
    };
    received: {
      _sum: {
        amount: number;
      };
    };
  };
}

const Feed = ({ users }: { users: AffiliatedAgent[] }): JSX.Element => {
  const a = 1;

  return (
    <Card>
      <CardHeader title="Affiliated Agents" />
      <Divider />
      <Box
        p={2}
        sx={{
          overflow: 'auto',
          height: '73vh'
        }}
      >
        <Grid container spacing={0}>
          {users.map((data) =>
            !Object.keys(data.allSums).length === 0 > 0 ? (
              <AffiliatedAgentCard data={data} />
            ) : null
          )}
        </Grid>
      </Box>
    </Card>
  );
};

export default Feed;
