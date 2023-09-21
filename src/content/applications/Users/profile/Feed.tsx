import {
  Box,
  Typography,
  Card,
  CardHeader,
  Divider,
  Avatar,
  Grid,
  Button
} from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
interface AffiliatedAgent {
  id: number;
  name: string;
  username: string;
  email: string;
}
const Feed = ({ users }: { users: AffiliatedAgent[] }): JSX.Element => {
  const feed = users;

  return (
    <Card>
      <CardHeader title="Followers Feed" />
      <Divider />
      <Box p={2}>
        <Grid container spacing={0}>
          {feed.map((_feed) => (
            <Grid key={_feed.name} item xs={12} sm={6} lg={4}>
              <Box p={3} display="flex" alignItems="flex-start">
                <Box pl={2}>
                  <Typography gutterBottom variant="subtitle2">
                    {_feed.username}
                  </Typography>
                  <Typography variant="h4" gutterBottom>
                    {_feed.name}
                  </Typography>
                  <Typography color="text.primary" sx={{ pb: 2 }}>
                    {_feed.email}
                  </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<AddTwoToneIcon />}
                  >
                    Follow
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Card>
  );
};

export default Feed;
