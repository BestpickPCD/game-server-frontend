/* eslint-disable @typescript-eslint/no-unused-vars */
import SaveIcon from '@mui/icons-material/Save';
import { LoadingButton } from '@mui/lab';
import { Button, Container, Divider } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import { ReactNode } from 'react';

interface ModalProps {
  title: string;
  open: boolean;
  children: ReactNode;
  isLoading?: boolean;
  onClose: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onOk?: () => void;
}

function Modals({
  title,
  children,
  open,
  isLoading = false,
  onClose,
  onOk
}: ModalProps): JSX.Element {
  return (
    <Dialog onClose={onClose} open={open}>
      {title && <DialogTitle variant="h4">{title}</DialogTitle>}
      {title && <Divider />}
      <List sx={{ pt: 0 }}>{children}</List>
      <Divider />
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '16px',
          padding: '12px 0'
        }}
      >
        <Button variant="outlined" sx={{ width: '80px' }} onClick={onClose}>
          Cancel
        </Button>
        {onOk && (
          <LoadingButton
            onClick={onOk}
            loading={isLoading}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="contained"
            sx={{ width: '80px' }}
            type="submit"
          >
            OK
          </LoadingButton>
        )}
      </Container>
    </Dialog>
  );
}

export default Modals;
