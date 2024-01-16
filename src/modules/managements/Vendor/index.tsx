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
import '../../../styles/index.scss';

const breadcrumbs = [
  {
    link: '/dashboards',
    name: 'title.dashboard'
  },
  {
    name: 'title.vendors.management'
  }
];

export default function Vendors(): JSX.Element {
  const { notify } = useToast();
  const { data, refetch } = useGetVendorsQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );
  const [onUpdateVendor] = useUpdateDirectUrlMutation();
  const [vendorData, setVendorData] = useState([]);
  useEffect(() => {
    if (data) {
      const canSee = data.data.filter((datum) => datum.canSee === true);
      setVendorData(canSee);
    }
  }, [data]);

  const intl = useIntl();
  const { visible, toggle } = useModal();

  const onChangeDirectUrl = async (row) => {
    try {
      const updated = await onUpdateVendor({ id: row.agentVendorId }).unwrap();
      setVendorData((prev) =>
        prev.map((item) => {
          if (item?.id === row.id) {
            return {
              ...item,
              agents: [{ ...item, directUrl: updated.data.directUrl }]
            };
          }
          return { ...item };
        })
      );
      refetch();
      notify({ message: updated.message });
    } catch (error) {
      notify({ message: error.data.message, type: 'error' });
    }
  };

  return (
    <Box>
      <Helmet>
        <title>{intl.formatMessage({ id: 'label.vendors' })}</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader
          headerTitle={'label.vendors'}
          headerSubtitle={''}
          onOpenModal={() => {
            toggle();
          }}
          breadcrumbs={breadcrumbs}
        />
      </PageTitleWrapper>
      <Grid container columns={{ xs: 8, sm: 12, md: 16, lg: 20 }} padding={4}>
        {vendorData?.map((item, index) => (
          <Grid
            item
            xs={4}
            sm={4}
            md={4}
            lg={4}
            height="300px"
            marginY={1}
            padding={1}
            key={`${item.img}-${index}`}
          >
            <Box>
              <div className="card">
                <div className="wrapper">
                  <img src="../../../grey.jpg" className="cover-image" />
                </div>
                <Typography className="character">{item.name}</Typography>
                {item?.canSee && (
                  <Box className="switch">
                    <Typography color={'#fff'}>Direct Url</Typography>
                    <Switch
                      checked={item.directUrl ? true : false}
                      onClick={() => onChangeDirectUrl(item)}
                      color="success"
                    />
                  </Box>
                )}
                <Typography className="title">{item.name}</Typography>
                <Box>
                  <Box paddingBottom="10px" className="container">
                    <Link
                      className="button-detail"
                      to={`${item.id}?name=${item.name}`}
                    >
                      View Detail
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
