import { LoadingButton } from '@mui/lab';
import {
  Box,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { User } from 'src/models';
import {
  useGetVendorsQuery,
  useAddVendorToAgentMutation
} from 'src/services/vendorService';
import { useToast } from 'src/utils/hooks';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface data {
  user: User;
  onUpdateToReset: (reset: boolean) => void;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 350
    }
  }
};

export default function ModalVendor({
  user,
  onUpdateToReset
}: data): JSX.Element {
  const [formData, setFormData] = useState({
    userId: '',
    amount: 0,
    type: 'user.add_balance',
    note: '',
    token: ''
  });

  useEffect(() => {
    formData.userId = user?.id;
    setFormData((prev) => ({ ...prev, status: 'success' }));
  }, [user]);

  const { data, refetch } = useGetVendorsQuery({
    agentId: user.id
  });

  useEffect(() => {
    if (data) {
      setVendorData(data.data)
      const selectedData = data.data.filter((vendorData) => vendorData.selectedVendors !== null);
      console.log(selectedData)
      setSelectedData(selectedData)
    }
  }, [data]);

  const [vendorData, setVendorData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [addAgentToVendor] = useAddVendorToAgentMutation();

  const handleChange = (event: SelectChangeEvent<typeof selectedData>) => {
    const {
      target: { value }
    } = event;
    setSelectedData(value as { name: string; id: number }[]);
  };

  const handleSubmit = async () => {
    const result = await addAgentToVendor({
      agentId: user.id,
      selectedVendors: selectedData
    }).unwrap();
    if (result.message) {
      refetch();
      onUpdateToReset(true);
    }
  };

  return (
    <Grid container spacing={2} padding={2}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h5" component="div">
          <FormattedMessage id="title.add-vendor" />
        </Typography>
      </Grid>
      <Box justifyContent="center" display="flex" width={'100vh'}>
        <FormControl sx={{ m: 1 }}>
          <InputLabel id="demo-multiple-chip-label">
            Available Vendors
          </InputLabel>
          <Select
            sx={{ width: '100%' }}
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={selectedData}
            onChange={handleChange}
            input={
              <OutlinedInput
                id="select-multiple-chip"
                label="Available Vendors"
              />
            }
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value.id} label={value.name} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {vendorData.map((vendor) => (
              <MenuItem key={vendor.id} value={vendor}>
                {vendor.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <LoadingButton
        // loading={isLoadingCreate}
        onClick={handleSubmit}
        size="large"
        variant="contained"
        sx={{ width: '100%' }}
      >
        <Box>
          <span>+ &nbsp;</span>
          <span>Add</span>
        </Box>
      </LoadingButton>
    </Grid>
  );
}
