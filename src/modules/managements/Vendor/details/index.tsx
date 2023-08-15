/* eslint-disable @typescript-eslint/no-explicit-any */
// import * as React from 'react';
import { useGetVendorGameListsByIdQuery } from 'src/services/vendorService';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
// import { TablePagination } from '@mui/material';

export default function VendorsDetails(): JSX.Element {
  const { slug } = useParams();
  const { data } = useGetVendorGameListsByIdQuery({ vendors: [slug] });
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ padding: 4 }}
      >
        {(data as any[])?.map((row) => (
          <Grid item xs={2} sm={4} md={4} key={row.id}>
            <Card sx={{ display: 'flex' }}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={row.thumbnail}
                alt="Live from space album cover"
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    {row.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Type: {row.type}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
