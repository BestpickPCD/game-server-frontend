import { yupResolver } from '@hookform/resolvers/yup';
import { Box, TextField } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Modals from 'src/components/Modals';
import {
  useCreateCurrencyMutation,
  useUpdateCurrencyMutation
} from 'src/services/currencyService';
import { useToast } from 'src/utils/hooks';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required!'),
  code: yup.string().required('Code is required!')
});
interface CurrencyModalProps {
  open: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  detail: any;
  onClose: () => void;
  refetch: () => void;
  hide: () => void;
}

type FormData = {
  name: string;
  code: string;
};

const CurrencyModal = ({
  open,
  detail,
  onClose,
  refetch,
  hide
}: CurrencyModalProps): JSX.Element => {
  const { notify, message } = useToast();
  const [createCurrency, { isLoading: isLoadingCreate }] =
    useCreateCurrencyMutation();
  const [updateCurrency, { isLoading: isLoadingUpdate }] =
    useUpdateCurrencyMutation();
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      code: ''
    }
  });

  useEffect(() => {
    if (detail?.id) {
      setValue('code', detail.code);
      setValue('name', detail.name);
    } else {
      reset();
    }
  }, [detail]);

  const onSubmit = async (values: FormData) => {
    try {
      const { name, code } = values;
      const form = new FormData();
      form.append('name', name);
      form.append('code', code);
      if (detail?.id) {
        await updateCurrency({ id: detail.id, body: form }).unwrap();
      } else {
        await createCurrency(form).unwrap();
      }
      notify({ message: detail?._id ? message.UPDATED : message.CREATED });
      refetch();
      hide();
      reset();
    } catch (error) {
      notify({ message: message.ERROR, type: 'error' });
    }
  };

  return (
    <Modals
      title={detail?.id ? `Edit ${detail.name}` : 'Add new Currency'}
      onClose={onClose}
      open={open}
      onOk={handleSubmit(onSubmit)}
      isLoading={isLoadingCreate || isLoadingUpdate}
    >
      <Box component="form" noValidate autoComplete="off" id="form-Currencies">
        <TextField
          fullWidth
          label="Currency Name"
          sx={{ my: 2 }}
          required
          error={!!errors['name']}
          helperText={errors['name'] ? errors['name'].message : ''}
          autoComplete="off"
          {...register('name')}
        />
        <TextField
          fullWidth
          label="code"
          sx={{ my: 2 }}
          required
          error={!!errors['code']}
          helperText={errors['code'] ? errors['code'].message : ''}
          autoComplete="off"
          {...register('code')}
        />
      </Box>
    </Modals>
  );
};

export default CurrencyModal;
