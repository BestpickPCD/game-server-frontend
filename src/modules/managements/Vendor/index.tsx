/* eslint-disable @typescript-eslint/no-explicit-any */
// import * as React from 'react';
import { Box, Button, Switch, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import {
  useGetVendorsQuery,
  useUpdateDirectUrlMutation
} from 'src/services/vendorService';
import { useToast } from 'src/utils/hooks';

export default function Vendors(): JSX.Element {
  const { notify } = useToast();
  const { data } = useGetVendorsQuery({});
  const [onUpdateVendor] = useUpdateDirectUrlMutation();
  const [vendorData, setVendorData] = useState([]);

  useEffect(() => {
    const { data: receivedData } = data;
    setVendorData(receivedData);
  }, []);

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
      <Box
        display="grid"
        gridTemplateColumns="1fr 1fr 1fr 1fr"
        gap={2}
        width="100%"
        paddingTop={30}
        paddingX={5}
      >
        {vendorData?.map((item) => (
          <Box>
            <Box>
              <div className="card">
                <div className="wrapper">
                  <img
                    src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
                    className="cover-image"
                  />
                </div>
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
          </Box>
        ))}
      </Box>
    </Box>
  );
}
