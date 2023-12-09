import _Card from '@mui/joy/Card';
import { Grid } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <Grid item xs={12}>
      <_Card>
        <Grid container style={{ rowGap: '1rem' }}>
          {children}
        </Grid>
      </_Card>
    </Grid>
  );
}
