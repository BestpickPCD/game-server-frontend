import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  CircularProgress,
  FormControl,
  InputAdornment,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select as MUISelect,
  SelectProps,
  TextField
} from '@mui/material';
import { memo } from 'react';
import { Controller } from 'react-hook-form';
export interface MUISelectProps extends SelectProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: any;
  name: string;
  label: string;
  isFetching?: boolean;
  options: { id: number | string; name: string; value: string | number }[];
  onSearch?: (value: string) => void;
}

const Select = ({
  control,
  name,
  label,
  options,
  isFetching,
  onSearch,
  ...props
}: MUISelectProps): JSX.Element =>
  control ? (
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
            {...props}
          >
            {onSearch && (
              <ListSubheader>
                <TextField
                  size="small"
                  autoFocus
                  placeholder="Type to search..."
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    )
                  }}
                  onChange={(e) => onSearch(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key !== 'Escape') {
                      e.stopPropagation();
                    }
                  }}
                />
              </ListSubheader>
            )}
            {options?.map((item) => (
              <MenuItem
                key={item.id}
                value={item.value}
                onKeyDown={(e) => e.stopPropagation()}
              >
                {item.name}
              </MenuItem>
            ))}
            {isFetching && (
              <Box
                display="flex"
                justifyContent="center"
                marginTop="12px"
                marginBottom="12px"
              >
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
export default memo(Select);
