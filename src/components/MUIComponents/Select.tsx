/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select as MUISelect,
  SelectChangeEvent,
  SelectProps,
  TextField
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { Controller } from 'react-hook-form';

export interface MUISelectProps extends SelectProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: any;
  name: string;
  label: string;
  isFetching?: boolean;
  options: { id: number; name: string; value: string }[];
}

const Select = ({
  control,
  name,
  label,
  options,
  isFetching,
  ...props
}: MUISelectProps): JSX.Element => {
  const selectRef = useRef<HTMLDivElement | null>(null);
  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
  };
  useEffect(() => {
    if (selectRef) {
      selectRef?.current?.addEventListener('keypress', (e) => {
        console.log('day');
        e.preventDefault();
      });
    }
  }, [selectRef]);
  return control ? (
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
            ref={selectRef}
            {...field}
            {...props}
          >
            {options?.map((item) => (
              <MenuItem
                key={item.id}
                value={item.value}
                onKeyDown={(e) => e.stopPropagation()}
                disabled
              >
                {item.name}
              </MenuItem>
            ))}
            {isFetching && (
              <Box display="flex" justifyContent="center" marginTop="12px">
                <CircularProgress size={32} disableShrink thickness={3} />
              </Box>
            )}
          </MUISelect>
        </FormControl>
      )}
    />
  ) : (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <MUISelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={label}
        {...props}
      >
        {options?.map((item) => (
          <MenuItem key={item.id} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
};
export default Select;
