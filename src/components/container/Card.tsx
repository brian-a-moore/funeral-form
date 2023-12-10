import { Grid, Paper } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <Grid item xs={12}>
      <Paper>
        <Grid container style={{ rowGap: '1rem' }}>
          {children}
        </Grid>
      </Paper>
    </Grid>
  );
}
