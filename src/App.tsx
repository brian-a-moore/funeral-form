import { Grid } from '@mui/material';
import { useState } from 'react';
import { Container } from './components/container';
import {
  Bio,
  Education,
  Employment,
  Family,
  Info,
  Service,
} from './components/form';
import { Stepper } from './components/navigation';
import { FORM_STEPS } from './config/constants';

function App() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const _nextStep = () =>
    setActiveStep(currentStep =>
      currentStep < FORM_STEPS.length - 1 ? currentStep + 1 : currentStep,
    );
  const _prevStep = () =>
    setActiveStep(currentStep => (currentStep === 0 ? 0 : currentStep - 1));

  const _showForm = () => {
    switch (activeStep) {
      case 0:
        return (
          <Info activeStep={activeStep} prev={_prevStep} next={_nextStep} />
        );
      case 1:
        return (
          <Bio activeStep={activeStep} prev={_prevStep} next={_nextStep} />
        );
      case 2:
        return (
          <Education
            activeStep={activeStep}
            prev={_prevStep}
            next={_nextStep}
          />
        );
      case 3:
        return (
          <Family activeStep={activeStep} prev={_prevStep} next={_nextStep} />
        );
      case 4:
        return (
          <Employment
            activeStep={activeStep}
            prev={_prevStep}
            next={_nextStep}
          />
        );
      case 5:
        return (
          <Service activeStep={activeStep} prev={_prevStep} next={_nextStep} />
        );
      default:
        throw new Error(`Could not find form for active step: ${activeStep}`);
    }
  };

  return (
    <Container>
      <Stepper activeStep={activeStep} />
      <Grid item xs={12}>
        {_showForm()}
      </Grid>
    </Container>
  );
}

export default App;
