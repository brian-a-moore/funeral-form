import { Check } from '@mui/icons-material';
import { StepIndicator } from '@mui/joy';
import Step from '@mui/joy/Step';
import _Stepper from '@mui/joy/Stepper';
import { Grid } from '@mui/material';
import { useWindowSize } from '@uidotdev/usehooks';
import { FORM_STEPS } from '../../config/constants';

type Props = {
  activeStep: number;
};

export default function Stepper({ activeStep }: Props) {
  const { width } = useWindowSize();
  return (
    <Grid item xs={12}>
      <_Stepper
        orientation={(width as number) < 590 ? 'vertical' : 'horizontal'}>
        {FORM_STEPS.map((label, index) => (
          <Step
            key={index}
            indicator={
              <StepIndicator
                variant={activeStep <= index ? 'soft' : 'solid'}
                color={activeStep < index ? 'neutral' : 'primary'}>
                {activeStep <= index ? index + 1 : <Check />}
              </StepIndicator>
            }
            sx={{
              '&::after': {
                ...(activeStep > index &&
                  index !== 2 && { bgcolor: 'primary.solidBg' }),
              },
            }}>
            <span>{label}</span>
          </Step>
        ))}
      </_Stepper>
    </Grid>
  );
}
