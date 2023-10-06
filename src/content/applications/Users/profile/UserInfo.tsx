import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Tooltip
} from '@mui/material';
import { styled } from '@mui/material/styles';

import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import { UserDashboard } from '.';
import { useEffect, useState } from 'react';
import {
  useGetUserByIdMutation,
  useGetApiKeyMutation
} from 'src/services/userService';
import { width } from '@mui/system';
import { LoadingButton } from '@mui/lab';
import ProfileFormSubmit from './profileFormSubmit';
import GenerateApi from './generateApi';

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

    fetchUserDetail();
  }, []);

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
                      label="Username"
                      required
                      disabled
                      autoComplete="off"
                      value={user?.username ?? ''}
                    />
                  </TableCell>
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      label="Join time"
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
                      label="Type"
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
                      label="Upper Agent"
                      required
                      autoComplete="off"
                      value={
                        data?.Agents?.parentAgent?.username ?? 'No higher agent'
                      }
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
          <CardHeader title={'Balance Summaries'} />
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
                      label="Current holding amount"
                      required
                      autoComplete="off"
                      value={user?.balance?.balance ?? 0}
                    />
                  </TableCell>
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      label="Subagent current total holding amount"
                      required
                      autoComplete="off"
                      value={user?.balance?.balance ?? 0}
                    />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      label="Current total amount held by sub-users"
                      required
                      autoComplete="off"
                      value={user?.balance?.balance ?? 0}
                    />
                  </TableCell>
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      label="Rate"
                      required
                      autoComplete="off"
                      value={data?.rate ?? ''}
                    />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      label="Total amount paid"
                      required
                      autoComplete="off"
                      value={user?.balance?.sendOut ?? ''}
                    />
                  </TableCell>
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      label="Total recharged amount"
                      required
                      autoComplete="off"
                      value={user?.balance?.balance ?? 0}
                    />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      label="Number of sub-agents"
                      required
                      autoComplete="off"
                      value={user?.balance?.balance ?? 0}
                    />
                  </TableCell>
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      label="Number of lower users"
                      required
                      autoComplete="off"
                      value={user?.balance?.balance ?? 0}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
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
