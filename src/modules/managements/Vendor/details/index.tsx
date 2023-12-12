/* eslint-disable @typescript-eslint/no-explicit-any */
// import * as React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import {
  useGetVendorByIdQuery,
  useGetVendorGameListsByIdQuery
} from 'src/services/vendorService';

import { Grid } from '@mui/material';
import VendorModal from '../VendorModal';
import { useGetGamesQuery } from 'src/services/gameService';
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
  const [searchParams] = useSearchParams();
  const { data } = useGetGamesQuery(
    {
      vendors: searchParams.get('name')
    },
    {
      skip: !searchParams.get('name'),
      refetchOnMountOrArgChange: true
    }
  );
  console.log(data);

  const { data: vendorDetailData, refetch } = useGetVendorByIdQuery(
    { id: slug },
    { skip: !slug }
  );

  return (
    <>
      {vendorDetailData && (
        <VendorModal
          isCreate={false}
          vendorData={vendorDetailData}
          refetch={refetch}
          slug={Number(slug)}
        />
      )}

      <Grid container columns={{ xs: 8, sm: 12, md: 16, lg: 20 }}>
        {(data as any[])?.map((row, index) => (
          <Grid item xs={4} sm={4} md={4} lg={4} position="relative">
            <div style={{ padding: '10px' }}>
              <div className="game-detail">
                <div className="card">
                  <img src={row.img} alt="" loading="lazy" />
                  <div className="card-content">
                    <span className="game-title">{row.name}</span>
                    {/* <p>
                      <button className="button-85" role="button">
                        Play
                      </button>
                    </p> */}
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
