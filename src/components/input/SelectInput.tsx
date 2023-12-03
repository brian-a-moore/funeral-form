import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

type Props<F extends FieldValues> = {
  name: Path<F>;
  label: string;
  options: Map<string, string>;
  control: Control<F, unknown>;
  required?: boolean;
  xs?: number;
  md?: number;
};

export default function SelectInput<F extends FieldValues>({
  name,
  label,
  options,
  control,
  required = false,
  xs = 12,
  md = 4,
}: Props<F>) {
  return (
    <Grid item xs={xs} md={md}>
      <FormControl fullWidth size="small">
        <InputLabel id={name}>{label}</InputLabel>
        <Controller
          name={name}
          control={control}
          rules={{ required }}
          render={({ field }) => (
            <Select labelId={name} {...field}>
              {Array.from(options.entries()).map(([id, label]) => (
                <MenuItem key={id} value={id}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>
    </Grid>
  );
}
