/* eslint-disable @typescript-eslint/no-explicit-any */
// import * as React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useGetVendorByIdQuery } from 'src/services/vendorService';

import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useGetGamesQuery } from 'src/services/gameService';
import VendorModal from '../VendorModal';
// import { TablePagination } from '@mui/material';

const getColor = (index: number) => {
  if (index % 4 === 0) {
    return 'rgba(255, 255, 255, 0.1)';
  }
  if (index % 4 === 1) {
    return 'rgba(148, 170, 237, 0.1)';
  }
  if (index % 4 === 2) {
    return 'rgba(166, 235, 185, 0.1)';
  }
  if (index % 4 === 3) {
    return 'rgba(224, 234, 139, 0.1)';
  }
  return 'rgba(94, 29, 29, 0.1)';
};

export default function VendorsDetails(): JSX.Element {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const [isLoadingImage, setIsLoadingImage] = useState([]);
  const { data } = useGetGamesQuery(
    {
      vendors: searchParams.get('name')
    },
    {
      skip: !searchParams.get('name'),
      refetchOnMountOrArgChange: true
    }
  );

  const { data: vendorDetailData, refetch } = useGetVendorByIdQuery(
    { id: slug },
    { skip: !slug, refetchOnMountOrArgChange: true }
  );

  useEffect(() => {
    if (data?.length) {
      const promiseCheckLoad = (image) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = image;

          if (img.complete) {
            return resolve(true);
          }
          img.onload = function () {
            return resolve(true);
          };
          img.onerror = function () {
            return resolve(false);
          };
        });

      const promises = data.map((item) => promiseCheckLoad(item.img));
      Promise.all(promises)
        .then((result) => {
          setIsLoadingImage(result);
        })
        .catch((error) => {
          setIsLoadingImage(error);
        });
    }
    return () => {
      setIsLoadingImage([]);
    };
  }, [data, searchParams]);

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

      <Grid
        container
        columns={{ xs: 8, sm: 12, md: 16, lg: 20 }}
        spacing={2}
        padding={3}
      >
        {data?.map((row, index) => (
          <Grid
            item
            xs={4}
            sm={4}
            md={4}
            lg={4}
            position="relative"
            key={`${row.url}-${index}`}
          >
            <Box height="100%" width="100%">
              <div className="game-detail">
                <div className="card">
                  <img
                    src={row.img}
                    alt=""
                    loading="lazy"
                    style={{
                      display: isLoadingImage[index] ? 'block' : 'none'
                    }}
                  />
                  <Box
                    display={isLoadingImage[index] ? 'none' : 'block'}
                    width="100%"
                    height="100%"
                  >
                    <Box
                      textAlign="center"
                      position={'absolute'}
                      top="50%"
                      left="50%"
                      width="100%"
                      zIndex={100}
                      sx={{ transform: 'translate(-50%, -50%)' }}
                    >
                      <CircularProgress />
                      <Typography style={{ opacity: 1 }}>Loading...</Typography>
                    </Box>
                  </Box>
                  <div className="override-circle">
                    <div
                      className="circle"
                      style={{ background: getColor(index) }}
                    />
                  </div>
                  <div className="card-content">
                    <span className="game-title" title={row.name}>
                      {row.name}
                    </span>
                  </div>
                </div>
              </div>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
