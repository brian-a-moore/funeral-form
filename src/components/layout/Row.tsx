import { Grid } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Row({ children }: Props) {
  return (
    <Grid container spacing="1rem">
      {children}
    </Grid>
  );
}
