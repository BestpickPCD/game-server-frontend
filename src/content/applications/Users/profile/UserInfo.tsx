import {
  Avatar,
  Box,
  Button,
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
import { useGetUserByIdMutation } from 'src/services/userService';

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
        console.error(error);
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
                      label="Affiliated agent"
                      required
                      autoComplete="off"
                      value={user?.parentAgentId ?? ''}
                    />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      label="Account number"
                      required
                      helperText={''}
                      autoComplete="off"
                      value={data?.accountNumber ?? ''}
                    />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      label="API KEY"
                      required
                      helperText={'error'}
                      autoComplete="off"
                      value={data?.apiKey ?? ''}
                    />
                  </TableCell>
                  <TableCell align="left">
                    <Button variant="contained">{'Generate'}</Button>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      label="API call allowed IP settings"
                      required
                      helperText={'error'}
                      autoComplete="off"
                      value={data?.apiIpSetting ?? ''}
                    />
                  </TableCell>
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      label="Callback URL"
                      required
                      helperText={'error'}
                      autoComplete="off"
                      value={data?.CallbackUrl ?? ''}
                    />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      label="Current holding amount"
                      required
                      helperText={'error'}
                      autoComplete="off"
                      value={user?.balance?.balance ?? 0}
                    />
                  </TableCell>
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      label="Subagent current total holding amount"
                      required
                      helperText={'error'}
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
                      helperText={'error'}
                      autoComplete="off"
                      value={user?.balance?.balance ?? 0}
                    />
                  </TableCell>
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      label="Rate"
                      required
                      helperText={'error'}
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
                      helperText={'error'}
                      autoComplete="off"
                      value={user?.balance?.sendOut ?? ''}
                    />
                  </TableCell>
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      label="Total recharged amount"
                      required
                      helperText={'error'}
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
                      helperText={'error'}
                      autoComplete="off"
                      value={user?.balance?.balance ?? 0}
                    />
                  </TableCell>
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      label="Number of lower users"
                      required
                      helperText={'error'}
                      autoComplete="off"
                      value={user?.balance?.balance ?? 0}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Box>
    </>
  );
};

export default UserInfo;
