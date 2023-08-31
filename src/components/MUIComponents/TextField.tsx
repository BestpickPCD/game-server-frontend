import { TextField as MUITextField, TextFieldProps } from '@mui/material';
import { ReactNode } from 'react';
interface MUIInputProps extends Omit<TextFieldProps, 'variant'> {
  label?: ReactNode | string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
}
const TextField = ({
  label,
  name,
  errors,
  register,
  ...rest
}: MUIInputProps): JSX.Element => (
  <MUITextField
    label={label}
    error={!!errors[name]}
    helperText={errors[name] ? errors[name].message : ''}
    fullWidth
    {...register(name)}
    {...rest}
  />
);

export default TextField;
