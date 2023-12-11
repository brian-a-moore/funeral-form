import {
  Container,
  CssBaseline,
  Grid,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { useState } from 'react';
import {
  Bio,
  Education,
  Employment,
  Family,
  Info,
  Review,
  Service,
} from './components/form';
import { Stepper } from './components/navigation';
import {
  ENDPOINT_FOR_FORMDATA,
  EXTENSIVE_FORM,
  FORM_STEPS,
  MASTER_FORM,
} from './config/constants';
import { Forms, MasterForm } from './config/types';
import './index.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [masterForm, setMasterForm] = useState<MasterForm>(EXTENSIVE_FORM);

  const _nextStep = (key: keyof MasterForm, data: Forms) => {
    setMasterForm(prevState => ({ ...prevState, [key]: data }));
    setActiveStep(currentStep =>
      currentStep < FORM_STEPS.length ? currentStep + 1 : currentStep,
    );
  };
  const _prevStep = () =>
    setActiveStep(currentStep => (currentStep === 0 ? 0 : currentStep - 1));

  const _finalSubmit = () => {
    const formData = new FormData();

    if (masterForm.bio.images) {
      masterForm.bio.images.map((image, index) =>
        formData.append(`image_${index}`, image),
      );
    }

    fetch(ENDPOINT_FOR_FORMDATA, {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        const dataToSubmit = { ...masterForm };
        dataToSubmit.bio.images = null;

        fetch(ENDPOINT_FOR_FORMDATA, {
          method: 'POST',
          body: JSON.stringify(dataToSubmit),
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            console.log('Success:', data);
            setActiveStep(0);
            setMasterForm(MASTER_FORM);
          });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

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
      case 6:
        return (
          <Review
            activeStep={activeStep}
            masterForm={masterForm}
            prev={_prevStep}
            next={_finalSubmit}
          />
        );
      default:
        throw new Error(`Could not find form for active step: ${activeStep}`);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Stepper activeStep={activeStep} />
        <Grid item xs={12}>
          {_showForm()}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
