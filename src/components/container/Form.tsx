import { Grid } from '@mui/material';
import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

export default function Form({ children }: Props) {
  return (
    <_Form>
      <Grid container spacing="1rem">
        {children}
      </Grid>
    </_Form>
  );
}

const _Form = styled.form`
  /* background-color: lightgray; */
  margin-top: 1rem;
`;
