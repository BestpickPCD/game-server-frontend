import {
  Box,
  Card,
  CardHeader,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField
} from '@mui/material';

import { useEffect, useState } from 'react';
import { useGetUserByIdMutation } from 'src/services/userService';
import { UserDashboard } from '.';
import GenerateApi from './generateApi';
import ProfileFormSubmit from './profileFormSubmit';
import BalanceSummary from './balanceSummary/indes';
import { FormattedMessage } from 'react-intl';

interface ProfileCoverProps {
  user: UserDashboard;
}

const UserInfo = ({ user }: ProfileCoverProps): JSX.Element => {
  const [getUserDetail] = useGetUserByIdMutation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [response, setResponse] = useState<any | null>(null);

  useEffect(() => {
    async function fetchUserDetail() {
      try {
        const result = await getUserDetail(`${user?.id}`).unwrap();
        setResponse(result);
      } catch (error) {
        console.log(error);
      }
    }
    if (user?.id) {
      fetchUserDetail();
    }
  }, [user]);

  const { data } = response || {};

  return (
    <>
      <Box py={2} pl={2} mb={3}>
        <Card>
          <CardHeader title={user.name} />
          <Divider />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      label={<FormattedMessage id="label.name" />}
                      required
                      disabled
                      autoComplete="off"
                      value={user?.username ?? ''}
                    />
                  </TableCell>
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      label={<FormattedMessage id="label.join-time" />}
                      required
                      disabled
                      autoComplete="off"
                      value={new Date(data?.createdAt).toLocaleString() ?? ''}
                    />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      label={<FormattedMessage id="label.type" />}
                      required
                      disabled
                      autoComplete="off"
                      value={user?.type ?? ''}
                    />
                  </TableCell>
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      disabled
                      label={<FormattedMessage id="label.parent-agent" />}
                      required
                      autoComplete="off"
                      value={data?.parent?.username ?? 'No higher agent'}
                    />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left" colSpan={2}>
                    <GenerateApi data={{ apiKey: data?.apiKey }} />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <BalanceSummary user={user} />
          <ProfileFormSubmit
            data={{
              userId: user?.id,
              accountNumber: user?.accountNumber,
              callbackUrl: user?.callbackUrl,
              apiCall: user?.apiCall
            }}
          />
        </Card>
      </Box>
    </>
  );
};

export default UserInfo;
