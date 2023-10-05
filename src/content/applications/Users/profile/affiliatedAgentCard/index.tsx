import { Box, Grid, Typography, Button } from '@mui/material';
import Chart from 'react-apexcharts';
import ApexChartOptions from './apexComponents';

const AffiliatedAgentCard = ({ data }: { data }): JSX.Element => {
  const sent = data?.allSums?.sentOut?._sum?.amount ?? 0;
  const received = data?.allSums?.received?._sum?.amount ?? 0;
  const lost = data?.allSums?.winGame?._sum?.amount ?? 0;
  const won = data?.allSums?.betGame?._sum?.amount ?? 0;
  const bet = data?.allSums?.chargeGame?._sum?.amount ?? 0;

  const options = ApexChartOptions;
  const series = [
    {
      data: [sent, received, lost, won, bet]
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
