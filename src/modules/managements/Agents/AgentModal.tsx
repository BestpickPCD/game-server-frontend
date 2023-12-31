import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import { memo, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Select, TextField } from 'src/components/MUIComponents';
import { InfinityAgent } from 'src/components/MUIComponents/InfinitySelect';
import Modals from 'src/components/Modals';
import { Agent } from 'src/models';
import FormRegister from 'src/modules/Auth/Register/FormRegister';
import { useUpdateAgentMutation } from 'src/services/agentService';
import { useGetCurrenciesQuery } from 'src/services/currencyService';
import { useRolesQuery } from 'src/services/commonServices';
import { useToast } from 'src/utils/hooks';
import * as yup from 'yup';
import { FormattedMessage } from 'react-intl';
interface UserModals {
  open: boolean;
  detail: Agent;
  onClose: () => void;
  refetch: () => void;
  hide: () => void;
}

const schema = yup.object().shape({
  name: yup.string().required('Name is required!'),
  roleId: yup.number().required('Role is required!'),
  rate: yup.number().required('Rate is required!'),
  currencyId: yup.number().required('Currency is required!'),
  username: yup.string().required('Username is required!'),
  parentAgentId: yup.string().nullable()
});

const UserModal = ({
  open,
  detail,
  onClose,
  refetch,
  hide
}: UserModals): JSX.Element => {
  const { notify, message } = useToast();
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [updateAgent, { isLoading: isLoadingUpdate }] =
    useUpdateAgentMutation();
  const { data: rolesData } = useRolesQuery(
    {},
    { refetchOnMountOrArgChange: true, skip: !detail?.id }
  );
  const { data: currenciesData } = useGetCurrenciesQuery(
    {},
    { refetchOnMountOrArgChange: true, skip: !detail?.id }
  );

  const {
    register,
    setValue,
    reset,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      roleId: 0,
      username: '',
      currencyId: 0,
      parentAgentId: ''
    }
  });
  useEffect(() => {
    if (detail?.id) {
      setValue('name', detail.name);
      setValue('username', detail.username);
      setValue('rate', Number(detail?.rate));
      setValue('roleId', detail.roleId);
      setValue('currencyId', detail.currencyId);
      setValue('parentAgentId', detail?.parentAgentId);
    } else {
      reset();
    }
  }, [detail]);

  const onSubmit = async (values: {
    name: string;
    roleId: number;
    rate: number;
    currencyId: number;
    parentAgentId: string;
  }) => {
    try {
      if (detail?.id) {
        await updateAgent({
          id: detail.id,
          body: {
            name: values.name,
            roleId: values.roleId,
            rate: Number(values.rate),
            currencyId: values.currencyId,
            parentAgentId: values.parentAgentId
          }
        }).unwrap();
        notify({ message: message.UPDATED });
      }
      refetch();
      hide();
      reset();
    } catch (error) {
      notify({ message: error?.data?.message || message.ERROR, type: 'error' });
    }
  };
  const roleOptions = useMemo(
    () =>
      rolesData?.data?.map((role) => ({
        id: role.id,
        name: role.name,
        value: role.id
      })),
    [rolesData]
  );

  const currencyOptions = useMemo(
    () =>
      currenciesData?.map((role) => ({
        id: role.id,
        name: role.name,
        value: role.id
      })),
    [currenciesData]
  );

  return (
    <Modals
      title={detail?.id ? `Edit ${detail.name}` : 'Add Agent'}
      onClose={onClose}
      open={open}
      isLoading={isLoadingUpdate}
      onOk={detail?.id ? handleSubmit(onSubmit) : () => setIsRegister(true)}
    >
      {detail?.id ? (
        <Box component={'form'} id="form-users">
          <div className="block">
            <TextField
              label={<FormattedMessage id="label.username" />}
              name="username"
              sx={{ my: 2 }}
              errors={errors}
              register={register}
              disabled={detail?.id ? true : false}
            />
            <TextField
              label={<FormattedMessage id="label.name" />}
              name="name"
              errors={errors}
              register={register}
            />
            <Box display={'flex'} gap="1rem" sx={{ my: 2 }}>
              <TextField
                label={<FormattedMessage id="label.rate" />}
                name="rate"
                errors={errors}
                register={register}
              />
            </Box>
            <Box display={'flex'} gap="1rem" sx={{ my: 2 }}>
              <Select
                label="Role"
                name="roleId"
                control={control}
                options={roleOptions}
              />
              <Select
                label="Currency"
                name="currencyId"
                control={control}
                options={currencyOptions}
              />
            </Box>
            <InfinityAgent
              control={control}
              name="parentAgentId"
              parent={{
                id: detail?.parent?.id,
                name: detail?.parent?.name,
                value: detail?.parent?.id
              }}
            />
          </div>
        </Box>
      ) : (
        <FormRegister
          isSubmit={isRegister}
          setIsSubmit={() => setIsRegister(false)}
          refetch={refetch}
          onClose={onClose}
          isAgentRegister
        />
      )}
    </Modals>
  );
};

export default memo(UserModal);
