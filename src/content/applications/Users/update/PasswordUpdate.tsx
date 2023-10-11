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

  const [GetApiKey, { isLoading: isLoadingUpdate }] = useGetApiKeyMutation();
  const generateApiKey = async () => {
    try {
      const { token } = (await GetApiKey({}).unwrap()) as { token: string };
      console.log(token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box py={2} pl={2} mb={3}>
        <Card>
          <CardHeader title={user.name} />
          <Divider />
          <CardHeader title={'Password Update'} />
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
                      label="User Id"
                      required
                      helperText={'error'}
                      autoComplete="off"
                      value={user.id}
                    />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      label="Old Password"
                      required
                      helperText={'error'}
                      autoComplete="off"
                    />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      label="New Passoword"
                      required
                      helperText={'error'}
                      autoComplete="off"
                    />
                  </TableCell>
                </TableRow>

                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      label="Passowrd Confirm"
                      required
                      helperText={'error'}
                      autoComplete="off"
                    />
                  </TableCell>
                </TableRow>
                <div>
                  <LoadingButton
                    loading={isLoadingUpdate}
                    variant="outlined"
                    sx={{ marginLeft: 2, padding: 1.5 }}
                    onClick={generateApiKey}
                  >
                    {'Generate'}
                  </LoadingButton>
                </div>
              </TableBody>
            </Table>
          </TableContainer>
          <Divider />
        </Card>
      </Box>
    </>
  );
};

export default UserInfo;
