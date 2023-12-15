import { Box, Card, Grid, Skeleton, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { useGetDashboardQuery } from 'src/services/userService';

const AccountBalance = (): JSX.Element => {
  const { data, isFetching } = useGetDashboardQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );

  return (
    <Box>
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}
        pt={4}
        pb={2}
        spacing={2}
      >
        <Grid item xs={4} sm={4} md={4} lg={4}>
          <Card sx={{ p: 2 }}>
            <Typography
              variant="h5"
              width="90%"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              pb={1}
            >
              <FormattedMessage id="title.current.holding.amount" />
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h1" gutterBottom>
                {isFetching ? (
                  <Skeleton animation="wave" height={44} width={100} />
                ) : (
                  data?.balance.balance
                )}
              </Typography>
              {isFetching ? (
                <Skeleton animation="wave" height={44} width={40} />
              ) : (
                <Typography variant="h5">POT</Typography>
              )}
            </Box>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4}>
          <Card sx={{ p: 2 }}>
            <Typography
              variant="h5"
              width="90%"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              pb={1}
            >
              <FormattedMessage id="title.sub.agent.current.total.holding.amount" />
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              {isFetching ? (
                <Skeleton animation="wave" height={44} width={100} />
              ) : (
                <Typography variant="h1" gutterBottom>
                  {data?.balanceOfChildAgents}
                </Typography>
              )}
              {isFetching ? (
                <Skeleton animation="wave" height={44} width={40} />
              ) : (
                <Typography variant="h5">POT</Typography>
              )}
            </Box>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4}>
          <Card sx={{ p: 2 }}>
            <Typography
              variant="h5"
              width="90%"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              pb={1}
            >
              <FormattedMessage id="title.current.total.amount.held.by.sub.users" />
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              {isFetching ? (
                <Skeleton animation="wave" height={44} width={100} />
              ) : (
                <Typography variant="h1" gutterBottom>
                  {data?.balanceOfChildUsers}
                </Typography>
              )}
              {isFetching ? (
                <Skeleton animation="wave" height={44} width={40} />
              ) : (
                <Typography variant="h5">POT</Typography>
              )}
            </Box>
          </Card>
        </Grid>
      </Grid>
      <Grid container columns={{ xs: 4, sm: 8, md: 12, lg: 16 }} spacing={2}>
        <Grid item xs={4} sm={4} md={4} lg={4}>
          <Card sx={{ p: 2 }}>
            <Typography
              variant="h5"
              width="90%"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              pb={1}
            >
              <FormattedMessage id="title.total.number.of.subagents" />
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              {isFetching ? (
                <Skeleton animation="wave" height={44} width={100} />
              ) : (
                <Typography variant="h1" gutterBottom>
                  {data?.totalSubAgent}
                </Typography>
              )}
            </Box>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4}>
          <Card sx={{ p: 2 }}>
            <Typography
              variant="h5"
              width="90%"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              pb={1}
            >
              <FormattedMessage id="title.number.of.distribution.sub.agents" />
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              {isFetching ? (
                <Skeleton animation="wave" height={44} width={100} />
              ) : (
                <Typography variant="h1" gutterBottom>
                  {data?.distributionSubAgent}
                </Typography>
              )}
            </Box>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4}>
          <Card sx={{ p: 2 }}>
            <Typography
              variant="h5"
              width="90%"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              pb={1}
            >
              <FormattedMessage id="title.number.of.operations.sub.agents" />
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              {' '}
              {isFetching ? (
                <Skeleton animation="wave" height={44} width={100} />
              ) : (
                <Typography variant="h1" gutterBottom>
                  {data?.operationSubAgent}
                </Typography>
              )}
            </Box>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4}>
          <Card sx={{ p: 2 }}>
            <Typography
              variant="h5"
              width="90%"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              pb={1}
            >
              <FormattedMessage id="title.number.of.parallel.sub.agents" />
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              {isFetching ? (
                <Skeleton animation="wave" height={44} width={100} />
              ) : (
                <Typography variant="h1" gutterBottom>
                  {data?.parallelSubAgent}
                </Typography>
              )}
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AccountBalance;
