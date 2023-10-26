import { Typography, Avatar, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useGetDashboardQuery } from 'src/services/userService';

const PageHeader = (): JSX.Element => {
  const { data } = useGetDashboardQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );

  const theme = useTheme();

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Avatar
          sx={{
            mr: 2,
            width: theme.spacing(8),
            height: theme.spacing(8)
          }}
          variant="rounded"
          alt={data?.name}
          src={'/static/images/avatars/1.jpg'}
        />
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Welcome, {data?.name}
        </Typography>
        <Typography variant="subtitle2">{data?.type}</Typography>
      </Grid>
    </Grid>
  );
};

export default PageHeader;
