import { FormControl, FormHelperText, FormLabel } from '@mui/joy';
import Input from '@mui/joy/Input';
import { Grid } from '@mui/material';
import { HTMLInputTypeAttribute } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

type Props<F extends FieldValues> = {
  disabled?: boolean;
  required?: boolean;
  invalidText?: string;
  name: Path<F>;
  label: string;
  type?: HTMLInputTypeAttribute;
  control: Control<F, unknown>;
  xs?: number;
  md?: number;
};

export default function TextInput<F extends FieldValues>({
  disabled = false,
  required = false,
  invalidText,
  name,
  label,
  type = 'text',
  control,
  xs = 12,
  md = 4,
}: Props<F>) {
  return (
    <Grid item xs={xs} md={md}>
      <FormLabel style={{ marginBottom: '0.2rem' }}>{label}</FormLabel>
      <Controller
        disabled={disabled}
        name={name}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <FormControl error={!!invalidText}>
            <Input
              disabled={disabled}
              error={!!invalidText}
              variant="outlined"
              placeholder={label}
              fullWidth
              type={type}
              {...field}
            />
            {invalidText && <FormHelperText>{invalidText}</FormHelperText>}
          </FormControl>
        )}
      />
    </Grid>
  );
}
