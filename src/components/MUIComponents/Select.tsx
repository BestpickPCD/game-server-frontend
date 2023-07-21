import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MUISelect,
  SelectProps
} from '@mui/material';
import { Controller } from 'react-hook-form';

interface MUISelectProps extends SelectProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  name: string;
  label: string;
  options: { id: number; name: string; value: string }[];
}

const Select = ({
  control,
  name,
  label,
  options
}: MUISelectProps): JSX.Element => (
  <Controller
    control={control}
    name={name}
    render={({ field }) => (
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <MUISelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={label}
          {...field}
        >
          {options?.map((item) => (
            <MenuItem key={item.id} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </MUISelect>
      </FormControl>
    )}
  />
);

export default Select;
