import { yupResolver } from '@hookform/resolvers/yup';
import { Box, FormControlLabel, Grid, Stack, Switch } from '@mui/material';
import { memo, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { Select, TextField } from 'src/components/MUIComponents';
import { InfinityAgent } from 'src/components/MUIComponents/InfinitySelect';
import Modals from 'src/components/Modals';
import { User } from 'src/models';
import FormRegister from 'src/modules/Auth/Register/FormRegister';
import { useRolesQuery } from 'src/services/commonServices';
import { useGetCurrenciesQuery } from 'src/services/currencyService';
import { useUpdateUserMutation } from 'src/services/userService';
import { useToast } from 'src/utils/hooks';
import * as yup from 'yup';
interface UserModals {
  open: boolean;
  detail: User;
  onClose: () => void;
  refetch: () => void;
  hide: () => void;
}

const schema = yup.object().shape({
  name: yup.string().required('Last name is required!'),
  email: yup.string().required('Email is required!'),
  roleId: yup.number(),
  currencyId: yup.number().required('Currency is required!'),
  isActive: yup.boolean(),
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
  const [updateUser, { isLoading: isLoadingUpdate }] = useUpdateUserMutation();

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
      email: '',
      roleId: 2,
      username: '',
      isActive: false,
      currencyId: 0,
      parentAgentId: ''
    }
  });

  useEffect(() => {
    if (detail?.id) {
      setValue('name', detail.name);
      setValue('username', detail.username);
      setValue('email', detail.email);
      setValue('isActive', detail.isActive);
      setValue('roleId', detail?.role?.id);
      setValue('currencyId', detail?.currency?.id);
      setValue('parentAgentId', detail?.parentAgentId);
    } else {
      reset();
    }
  }, [detail]);

  const onSubmit = async (values: {
    name: string;
    email: string;
    type: string;
    roleId: number;
    isActive: boolean;
    currencyId: number;
    parentAgentId: string | null;
  }) => {
    try {
      if (detail?.id) {
        await updateUser({
          id: detail.id,
          body: {
            name: values.name,
            email: values.email,
            roleId: values.roleId,
            isActive: values.isActive,
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setValue('isActive', checked);
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
      title={detail?.id ? `Edit ${detail.name}` : 'Add User'}
      onClose={onClose}
      open={open}
      isLoading={isLoadingUpdate}
      onOk={detail?.id ? handleSubmit(onSubmit) : () => setIsRegister(true)}
    >
      {detail?.id ? (
        <Box component={'form'} id="form-users">
          <div className="block">
            <Grid container spacing={2} mt={1}>
              <Grid item xs={8}>
                <TextField
                  label={<FormattedMessage id="label.username" />}
                  name="username"
                  errors={errors}
                  register={register}
                  disabled={detail?.id ? true : false}
                />
              </Grid>
              <Grid item xs={4}>
                <Stack spacing={2} justifyContent="center" alignItems="center">
                  <FormControlLabel
                    label="Active"
                    control={
                      <Switch
                        name={'isActive'}
                        defaultChecked={detail?.isActive ? true : false}
                        onChange={handleChange}
                      />
                    }
                  />
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label={<FormattedMessage id="label.name" />}
                  name="name"
                  errors={errors}
                  register={register}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Email"
                  name={'email'}
                  errors={errors}
                  register={register}
                />
              </Grid>
              <Grid item xs={6}>
                <InfinityAgent
                  control={control}
                  name="parentAgentId"
                  errors={errors}
                />
              </Grid>
              <Grid item xs={6}>
                <Box display={'flex'} gap="1rem">
                  <Select
                    label="Currency"
                    name="currencyId"
                    control={control}
                    options={currencyOptions}
                  />
                </Box>
              </Grid>
            </Grid>
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
