import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import { memo, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Select, TextField } from 'src/components/MUIComponents';
import Modals from 'src/components/Modals';
import { Agent } from 'src/models';
import FormRegister from 'src/modules/Auth/Register/FormRegister';
import { useUpdateAgentMutation } from 'src/services/agentService';
import { useCurrencyQuery, useRolesQuery } from 'src/services/commonServices';
import { useToast } from 'src/utils/hooks';
import * as yup from 'yup';
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
  currencyId: yup.number().required('Currency is required!'),
  username: yup.string().required('Username is required!'),
  parentAgentId: yup.number().required('Parent Agent is required!')
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
  const { data: currenciesData } = useCurrencyQuery(
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
      parentAgentId: 0
    }
  });
  useEffect(() => {
    if (detail?.id) {
      setValue('name', detail.name);
      setValue('username', detail.username);
      setValue('roleId', detail.roleId);
      setValue('currencyId', detail.currencyId);
      setValue('parentAgentId', detail?.Agents.parentAgentId);
    } else {
      reset();
    }
  }, [detail]);

  const onSubmit = async (values: {
    name: string;
    roleId: number;
    currencyId: number;
    parentAgentId: number;
  }) => {
    try {
      if (detail?.id) {
        await updateAgent({
          id: detail.id,
          body: {
            name: values.name,
            roleId: values.roleId,
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
      notify({ message: message.ERROR, type: 'error' });
    }
  };
  const roleOptions = useMemo(
    () =>
      rolesData?.map((role) => ({
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
      title={detail?.id ? `Edit ${detail.name}` : 'Add Game'}
      onClose={onClose}
      open={open}
      isLoading={isLoadingUpdate}
      onOk={detail?.id ? handleSubmit(onSubmit) : () => setIsRegister(true)}
    >
      {detail?.id ? (
        <Box component={'form'} id="form-users">
          <div className="block">
            <TextField
              label="Username"
              name="username"
              sx={{ my: 2 }}
              errors={errors}
              register={register}
              disabled={detail?.id ? true : false}
            />
            <TextField
              label="Name"
              name="name"
              sx={{ my: 2 }}
              errors={errors}
              register={register}
            />
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
          </div>
        </Box>
      ) : (
        <FormRegister
          isUserRegister={true}
          isSubmit={isRegister}
          setIsSubmit={() => setIsRegister(false)}
          refetch={refetch}
          onClose={onClose}
        />
      )}
    </Modals>
  );
};

export default memo(UserModal);
