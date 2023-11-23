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
import { FormattedMessage } from 'react-intl';

const BalanceSummary = (data: { user: UserDashboard }): JSX.Element => {
  const { user } = data;
  const { balance, balanceAsAgent } = user;

  return (
    <>
      <CardHeader title={<FormattedMessage id="label.balance-summaries" />} />
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
                  label={<FormattedMessage id="label.balance" />}
                  helperText={<FormattedMessage id="label.current-balance" />}
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
                  label={<FormattedMessage id="label.admin" />}
                  helperText={<FormattedMessage id="label.from-admin" />}
                  required
                  autoComplete="off"
                  value={balance?.['agent.add_balance'] ?? 0}
                />
              </TableCell>
              <TableCell align="left" colSpan={2}>
                <TextField
                  type="number"
                  fullWidth
                  label={<FormattedMessage id="label.agent" />}
                  helperText={<FormattedMessage id="label.from-agent" />}
                  required
                  autoComplete="off"
                  value={-balance?.['user.add_balance'] ?? 0}
                />
              </TableCell>
              <TableCell align="left" colSpan={2}>
                <TextField
                  type="number"
                  fullWidth
                  label={<FormattedMessage id="label.user" />}
                  helperText={<FormattedMessage id="label.to-user" />}
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
                  label={<FormattedMessage id="label.win" />}
                  helperText={<FormattedMessage id="label.from-win" />}
                  required
                  autoComplete="off"
                  value={balanceAsAgent?.win ?? 0}
                />
              </TableCell>
              <TableCell align="left" colSpan={3}>
                <TextField
                  type="number"
                  fullWidth
                  label={<FormattedMessage id="label.bet" />}
                  helperText={<FormattedMessage id="label.total-bet" />}
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
                  label={<FormattedMessage id="label.total-withdraw" />}
                  helperText={<FormattedMessage id="label.player-withdraw" />}
                  required
                  autoComplete="off"
                  value={balanceAsAgent?.withdraw ?? 0}
                />
              </TableCell>
              <TableCell align="left" colSpan={3}>
                <TextField
                  type="number"
                  fullWidth
                  label={<FormattedMessage id="label.total-deposit" />}
                  helperText={<FormattedMessage id="label.player-deposit" />}
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
