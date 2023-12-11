import { FormLabel, Grid } from '@mui/material';
import { incidentLocationMap, stateMap } from '../../config/maps';
import { MasterForm } from '../../config/types';
import { Card } from '../container';
import { Navigation } from '../navigation';
import { Header } from '../typography';

type ReviewProps = {
  activeStep: number;
  masterForm: MasterForm;
  prev: () => void;
  next: () => void;
};

export default function Review({
  activeStep,
  masterForm,
  prev,
  next,
}: ReviewProps) {
  return (
    <Grid container spacing="1rem">
      <Card>
        <Header title="Info" />
        <Grid item xs={12} md={4}>
          <FormLabel>First Name</FormLabel>
          <p>{masterForm.info.firstName}</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormLabel>Last Name</FormLabel>
          <p>{masterForm.info.lastName}</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormLabel>E-Mail</FormLabel>
          <p>{masterForm.info.email}</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormLabel>Funeral Home</FormLabel>
          <p>{masterForm.info.funeralHomeName}</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormLabel>City</FormLabel>
          <p>{masterForm.info.city}</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormLabel>State</FormLabel>
          <p>{stateMap.get(masterForm.info.state)}</p>
        </Grid>
      </Card>
      <Card>
        <Header title="Bio" />
        <Grid item xs={12} md={4}>
          <FormLabel>First Name</FormLabel>
          <p>{masterForm.bio.firstName}</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormLabel>Middle Name</FormLabel>
          <p>{masterForm.bio.middleName}</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormLabel>Last Name</FormLabel>
          <p>{masterForm.bio.lastName}</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormLabel>Nickname</FormLabel>
          <p>{masterForm.bio.nickname}</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormLabel>Place of Incident</FormLabel>
          <p>{incidentLocationMap.get(masterForm.bio.placeOfIncident)}</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormLabel>Other</FormLabel>
          <p>{masterForm.bio.other}</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormLabel>Date of Birth</FormLabel>
          <p>{new Date(masterForm.bio.birth.date).toLocaleString()}</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormLabel>City of Birth</FormLabel>
          <p>{masterForm.bio.birth.city}</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormLabel>State of Birth</FormLabel>
          <p>{stateMap.get(masterForm.bio.birth.state)}</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormLabel>Date of Death</FormLabel>
          <p>{new Date(masterForm.bio.death.date).toLocaleString()}</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormLabel>City of Death</FormLabel>
          <p>{masterForm.bio.death.city}</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormLabel>State of Death</FormLabel>
          <p>{stateMap.get(masterForm.bio.death.state)}</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormLabel>Father's First Name</FormLabel>
          <p>{masterForm.bio.parents.father.firstName}</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormLabel>Father's Last Name</FormLabel>
          <p>{masterForm.bio.parents.father.lastName}</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormLabel>Father</FormLabel>
          <p>
            {masterForm.bio.parents.father.isDeceased
              ? 'Has Passed'
              : 'Is Living'}
          </p>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormLabel>Mother's First Name</FormLabel>
          <p>{masterForm.bio.parents.mother.firstName}</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormLabel>Mother's Last Name</FormLabel>
          <p>{masterForm.bio.parents.mother.lastName}</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormLabel>Mother</FormLabel>
          <p>
            {masterForm.bio.parents.mother.isDeceased
              ? 'Has Passed'
              : 'Is Living'}
          </p>
        </Grid>
      </Card>
      <Card>
        <Header title="Education" />
        {JSON.stringify(masterForm.education)}
      </Card>
      <Card>
        <Header title="Family" />
        {JSON.stringify(masterForm.family)}
      </Card>
      <Card>
        <Header title="Employment" />
        {JSON.stringify(masterForm.employment)}
      </Card>
      <Card>
        <Header title="Service" />
        {JSON.stringify(masterForm.service)}
      </Card>
      <Navigation
        activeStep={activeStep}
        prev={prev}
        next={next}
        disabled={false}
      />
    </Grid>
  );
}
