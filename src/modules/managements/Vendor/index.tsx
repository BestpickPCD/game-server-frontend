/* eslint-disable @typescript-eslint/no-explicit-any */
// import * as React from 'react';
import { Box, Grid, Switch, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from 'src/components/Table/PageHeader';
import {
  useGetVendorsQuery,
  useUpdateDirectUrlMutation
} from 'src/services/vendorService';
import { useModal, useToast } from 'src/utils/hooks';
import VendorModal from './VendorModal';

const breadcrumbs = [
  {
    link: '/dashboards',
    name: 'title.dashboard'
  },
  {
    name: 'Vendors Management'
  }
];

export default function Vendors(): JSX.Element {
  const { notify } = useToast();
  const { data } = useGetVendorsQuery({});
  const [onUpdateVendor] = useUpdateDirectUrlMutation();
  const [vendorData, setVendorData] = useState([]);

  useEffect(() => {
    if (data) {
      setVendorData(data?.data);
    }
  }, [data]);
  const intl = useIntl();
  const { visible, toggle } = useModal();
  const onChangeDirectUrl = async (row) => {
    try {
      const updated = await onUpdateVendor({ id: row.id }).unwrap();
      setVendorData((prev) =>
        prev.map((item) => {
          if (item?.id === row.id) {
            return {
              ...item,
              agents: [{ ...item.agents[0], directUrl: updated.data.directUrl }]
            };
          }
          return { ...item };
        })
      );
      notify({ message: updated.message });
    } catch (error) {
      notify({ message: error.data.message, type: 'error' });
    }
  };

  return (
    <Box>
      <Helmet>
        <title>{intl.formatMessage({ id: 'Vendors' })}</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader
          headerTitle={'Vendors'}
          headerSubtitle={''}
          onOpenModal={toggle}
          breadcrumbs={breadcrumbs}
        />
      </PageTitleWrapper>
      <Grid container columns={{ xs: 8, sm: 12, md: 16, lg: 20 }} padding={4}>
        {vendorData?.map((item) => (
          <Grid
            item
            xs={4}
            sm={4}
            md={4}
            lg={4}
            height="300px"
            marginY={1}
            padding={1}
          >
            <Box>
              <div className="card">
                <div className="wrapper">
                  <img
                    src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
                    className="cover-image"
                  />
                </div>
                <img src={`http://${item.img}`} className="character" />
                {item?.canSee && (
                  <Box className="switch">
                    <Switch
                      checked={item.agents[0]?.directUrl}
                      onClick={() => onChangeDirectUrl(item)}
                      disabled={!item?.canSee}
                      color="success"
                    />
                  </Box>
                )}
                <Box>
                  <Typography className="title">{item.name}</Typography>
                  <Box paddingBottom="10px">
                    <Link className="button-detail" to={`${item.name}`}>
                      <Typography padding="6px 8px">View Detail</Typography>
                    </Link>
                  </Box>
                </Box>
              </div>
            </Box>
          </Grid>
        ))}
      </Grid>
      <VendorModal open={visible} onClose={toggle} />
    </Box>
  );
}
