import { FormControl, FormHelperText } from '@mui/joy';
import Textarea from '@mui/joy/Textarea';
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

export default function TextArea<F extends FieldValues>({
  disabled = false,
  required = false,
  invalidText,
  name,
  label,
  control,
  xs = 12,
  md = 4,
}: Props<F>) {
  return (
    <Grid item xs={xs} md={md}>
      <Controller
        disabled={disabled}
        name={name}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <FormControl error={!!invalidText}>
            <Textarea
              disabled={disabled}
              error={!!invalidText}
              variant="outlined"
              placeholder={label}
              minRows={10}
              maxRows={10}
              {...field}
            />
            {invalidText && <FormHelperText>{invalidText}</FormHelperText>}
          </FormControl>
        )}
      />
    </Grid>
  );
}
