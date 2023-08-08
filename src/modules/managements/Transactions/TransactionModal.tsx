/* eslint-disable @typescript-eslint/no-unused-vars */
import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import { memo, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Select, TextField } from 'src/components/MUIComponents';
import { InfinityAgent } from 'src/components/MUIComponents/InfinitySelect';
import Modals from 'src/components/Modals';
import { Transactions } from 'src/models';
import { transactionTypes } from 'src/models/variables';
import { useCurrencyQuery } from 'src/services/commonServices';
import * as yup from 'yup';
interface ModalProps {
  open: boolean;
  detail: Transactions;
  onClose: () => void;
  refetch: () => void;
  hide: () => void;
}

const typeOptions = transactionTypes.map((item) => ({
  id: item,
  value: item,
  name: `${item.slice(0, 1).toUpperCase()}${item.slice(1)}`
}));

const schema = yup.object().shape({
  receiverId: yup
    .number()
    .moreThan(0, 'Receiver is required!')
    .typeError('Receiver is required!')
    .required('Receiver is required!'),
  senderId: yup.number(),
  currencyId: yup
    .number()
    .moreThan(0, 'Currency is required!')
    .typeError('Currency is required!')
    .required('Currency is required!'),
  amount: yup
    .number()
    .moreThan(0, 'Amount must be greater than 0')
    .typeError('Amount must be a number')
    .required('Amount is required!'),
  token: yup.string(),
  note: yup.string(),
  type: yup.string().required('Type is required!')
  // status: yup.string().required('status')
});

const TransactionModal = ({
  open,
  detail,
  onClose
}: ModalProps): JSX.Element => {
  const { data: currenciesData } = useCurrencyQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );
  const {
    register,
    setValue,
    reset,
    handleSubmit,
    clearErrors,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      senderId: 0,
      receiverId: 0,
      amount: 0,
      currencyId: 0,
      token: '',
      note: '',
      type: ''
      // status: ''
    }
  });

  useEffect(() => {
    if (!detail?.id) {
      return reset();
    }
    setValue('senderId', Number(detail?.senderId));
    setValue('receiverId', Number(detail?.receiverId));
    setValue('amount', Number(detail?.amount));
    setValue('currencyId', Number(detail?.currencyId));
    setValue('token', detail?.token);
    setValue('note', detail?.note);
    setValue('type', detail?.type);
    // setValue('status', detail?.status );
  }, [detail]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (values: any) => {
    console.log(values);
  };

  const currencyOptions = useMemo(
    () =>
      currenciesData?.map((item) => ({
        id: String(item.id),
        name: String(item.name),
        value: String(item.id)
      })),
    [currenciesData]
  );

  const handleClose = () => {
    onClose();
    clearErrors();
  };

  return (
    <Modals
      title={detail?.id ? `View` : 'Add Transaction'}
      onClose={handleClose}
      open={open}
      onOk={handleSubmit(onSubmit)}
      fullWidth
    >
      <Box component={'form'} id="form-users">
        <div className="block">
          <Box display={'flex'} gap="1rem" sx={{ my: 2 }}>
            {detail?.id && (
              <InfinityAgent
                name="senderId"
                control={control}
                label="Sender"
                parent={{
                  id: detail.senderId,
                  name: detail.sender?.name,
                  value: detail.senderId
                }}
              />
            )}
            <InfinityAgent
              name="receiverId"
              control={control}
              label="Receiver"
              {...(detail?.id && {
                parent: {
                  id: detail?.receiverId,
                  name: detail?.receiver.name,
                  value: detail?.receiverId
                }
              })}
              readOnly={!!detail?.id}
              errors={errors}
            />
          </Box>
          <Box display={'flex'} gap="1rem" sx={{ my: 2 }}>
            <TextField
              name="amount"
              label="Amount"
              errors={errors}
              register={register}
              type="number"
              InputProps={{
                readOnly: !!detail?.id
              }}
            />
            <Select
              label="Currency"
              name="currencyId"
              control={control}
              options={currencyOptions}
              readOnly={!!detail?.id}
              errors={errors}
            />
          </Box>
          <Box display={'flex'} gap="1rem" sx={{ my: 2 }}>
            <Select
              name="type"
              label="Type"
              control={control}
              options={typeOptions}
              readOnly={!!detail?.id}
              errors={errors}
            />
            {/* <Select
              name="status"
              label="Status"
              control={control}
              options={[
                {
                  value: 'ok',
                  id: 'ok',
                  name: 'ok'
                }
              ]}
              readOnly={!!detail?.id}
            /> */}
          </Box>
          <TextField
            multiline
            rows={2}
            name="token"
            errors={errors}
            register={register}
            label="Token"
            InputProps={{
              readOnly: !!detail?.id
            }}
          />
          <TextField
            sx={{ my: 2 }}
            multiline
            rows={2}
            name="note"
            errors={errors}
            register={register}
            label="Note"
            InputProps={{
              readOnly: !!detail?.id
            }}
          />
        </div>
      </Box>
    </Modals>
  );
};

export default memo(TransactionModal);
