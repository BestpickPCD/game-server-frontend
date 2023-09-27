import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import { memo, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { Select, TextField } from 'src/components/MUIComponents';
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
  email: yup.string().required('email is required!'),
  roleId: yup.number().required('email is required!'),
  currencyId: yup.number().required('email is required!'),
  username: yup.string().required('email is required!')
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
      roleId: 0,
      username: '',
      currencyId: 0
    }
  });

  useEffect(() => {
    if (detail?.id) {
      setValue('name', detail.name);
      setValue('username', detail.username);
      setValue('email', detail.email);
      setValue('roleId', detail.roleId);
      setValue('currencyId', detail.currencyId);
    } else {
      reset();
    }
  }, [detail]);

  const onSubmit = async (values: {
    name: string;
    email: string;
    type: string;
    roleId: number;
    currencyId: number;
  }) => {
    try {
      if (detail?.id) {
        await updateUser({
          id: detail.id,
          body: {
            name: values.name,
            email: values.email,
            roleId: values.roleId,
            currencyId: values.currencyId
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
      rolesData?.data?.data?.map((role) => ({
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
              sx={{ my: 2 }}
              errors={errors}
              register={register}
            />
            <TextField
              label="Email"
              name={'email'}
              sx={{ my: 2 }}
              errors={errors}
              register={register}
            />
            <Box display={'flex'} gap="1rem">
              <Select
                label="Role"
                name="roleId"
                control={control}
                options={roleOptions}
                sx={{ my: 2 }}
              />
              <Select
                label="Currency"
                name="currencyId"
                control={control}
                options={currencyOptions}
              />
            </Box>
            {false && (
              <Box display={'flex'} gap="1rem">
                <Select
                  label="Role"
                  name="roleId"
                  control={control}
                  options={roleOptions}
                  sx={{ my: 2 }}
                />
                <Select
                  label="Currency"
                  name="currencyId"
                  control={control}
                  options={currencyOptions}
                />
              </Box>
            )}
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
