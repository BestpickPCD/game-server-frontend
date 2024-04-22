// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import { memo, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { Select, TextField } from 'src/components/MUIComponents';
import { InfinityAgent } from 'src/components/MUIComponents/InfinitySelect';
import Modals from 'src/components/Modals';
import { Transactions } from 'src/models';
import { transactionStatus, transactionTypes } from 'src/models/variables';
import { useGetCurrenciesQuery } from 'src/services/currencyService';
import { useCreateTransactionMutation } from 'src/services/transactionService';
import { useToast } from 'src/utils/hooks';
import * as yup from 'yup';
interface ModalProps {
  open: boolean;
  detail: Transactions;
  onClose: () => void;
  refetch: () => void;
}

const typeOptions = transactionTypes
  .map((item) => ({
    id: item,
    value: item,
    name: `${item.slice(0, 1).toUpperCase()}${item.slice(1)}`
  }))
  .filter((item) => item.id.includes('agent.add_balance'));

const schema = yup.object().shape({
  userId: yup.string().required('Users is required!'),
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
});

type CreateTransactionBody = {
  userId: string;
  type: string;
  note: string;
  token: string;
  status?: string;
  amount: number;
  currencyId: number;
};

const TransactionModal = ({
  open,
  detail,
  onClose,
  refetch
}: ModalProps): JSX.Element => {
  const { notify, message } = useToast();
  const { data: currenciesData } = useGetCurrenciesQuery(
    {},
    { refetchOnMountOrArgChange: true, skip: !open }
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
      userId: '',
      amount: 0,
      currencyId: 0,
      token: '',
      note: '',
      type: ''
    }
  });
  const [createTransaction] = useCreateTransactionMutation();

  useEffect(() => {
    if (!detail?.id) {
      return reset();
    }
    setValue('userId', detail?.userId);
    setValue('amount', Number(detail?.amount));
    setValue('currencyId', Number(detail?.currencyId));
    setValue('token', detail?.token);
    setValue('note', detail?.note);
    setValue('type', detail?.type);
  }, [detail]);

  const onSubmit = async (values: CreateTransactionBody) => {
    try {
      const response = await createTransaction(values).unwrap();
      if (response) {
        notify({
          message: message.CREATED
        });
        reset();
        onClose();
        refetch();
      }
    } catch (error) {
      notify({
        message: error.data.message,
        type: 'error'
      });
    }
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
      onOk={!detail?.id && handleSubmit(onSubmit)}
      fullWidth
    >
      <Box component={'form'} id="form-transaction">
        <div className="block">
          <Box display={'flex'} gap="1rem" sx={{ my: 2 }}>
            <InfinityAgent
              name="userId"
              control={control}
              label="User"
              {...(detail?.id && {
                parent: {
                  id: detail?.userId as string,
                  name: detail?.username,
                  value: detail?.userId as string
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
              label={<FormattedMessage id="label.type" />}
              control={control}
              options={typeOptions}
              readOnly={!!detail?.id}
              errors={errors}
            />
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
