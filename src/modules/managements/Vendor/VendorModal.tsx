import { yupResolver } from '@hookform/resolvers/yup';
import { Add, Delete } from '@mui/icons-material';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { TextField } from 'src/components/MUIComponents';
import Modals from 'src/components/Modals';
import {
  useCreateVendorMutation,
  useUpdateVendorMutation
} from 'src/services/vendorService';
import { useToast } from 'src/utils/hooks';
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';

interface Keys {
  [key: string]: string;
}
interface VendorModalProps {
  open?: boolean;
  isCreate?: boolean;
  vendorData?: {
    data: { id: number; keys: Keys[]; url: string; name: string };
  };
  slug?: number;
  onClose?: () => void;
  refetch?: () => void;
}
const schema = yup.object().shape({
  name: yup.string().required('Name is required!'),
  url: yup.string().required('Url is required!')
});

const VendorModal = ({
  open,
  isCreate = true,
  vendorData,
  slug,
  onClose
}: VendorModalProps): JSX.Element => {
  const initKeys = {
    key: '',
    value: '',
  };

  const { message, notify } = useToast();
  const [createVendor] = useCreateVendorMutation();
  const [updateVendor, { isLoading }] = useUpdateVendorMutation();

  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      url: ''
    }
  });

  const [keys, setKeys] = useState<{ key: string; value: string }[]>([initKeys]);

  useEffect(() => {
    if (vendorData?.data && !isCreate) {
      setValue('name', vendorData?.data.name);
      setValue('url', vendorData?.data.url);
      
      if (vendorData?.data.keys !== null && Object.keys(vendorData?.data.keys).length > 0) {

        const keysArray = Object.entries(vendorData?.data.keys).map(([key, value]) => { 
          const arranged = {
            key: key ?? '',
            value: typeof value === 'string' ? value : '',
          };
          return arranged;
        });
        setKeys(keysArray);
        
      } else {
        setKeys([initKeys]);
      }
    } else {
      reset();
      setKeys([initKeys]);
    }
  }, [vendorData]);

  const onAddKeys = (key, index) => {
    if (index === 0) {
      return setKeys((prev) => [
        ...prev,
        {
          ...initKeys
        }
      ]);
    }
    return setKeys((prev) => prev.filter((item) => item.key !== key));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onCreateVendor = async (value: any) => {
    try {
      const formatKeys = keys?.map((item) => ({
        [`${item.key}`]: item.value
      }));
      const response = await createVendor({
        url: value.rul,
        name: value.name,
        keys: formatKeys
      }).unwrap();
      if (response) {
        setKeys([]);
        reset();
        onClose?.();
        return notify({ message: response?.message || message.CREATED });
      }
    } catch (error) {
      return notify({
        message: error?.data?.message || message.ERROR,
        type: 'error'
      });
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleUpdate = async (value: any) => {
    try {
      const formatKeys = keys?.map((item) => ({
        [`${item.key}`]: item.value
      }));
      const response = await updateVendor({
        url: value.rul,
        name: value.name,
        keys: formatKeys,
        id: slug
      }).unwrap();
      if (response) {
        return notify({ message: response?.message || message.UPDATED });
      }
    } catch (error) {
      return notify({
        message: error?.data?.message || message.ERROR,
        type: 'error'
      });
    }
  };

  const onChange = (type: string, key: string, value: string) =>
    setKeys((prev) =>
      prev?.map((item) => {
        if (item.key === key) {
          return type === 'key' ? { ...item, key: value } : { ...item, value };
        }
        return { ...item };
      })
    );

  const Component = useMemo(() => {
    console.log();
    return (
      <Box
        width={`${isCreate ? '100%' : '50%'}`}
        padding={isCreate ? 0 : 2}
        paddingBottom={0}
        margin={isCreate ? 0 : 2}
        position={'relative'}
        bgcolor={`${isLoading ? 'rgba(230, 224, 224, 0.25)' : null}`}
      >
        {isLoading && (
          <Box
            position="absolute"
            top="50%"
            left="50%"
            sx={{ transform: 'translate(-50%, -50%)' }}
          >
            <CircularProgress />
          </Box>
        )}

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

          <Typography mb={2}>Keys:</Typography>

          <Box flex={1}>
            {keys?.map((key, index) => (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                gap={1}
                key={index}
              > 
                <TextField
                  key={key.key}
                  label={`Key ${index}`}
                  name={`key-${uuidv4()}`}
                  errors={errors}
                  register={register}
                  sx={{ paddingBottom: 1, flex: 1 }}
                  value={key.key}
                  onChange={(e) => onChange('key', key.key, e.target.value)}
                />
                <TextField
                  label={`Value ${index}`}
                  name={`value-${uuidv4()}`}
                  errors={errors}
                  register={register}
                  sx={{ paddingBottom: 1, flex: 2.5 }}
                  value={key.value}
                  onChange={(e) => onChange('value', key.value, e.target.value)}
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

          {!isCreate && (
            <Box width="100%" textAlign="right">
              <Button variant="contained" onClick={handleSubmit(handleUpdate)}>
                Update
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    );
  }, [keys, errors, register, isCreate, isLoading]);

  return (
    <>
      {isCreate ? (
        <Modals
          title={'Create Vendor'}
          open={open}
          onClose={onClose}
          onOk={handleSubmit(onCreateVendor)}
        >
          {Component}
        </Modals>
      ) : (
        <Box>{Component}</Box>
      )}
    </>
  );
};

export default VendorModal;
