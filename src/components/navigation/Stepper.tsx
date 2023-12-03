import { Grid, StepButton, Stepper as _Stepper } from '@mui/material';
import Step from '@mui/material/Step';
import { FORM_STEPS } from '../../config/constants';

type Props = {
  activeStep: number;
};

export default function Stepper({ activeStep }: Props) {
  return (
    <Grid item xs={12}>
      <_Stepper activeStep={activeStep}>
        {FORM_STEPS.map((label, index) => (
          <Step key={index}>
            <StepButton>{label}</StepButton>
          </Step>
        ))}
      </_Stepper>
    </Grid>
  );
}
