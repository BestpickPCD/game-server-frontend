import {
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
import { UserDashboard } from '..';

const BalanceSummary = (data: { user: UserDashboard }): JSX.Element => {
  const { user } = data;
  const { balance, balanceAsAgent } = user;

  return (
    <>
      <CardHeader title={'Balance Summaries'} />
      <Divider />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" colSpan={6}>
                <TextField
                  type="number"
                  fullWidth
                  label="Balance"
                  helperText="Current balance"
                  required
                  autoComplete="off"
                  value={balance?.balance ?? 0}
                />
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" colSpan={2}>
                <TextField
                  type="number"
                  fullWidth
                  label="Total amount transferred from Admin"
                  helperText="Total amount received from Admin"
                  required
                  autoComplete="off"
                  value={balance?.['agent.add_balance'] ?? 0}
                />
              </TableCell>
              <TableCell align="left" colSpan={2}>
                <TextField
                  type="number"
                  fullWidth
                  label="Recieved from Agents"
                  helperText="Total amount received from agents"
                  required
                  autoComplete="off"
                  value={-balance?.['user.add_balance'] ?? 0}
                />
              </TableCell>
              <TableCell align="left" colSpan={2}>
                <TextField
                  type="number"
                  fullWidth
                  label="Transferred to users"
                  helperText="Total amount transferred to users"
                  required
                  autoComplete="off"
                  value={-balanceAsAgent?.['user.add_balance'] ?? 0}
                />
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" colSpan={3}>
                <TextField
                  type="number"
                  fullWidth
                  label="Win"
                  helperText="Total gain from Winning"
                  required
                  autoComplete="off"
                  value={balanceAsAgent?.win ?? 0}
                />
              </TableCell>
              <TableCell align="left" colSpan={3}>
                <TextField
                  type="number"
                  fullWidth
                  label="Bet"
                  helperText="Total amount from Betting"
                  required
                  autoComplete="off"
                  value={-balanceAsAgent?.bet ?? 0}
                />
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" colSpan={3}>
                <TextField
                  type="number"
                  fullWidth
                  label="Total withdraw"
                  helperText="Total amount players have withdrawn"
                  required
                  autoComplete="off"
                  value={balanceAsAgent?.withdraw ?? 0}
                />
              </TableCell>
              <TableCell align="left" colSpan={3}>
                <TextField
                  type="number"
                  fullWidth
                  label="Total deposit"
                  helperText="Total amount players have deposited"
                  required
                  autoComplete="off"
                  value={-balanceAsAgent?.deposit ?? 0}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default BalanceSummary;
