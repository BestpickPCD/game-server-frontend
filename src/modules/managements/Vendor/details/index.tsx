/* eslint-disable @typescript-eslint/no-explicit-any */
// import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useGetVendorGameListsByIdQuery } from 'src/services/vendorService';

import { Button, Grid, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from 'src/components/Table/PageHeader';
import { useModal } from 'src/utils/hooks';
// import { TablePagination } from '@mui/material';

const getColor = (index: number) => {
  if (index % 4 === 0) {
    return 'orange';
  }
  if (index % 4 === 1) {
    return 'red';
  }
  if (index % 4 === 2) {
    return 'blue';
  }
  if (index % 4 === 3) {
    return 'yellow';
  }
  return 'green';
};

export default function VendorsDetails(): JSX.Element {
  const { slug } = useParams();
  const { data } = useGetVendorGameListsByIdQuery({ vendors: 1 });

  return (
    <>
      <Grid container columns={{ xs: 8, sm: 12, md: 16, lg: 20 }}>
        {(data?.data as any[])?.map((row, index) => (
          <Grid item xs={4} sm={4} md={4} lg={4} position="relative">
            <div style={{ padding: '10px' }}>
              <div className="game-detail">
                <div className="card">
                  <img src={`http://${row.img}`} alt="" />
                  <div className="card-content">
                    <span className="game-title">{row.name}</span>
                    <p>
                      <button className="button-85" role="button">
                        Play
                      </button>
                    </p>
                  </div>
                </div>
                <div className="override-circle">
                  <div
                    className="circle"
                    style={{ background: getColor(index) }}
                  />
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
