import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Card, Checkbox, Grid } from '@mui/material';
import { memo, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { TextField } from 'src/components/MUIComponents';
import Modals from 'src/components/Modals';
import { Permissions } from 'src/models';
import {
  useCreateRolesMutation,
  usePermissionsQuery,
  useRolesByIdQuery,
  useUpdateRolesMutation
} from 'src/services/commonServices';
import { useToast } from 'src/utils/hooks';
import * as yup from 'yup';
interface UserModals {
  open: { id: number; open: boolean };
  onClose: () => void;
  refetch: () => void;
  hide: () => void;
}

const schema = yup.object().shape({
  name: yup.string().required('Name is required!')
});

const RolesModal = ({
  open,
  onClose,
  refetch,
  hide
}: UserModals): JSX.Element => {
  const { notify, message } = useToast();

  const [updateRole, { isLoading: isLoadingUpdate }] = useUpdateRolesMutation();
  const [createRole, { isLoading: isLoadingCreate }] = useCreateRolesMutation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [newPermissions, setNewPermissions] = useState<any>();
  const { data: permissionData } = usePermissionsQuery({});
  const {
    data: rolesData,
    refetch: refetchRolesById,
    isSuccess,
    isFetching
  } = useRolesByIdQuery(
    { id: open.id },
    { refetchOnMountOrArgChange: true, skip: !open.open && !open.id }
  );

  useEffect(() => {
    if (permissionData?.data) {
      if (open.open) {
        if (open.id) {
          if (rolesData?.data?.permissions) {
            const permissionDataKeys = new Set(
              Object.keys(permissionData?.data)
            );
            const rolesDataKey = new Set(
              Object.keys(rolesData?.data?.permissions)
            );
            const uniqueKeys = [...permissionDataKeys]?.filter(
              (item) => !rolesDataKey?.has(item)
            );
            const newFeature = uniqueKeys?.reduce(
              (acc, key) => ({
                ...acc,
                [key]: []
              }),
              {}
            );
            return setNewPermissions(() => ({
              ...rolesData?.data?.permissions,
              ...newFeature
            }));
          }
        }
        const getAllKeys = Object.keys(permissionData?.data);
        const defaultKeys = getAllKeys?.reduce(
          (acc, cur) => ({
            ...acc,
            [cur]: []
          }),
          {}
        );
        return setNewPermissions(defaultKeys);
      }
    }
  }, [rolesData, permissionData, open]);

  const {
    register,
    setValue,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: ''
    }
  });

  const onSubmit = async (values: { name: string }) => {
    try {
      if (rolesData?.data?.id && open.id) {
        await updateRole({
          name: values.name,
          permissions: newPermissions,
          id: rolesData?.data?.id
        }).unwrap();
        notify({ message: message.UPDATED });
      } else {
        await createRole({
          name: values.name,
          permissions: newPermissions
        }).unwrap();
      }
      refetch();
      refetchRolesById();
      hide();
      reset();
    } catch (error) {
      notify({ message: message.ERROR, type: 'error' });
    }
  };

  useEffect(() => {
    setValue('name', rolesData?.data?.name || '');
  }, [rolesData]);

  const onChangeCheckbox = (checked, feature, permission) => {
    setNewPermissions((prev) => {
      if (!checked) {
        return {
          ...prev,
          [feature]: [...prev[feature], permission]
        };
      }
      return {
        ...prev,
        [feature]: prev[feature].filter((item) => item !== permission)
      };
    });
  };

  return (
    <Modals
      title={
        rolesData?.data?.id ? `Edit ${rolesData?.data?.name}` : 'Add Roles'
      }
      onClose={onClose}
      open={open.open && !isFetching && isSuccess}
      isLoading={isLoadingUpdate || isLoadingCreate}
      onOk={handleSubmit(onSubmit)}
    >
      <Box component={'form'} id="form-users">
        <div className="block">
          <TextField
            label={<FormattedMessage id="label.name" />}
            name="name"
            sx={{ my: 2 }}
            errors={errors}
            register={register}
          />
        </div>
        <Grid
          container
          columns={2}
          sx={{ gridTemplateColumns: '1fr 1fr' }}
          display="grid"
          gap="8px"
        >
          {permissionData?.data &&
            newPermissions &&
            Object?.keys(permissionData?.data)?.map((feature) => (
              <div>
                {feature.slice(0, 1).toUpperCase() + feature.slice(1)}
                <Card
                  sx={{
                    padding: 1,
                    margin: '4px 0 4px 0'
                  }}
                >
                  <Grid container justifyContent="space-between">
                    {permissionData?.data[feature]?.map((permission, index) => (
                      <Box key={index} width="100px">
                        <Checkbox
                          onChange={() =>
                            onChangeCheckbox(
                              Boolean(
                                newPermissions[feature]?.includes(permission)
                              ),
                              feature,
                              permission
                            )
                          }
                          checked={Boolean(
                            newPermissions[feature]?.includes(permission)
                          )}
                        />
                        {permission.slice(0, 1).toUpperCase() +
                          permission.slice(1)}
                      </Box>
                    ))}
                  </Grid>
                </Card>
              </div>
            ))}
        </Grid>
      </Box>
    </Modals>
  );
};

export default memo(RolesModal);
