import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
// import { FormattedMessage } from 'react-intl';
import Modals from 'src/components/Modals';
import { useLazyGetVendorsQuery } from 'src/services/vendorService';
import {
  useCreateTransactionLimitMutation,
  useUpdateTransactionLimitMutation
} from 'src/services/transactionService';
import { useToast } from 'src/utils/hooks';
import * as yup from 'yup';

const schema = yup.object().shape({
  limitType: yup.string().required('limitType is required!'),
  limitTypeId: yup.string().required('limitTypeId is required!'),
  limit: yup
    .number()
    .nullable()
    .positive('limit must be positive')
    .required('limit is required!')
});
interface GameModalProps {
  open: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  detail: any;
  onClose: () => void;
  refetch: () => void;
  hide: () => void;
}

type FormData = {
  limitType: string;
  limitTypeId: string;
  limit: number;
};

const BetLimitModal = ({
  open,
  detail,
  onClose,
  refetch,
  hide
}: GameModalProps): JSX.Element => {
  const { notify, message } = useToast();
  const [createBetLimit, { isLoading: isLoadingCreate }] =
    useCreateTransactionLimitMutation();
  const [updateBetLimit, { isLoading: isLoadingUpdate }] =
    useUpdateTransactionLimitMutation();
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      limitType: '',
      limitTypeId: '',
      limit: 0
    }
  });

  useEffect(() => {
    if (detail?.id) {
      setValue('limitType', detail.limitType);
      setValue('limitTypeId', detail.limitTypeId);
      setValue('limit', detail.limit);
    } else {
      reset();
    }
  }, [detail]);

  const onSubmit = async (values: FormData) => {
    try {
      if (detail?.id) {
        await updateBetLimit({ id: detail?.id, body: values }).unwrap();
      } else {
        await createBetLimit(values).unwrap();
      }
      notify({ message: detail?._id ? message.UPDATED : message.CREATED });
      refetch();
      hide();
      reset();
    } catch (error) {
      notify({ message: message.ERROR, type: 'error' });
    }
  };

  const [limitType, setLimitType] = useState('');
  const [limitTypeId, setLimitTypeId] = useState('');
  const [limitTypeIdOptions, setLimitTypeIdOptions] = useState([]);
  const [getVendorQuery] = useLazyGetVendorsQuery();

  const _changeOptions = async (type: string | null) => {
    let options;

    if (type === 'vendor') {
      options = (await getVendorQuery({})).data ?? [];
    } else if (type === 'type') {
      options = [
        {
          id: 'baccarat',
          name: ''
        },
        {
          id: 'dragontiger',
          name: 'Dragon Tiger'
        },
        {
          id: 'topcard',
          name: 'Topcard'
        },
        {
          id: 'blackjack',
          name: 'Black Jack'
        },
        {
          id: 'americanroulette',
          name: 'American Roulette'
        },
        {
          id: 'roulette',
          name: 'Roulette'
        }
      ];
    } else {
      options = [
        {
          id: '',
          name: 'Please Select a Type'
        }
      ];
    }

    setLimitTypeIdOptions(options);
  };

  const limitTypeChange = (event: SelectChangeEvent) => {
    const type = event.target.value as string;
    setLimitType(type);
    _changeOptions(type);
  };

  const limitTypeIdChange = (event: SelectChangeEvent) => {
    const id = event.target.value as string;
    setLimitTypeId(id);
  };

  return (
    <Modals
      title={detail?._id ? `Edit ${detail.name}` : 'Add new Game'}
      onClose={onClose}
      open={open}
      onOk={handleSubmit(onSubmit)}
      isLoading={isLoadingCreate || isLoadingUpdate}
    >
      <Box component="form" noValidate autoComplete="off" id="form-games">
        <Box sx={{ my: 2 }}>
          <Select
            fullWidth
            name="limitType"
            value={limitType}
            required
            {...register('limitType')}
            error={!!errors['limitType']}
            label="Type"
            onChange={limitTypeChange}
          >
            <MenuItem value={'all'}>All</MenuItem>
            <MenuItem selected={true} value={'game'}>
              Game
            </MenuItem>
            <MenuItem value={'type'}>Type</MenuItem>
            <MenuItem value={'vendor'}>Vendor</MenuItem>
          </Select>
        </Box>
        <Box sx={{ my: 2 }}>
          <Select
            fullWidth
            name="limitTypeId"
            value={limitTypeId}
            required
            {...register('limitTypeId')}
            error={!!errors['limitTypeId']}
            label="Name(id)"
            onChange={limitTypeIdChange}
          >
            {limitTypeIdOptions.map((option) => (
              <MenuItem
                selected={option.id == 3 ? true : false}
                key={option.id}
                value={option.id}
              >
                {option.name}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <TextField
          type="number"
          fullWidth
          label="limit"
          sx={{ my: 2 }}
          required
          error={!!errors['limit']}
          helperText={errors['limit'] ? errors['limit'].message : ''}
          autoComplete="off"
          {...register('limit')}
        />
      </Box>
    </Modals>
  );
};

export default BetLimitModal;
