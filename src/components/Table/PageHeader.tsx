import { Typography, Button, Grid, Box } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import Breadcrumbs from '../Breadcrumbs';
import { Breadcrumbs as BreadcrumbsType } from '../Breadcrumbs/type';
import { memo } from 'react';

interface PageHeaderProps {
  headerTitle: string;
  headerSubtitle: string;
  onOpenModal: () => void;
  breadcrumbs: BreadcrumbsType[];
}
const PageHeader = ({
  headerTitle,
  headerSubtitle,
  onOpenModal,
  breadcrumbs
}: PageHeaderProps): JSX.Element => (
  <Grid container justifyContent="space-between" alignItems="center">
    <Grid item>
      <Typography variant="h3" component="h3" gutterBottom>
        {headerTitle}
      </Typography>
      <Typography variant="subtitle2">{headerSubtitle}</Typography>
      {breadcrumbs && (
        <Box marginTop="8px">
          <Breadcrumbs links={breadcrumbs} />
        </Box>
      )}
    </Grid>
    <Grid item>
      <Button
        sx={{ mt: { xs: 2, md: 0 } }}
        variant="contained"
        startIcon={<AddTwoToneIcon fontSize="small" />}
        onClick={onOpenModal}
      >
        Create
      </Button>
    </Grid>
  </Grid>
);

export default memo(PageHeader);
