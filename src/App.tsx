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
import { FORM_STEPS, MASTER_FORM } from './config/constants';
import { Forms, MasterForm } from './config/types';

function App() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [masterForm, setMasterForm] = useState<MasterForm>(MASTER_FORM);

  console.debug({ masterForm });

  const _nextStep = (key: keyof MasterForm, data: Forms) => {
    setMasterForm(prevState => ({ ...prevState, [key]: data }));
    setActiveStep(currentStep =>
      currentStep < FORM_STEPS.length - 1 ? currentStep + 1 : currentStep,
    );
  };
  const _prevStep = () =>
    setActiveStep(currentStep => (currentStep === 0 ? 0 : currentStep - 1));

  const _showForm = () => {
    switch (activeStep) {
      case 0:
        return (
          <Info
            activeStep={activeStep}
            defaultValues={masterForm.info}
            prev={_prevStep}
            next={_nextStep}
          />
        );
      case 1:
        return (
          <Bio
            activeStep={activeStep}
            defaultValues={masterForm.bio}
            prev={_prevStep}
            next={_nextStep}
          />
        );
      case 2:
        return (
          <Education
            activeStep={activeStep}
            defaultValues={masterForm.education}
            prev={_prevStep}
            next={_nextStep}
          />
        );
      case 3:
        return (
          <Family
            activeStep={activeStep}
            defaultValues={masterForm.family}
            prev={_prevStep}
            next={_nextStep}
          />
        );
      case 4:
        return (
          <Employment
            activeStep={activeStep}
            defaultValues={masterForm.employment}
            prev={_prevStep}
            next={_nextStep}
          />
        );
      case 5:
        return (
          <Service
            activeStep={activeStep}
            defaultValues={masterForm.service}
            prev={_prevStep}
            next={_nextStep}
          />
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
