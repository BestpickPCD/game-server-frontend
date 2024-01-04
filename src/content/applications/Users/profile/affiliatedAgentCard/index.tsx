import { Box, Grid, Typography, Button, Divider } from '@mui/material';
import Chart from 'react-apexcharts';
import ApexChartOptions from './apexComponents';

const AffiliatedAgentCard = ({
  data,
  details
}: {
  data;
  details;
}): JSX.Element => {
  const deposit = -data?.deposit ?? 0;
  const withdraw = data?.withdraw ?? 0;
  const agentAddBalance = data?.['agent.add_balance'] ?? 0;
  const userAddBalance = -data?.['user.add_balance'] ?? 0;
  const bet = -data?.bet ?? 0;
  const win = data?.win ?? 0;
  const cancel = data?.cancel ?? 0;

  const options = ApexChartOptions;
  const series = [
    {
      data: [
        deposit,
        withdraw,
        agentAddBalance,
        userAddBalance,
        bet,
        win,
        cancel
      ]
    }
  ];

  return (
    <>
      <Grid key={details.id} item xs={12}>
        <Box p={2}>
          <Button
            variant="outlined"
            size="small"
            fullWidth
            href={`/management/transactions/${details.id}`}
          >
            {details.username}
          </Button>
        </Box>
        <Box pl={1} sx={{ marginTop: '-30px' }}>
          <Chart options={options} series={series} type="bar" height={150} />
        </Box>
      </Grid>
    </>
  );
};

export default AffiliatedAgentCard;
