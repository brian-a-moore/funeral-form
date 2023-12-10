import { Button, Grid, styled } from '@mui/material';
import { FORM_STEPS } from '../../config/constants';

type Props = {
  activeStep: number;
  disabled: boolean;
  prev: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  next: any; // TODO: Figure this out later
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
          disabled={activeStep === 0 || disabled}
          type="button">
          Previous
        </Button>
        <Button disabled={disabled} onClick={next} type="button">
          {activeStep === FORM_STEPS.length - 1 ? 'Review' : 'Next'}
        </Button>
      </Nav>
    </Grid>
  );
}

const Nav = styled('nav')({
  display: 'flex',
  justifyContent: 'flex-end',
  columnGap: '1rem',
});
