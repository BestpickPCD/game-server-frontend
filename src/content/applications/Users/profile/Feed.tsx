import {
  Box,
  Typography,
  Card,
  CardHeader,
  Divider,
  Avatar,
  Grid,
  Button,
  useTheme
} from '@mui/material';
import Chart from 'react-apexcharts';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { ApexOptions } from 'apexcharts';
interface AffiliatedAgent {
  id: number;
  name: string;
  username: string;
  email: string;
}

const Feed = ({ users }: { users: AffiliatedAgent[] }): JSX.Element => {
  const feed = users;

  const theme = useTheme();

  const chartOptions: ApexOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      },
      zoom: {
        enabled: false
      }
    },
    fill: {
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.1,
        inverseColors: false,
        opacityFrom: 0.8,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    colors: [theme.colors.primary.main],
    dataLabels: {
      enabled: false
    },
    theme: {
      mode: theme.palette.mode
    },
    stroke: {
      show: true,
      colors: [theme.colors.primary.main],
      width: 3
    },
    legend: {
      show: false
    },
    labels: [
      'Monday',
      'Tueday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: false,
      tickAmount: 5
    },
    tooltip: {
      x: {
        show: true
      },
      y: {
        title: {
          formatter: function () {
            return 'Price: $';
          }
        }
      },
      marker: {
        show: false
      }
    }
  };

  const chart1Data = [
    {
      name: 'Bitcoin Price',
      data: [55.701, 57.598, 48.607, 46.439, 58.755, 46.978, 58.16]
    }
  ];

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
          {feed.map((_feed) => (
            <Grid key={_feed.name} item xs={12}>
              <Box p={3} display={'flex'} alignItems="flex-start">
                <Box pl={2}>
                  <Typography gutterBottom variant="subtitle2">
                    {_feed.username}
                  </Typography>
                  <Typography variant="h4" gutterBottom>
                    {_feed.name}
                  </Typography>
                  <Button variant="outlined" size="small">
                    {_feed.email}
                  </Button>
                </Box>
                <Box pl={2} sx={{ height: 100 }}>
                  <Chart
                    options={chartOptions}
                    series={chart1Data}
                    type="area"
                    height={100}
                  />
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
