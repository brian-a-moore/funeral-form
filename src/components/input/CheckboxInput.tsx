import Checkbox from '@mui/joy/Checkbox';
import { Grid } from '@mui/material';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

type Props<F extends FieldValues> = {
  name: Path<F>;
  label: string;
  control: Control<F, unknown>;
  xs?: number;
  md?: number;
};

export default function CheckboxInput<F extends FieldValues>({
  name,
  label,
  xs = 12,
  md = 4,
  control,
}: Props<F>) {
  return (
    <Grid
      item
      xs={xs}
      md={md}
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        marginBottom: '0.5rem',
      }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Checkbox label={label} {...field} />}
      />
    </Grid>
  );
}
