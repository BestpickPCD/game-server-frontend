import { Box, Grid, Typography, Button } from '@mui/material';
import Chart from 'react-apexcharts';
import ApexChartOptions from './apexComponents';

const AffiliatedAgentCard = ({ data }: { data }): JSX.Element => {
  const deposit = -data?.allSums?.deposit ?? 0;
  const withdraw = data?.allSums?.withdraw ?? 0;
  const agentAddBalance = data?.allSums?.['agent.add_balance'] ?? 0;
  const userAddBalance = -data?.allSums?.['user.add_balance'] ?? 0;
  const bet = -data?.allSums?.bet ?? 0;
  const win = data?.allSums?.win ?? 0;
  const cancel = data?.allSums?.cancel ?? 0;

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
    <Grid key={data.username} item xs={12}>
      <Box p={1} display={'flex'} alignItems="flex-start">
        <Box pl={2}>
          <Typography gutterBottom variant="subtitle2">
            {data.username}
          </Typography>
          <Typography variant="h4" gutterBottom>
            {data.username}
          </Typography>
          <Button variant="outlined" size="small">
            {data.username}
          </Button>
        </Box>
        <Box pl={1} sx={{ marginTop: '-30px' }}>
          <Chart options={options} series={series} type="bar" height={150} />
        </Box>
      </Box>
    </Grid>
  );
};

export default AffiliatedAgentCard;
