import { FormControl, FormLabel } from '@mui/joy';
import FormHelperText from '@mui/joy/FormHelperText';
import Option from '@mui/joy/Option';
import Select from '@mui/joy/Select';
import { Grid } from '@mui/material';
import {
  Control,
  Controller,
  FieldValues,
  Path,
  PathValue,
  UseFormSetValue,
} from 'react-hook-form';

type Props<F extends FieldValues> = {
  name: Path<F>;
  label: string;
  options: Map<string, string>;
  control: Control<F, unknown>;
  setValue: UseFormSetValue<F>;
  required?: boolean;
  invalidText?: string;
  xs?: number;
  md?: number;
};

export default function SelectInput<F extends FieldValues>({
  name,
  label,
  options,
  control,
  setValue,
  required = false,
  invalidText,
  xs = 12,
  md = 4,
}: Props<F>) {
  return (
    <Grid item xs={xs} md={md}>
      <FormLabel style={{ marginBottom: '0.2rem' }}>{label}</FormLabel>
      <FormControl error={!!invalidText}>
        <Controller
          name={name}
          control={control}
          rules={{ required }}
          render={({ field }) => (
            <Select
              placeholder={label}
              {...field}
              onChange={(_, v) => {
                setValue(name, v as PathValue<F, Path<F>>);
              }}>
              {Array.from(options.entries()).map(([id, label]) => (
                <Option key={id} value={id}>
                  {label}
                </Option>
              ))}
            </Select>
          )}
        />
        {invalidText && <FormHelperText>{invalidText}</FormHelperText>}
      </FormControl>
    </Grid>
  );
}
