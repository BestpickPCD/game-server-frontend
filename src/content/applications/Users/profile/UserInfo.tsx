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

const AvatarWrapper = styled(Card)(
  ({ theme }) => `

    position: relative;
    overflow: visible;
    display: inline-block;
    margin-top: -${theme.spacing(9)};
    margin-left: ${theme.spacing(2)};

    .MuiAvatar-root {
      width: ${theme.spacing(16)};
      height: ${theme.spacing(16)};
    }
`
);

const CardCover = styled(Card)(
  ({ theme }) => `
    position: relative;

    .MuiCardMedia-root {
      height: ${theme.spacing(26)};
    }
`
);

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
      <Box display="flex" mb={3}>
        <Tooltip arrow placement="top" title="Go back">
          <IconButton color="primary" sx={{ p: 2, mr: 2 }}>
            <ArrowBackTwoToneIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <CardCover>
        <CardMedia image={user.coverImg} />
      </CardCover>
      <AvatarWrapper>
        <Avatar variant="rounded" alt={user.name} src={user.avatar} />
      </AvatarWrapper>
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
                  <TableCell colSpan={2} align="left">
                    <TextField
                      fullWidth
                      label="Number"
                      required
                      helperText={'error'}
                      autoComplete="off"
                      value={user?.username ?? ''}
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
                      helperText={'error'}
                      autoComplete="off"
                      value={user?.type ?? ''}
                    />
                  </TableCell>
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      label="Affiliated agent"
                      required
                      helperText={'error'}
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
                      label="Id"
                      required
                      helperText={'error'}
                      autoComplete="off"
                      value={user?.id ?? ''}
                    />
                  </TableCell>
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      label="Join time"
                      required
                      helperText={'error'}
                      autoComplete="off"
                      value={data?.createdAt ?? ''}
                    />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      label="Nickname"
                      required
                      helperText={'error'}
                      autoComplete="off"
                      value={data?.nickname ?? ''}
                    />
                  </TableCell>
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      label="Account number"
                      required
                      helperText={'error'}
                      autoComplete="off"
                      value={data?.accountNumber ?? ''}
                    />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell colSpan={2} align="left">
                    <TextField
                      fullWidth
                      label="API KEY"
                      required
                      helperText={'error'}
                      autoComplete="off"
                      value={data?.apiKey ?? ''}
                    />
                    <Button variant="contained">
                      {'Generate'}
                    </Button>
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
