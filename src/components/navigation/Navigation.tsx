import { Button, Grid } from '@mui/material';
import styled from 'styled-components';
import { FORM_STEPS } from '../../config/constants';

type Props = {
  activeStep: number;
  disabled: boolean;
  prev: () => void;
  next: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e?: React.BaseSyntheticEvent<object, any, any> | undefined,
  ) => Promise<void>;
};
export default function Navigation({
  activeStep,
  disabled,
  prev,
  next,
}: Props) {
  return (
    <Grid item xs={12}>
      <Nav>
        <Button
          onClick={prev}
          variant="outlined"
          disabled={activeStep === 0 || disabled}
          type="button">
          Previous
        </Button>
        <Button
          disabled={disabled}
          onClick={next}
          variant="contained"
          type="button">
          {activeStep === FORM_STEPS.length - 1 ? 'Review' : 'Next'}
        </Button>
      </Nav>
    </Grid>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  column-gap: 1rem;
`;
