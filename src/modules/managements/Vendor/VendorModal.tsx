import { yupResolver } from '@hookform/resolvers/yup';
import { Add, Delete, PlusOne, PlusOneRounded } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { TextField } from 'src/components/MUIComponents';
import Modals from 'src/components/Modals';
import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

interface VendorModalProps {
  open: boolean;
  onClose: () => void;
}
const schema = yup.object().shape({
  name: yup.string().required('Name is required!'),
  url: yup.string().required('Url is required!')
});
const VendorModal = ({ open, onClose }: VendorModalProps): JSX.Element => {
  const {
    register,
    setValue,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      url: ''
    }
  });

  const [keys, setKeys] = useState([
    {
      keys: '',
      value: '',
      key: uuidv4()
    }
  ]);

  const onAddKeys = (key, index) => {
    if (index === 0) {
      return setKeys((prev) => [
        ...prev,
        {
          key: uuidv4(),
          keys: '',
          value: ''
        }
      ]);
    }
    return setKeys((prev) => prev.filter((item) => item.key !== key));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onCreateVendor = (value: any) => {
    console.log(value.name, value.url, keys);
  };

  const onChange = (type: string, key: string, value: string) => {
    console.log({ type, key, value });
    return setKeys((prev) =>
      prev.map((item) => {
        if (item.key === key) {
          return type === 'key' ? { ...item, keys: value } : { ...item, value };
        }
        return { ...item };
      })
    );
  };

  return (
    <Modals
      title={'Create Vendor'}
      open={open}
      onClose={onClose}
      onOk={handleSubmit(onCreateVendor)}
    >
      <Box component={'form'} id="form-users">
        <TextField
          label={<FormattedMessage id="label.name" />}
          name="name"
          sx={{ my: 1, mt: 2 }}
          errors={errors}
          register={register}
        />
        <TextField
          label={<FormattedMessage id="label.url" />}
          name="url"
          errors={errors}
          sx={{ my: 1 }}
          register={register}
        />

        <Box flex={1}>
          {keys.map((key, index) => (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              gap={1}
              key={key.key}
            >
              <TextField
                key={key.key}
                label={`Key ${index}`}
                name={`key-${uuidv4()}`}
                errors={errors}
                register={register}
                sx={{ paddingBottom: 1, flex: 1 }}
                onChange={(e) => onChange('key', key.key, e.target.value)}
              />
              <TextField
                label={`Value ${index}`}
                name={`value-${uuidv4()}`}
                errors={errors}
                register={register}
                sx={{ paddingBottom: 1, flex: 2.5 }}
                onChange={(e) => onChange('value', key.key, e.target.value)}
              />
              <Button
                onClick={() => onAddKeys(key.key, index)}
                sx={{ paddingBottom: 1 }}
              >
                {index > 0 ? <Delete /> : <Add />}
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
    </Modals>
  );
};

export default VendorModal;
