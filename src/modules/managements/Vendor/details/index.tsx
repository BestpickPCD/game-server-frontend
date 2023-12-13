/* eslint-disable @typescript-eslint/no-explicit-any */
// import * as React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useGetVendorByIdQuery } from 'src/services/vendorService';

import { Box, CircularProgress, Grid } from '@mui/material';
import VendorModal from '../VendorModal';
import { useGetGamesQuery } from 'src/services/gameService';
import { useEffect, useRef, useState } from 'react';
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
  const imgRefs = useRef<HTMLImageElement[]>([]);
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
      setIsLoadingImage(Array.from({ length: data.length }).map(() => false));
    }
  }, [data]);

  useEffect(() => {
    const loadImage = (img) =>
      new Promise((resolve) => {
        if (img.complete && img.naturalHeight !== 0) {
          return resolve(true);
        }
        return resolve(false);
      });

    if (data && imgRefs && imgRefs.current && imgRefs.current.length) {
      const promises = imgRefs.current.map((img) => loadImage(img));
      Promise.all(promises).then((results) => {
        setIsLoadingImage(results);
      });
    }
  }, [data, imgRefs]);

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
        {(data as any[])?.map((row, index) => (
          <Grid item xs={4} sm={4} md={4} lg={4} position="relative">
            <Box height="100%" width="100%">
              <div
                className="game-detail"
                style={{
                  display: `${isLoadingImage[index] ? 'block' : 'none'}`
                }}
              >
                <div className="card">
                  <img
                    src={row.img}
                    alt=""
                    loading="lazy"
                    ref={(element) =>
                      ((imgRefs as any).current[index] = element)
                    }
                  />
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
              <div
                className="game-detail"
                style={{
                  position: 'relative',
                  display: `${isLoadingImage[index] ? 'none' : 'block'}`
                }}
              >
                <Box
                  position={'absolute'}
                  top="50%"
                  left="50%"
                  sx={{ transform: 'translate(-50%, -50%)' }}
                  display="block"
                  textAlign="center"
                >
                  <CircularProgress />
                  <p>Loading...</p>
                </Box>
                <div className="card">
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
