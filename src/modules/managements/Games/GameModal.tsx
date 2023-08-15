import { yupResolver } from '@hookform/resolvers/yup';
import { Box, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Modals from 'src/components/Modals';
import UploadFile from 'src/components/UploadFile';
import // useCreateGameMutation,
// useUpdateGameMutation
'src/services/gameService';
import { useToast } from 'src/utils/hooks';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required!'),
  link: yup.string().required('Link is required!'),
  type: yup.string().required('Type is required!'),
  categoryId: yup
    .number()
    .nullable()
    .positive('Category must be positive')
    .min(1)
    .required('Category is required!')
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
  name: string;
  link: string;
  type: string;
  categoryId: number;
};

const GameModal = ({
  open,
  detail,
  onClose,
  refetch,
  hide
}: GameModalProps): JSX.Element => {
  const { notify, message } = useToast();
  const [uploadFile, setUploadFile] = useState([]);
  // const [createGame, { isLoading: isLoadingCreate }] = useCreateGameMutation();
  // const [updateGame, { isLoading: isLoadingUpdate }] = useUpdateGameMutation();
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
      link: '',
      type: '',
      categoryId: null
    }
  });

  useEffect(() => {
    if (detail?.id) {
      setValue('link', detail.link);
      setValue('categoryId', detail.category_id);
      setValue('name', detail.name);
      setValue('type', detail.type);
      setUploadFile(detail.image);
    } else {
      reset();
      setUploadFile([]);
    }
  }, [detail]);

  const onSubmit = async (values: FormData) => {
    try {
      const { name, link, type, categoryId } = values;
      const form = new FormData();
      form.append('name', name);
      form.append('link', link);
      form.append('type', type);
      form.append('category_id', String(categoryId));
      form.append('image', uploadFile[0]);
      if (detail?.id) {
        // await updateGame({ id: detail.id, body: form }).unwrap();
      } else {
        // await createGame(form).unwrap();
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
      title={detail?._id ? `Edit ${detail.name}` : 'Add new Game'}
      onClose={onClose}
      open={open}
      onOk={handleSubmit(onSubmit)}
      // isLoading={isLoadingCreate || isLoadingUpdate}
    >
      <Box component="form" noValidate autoComplete="off" id="form-games">
        <TextField
          fullWidth
          label="Game Name"
          sx={{ my: 2 }}
          required
          error={!!errors['name']}
          helperText={errors['name'] ? errors['name'].message : ''}
          autoComplete="off"
          {...register('name')}
        />
        <TextField
          fullWidth
          label="Link"
          sx={{ my: 2 }}
          required
          error={!!errors['link']}
          helperText={errors['link'] ? errors['link'].message : ''}
          autoComplete="off"
          {...register('link')}
        />
        <TextField
          fullWidth
          label="Type"
          sx={{ my: 2 }}
          required
          error={!!errors['type']}
          helperText={errors['type'] ? errors['type'].message : ''}
          autoComplete="off"
          {...register('type')}
        />
        <TextField
          fullWidth
          label="Category"
          type="number"
          sx={{ my: 2 }}
          required
          error={!!errors['categoryId']}
          helperText={errors['categoryId'] ? errors['categoryId'].message : ''}
          autoComplete="off"
          {...register('categoryId')}
        />
        <UploadFile uploadFile={uploadFile} onSetUploadFile={setUploadFile} />
      </Box>
    </Modals>
  );
};

export default GameModal;
