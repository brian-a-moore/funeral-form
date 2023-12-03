import { Grid, GridTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Col({
  children,
  ...rest
}: Props & OverridableComponent<GridTypeMap<object, 'div'>>) {
  return (
    <Grid item {...rest}>
      {children}
    </Grid>
  );
}
