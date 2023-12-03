import { Alert, Grid } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FORM_BIO } from '../../config/constants';
import { incidentLocationMap, stateMap } from '../../config/maps';
import { FormBio } from '../../config/types';
import { Card, Form } from '../container';
import { CheckboxInput, ImageUpload, SelectInput, TextInput } from '../input';
import { Navigation } from '../navigation';
import { Header } from '../typography';

type Props = {
  activeStep: number;
  prev: () => void;
  next: () => void;
};

export default function Bio({ activeStep, prev, next }: Props) {
  const { control, handleSubmit } = useForm<FormBio>({
    defaultValues: FORM_BIO,
  });

  const onSubmit: SubmitHandler<FormBio> = data => {
    console.log(data);
    next();
  };

  return (
    <Form>
      <Card>
        <Header title="Bio" />
        <Grid item xs={12}>
          <Alert severity="info">
            Okay, now we need to gather some information about your loved one.
          </Alert>
        </Grid>
        <Grid item xs={12} md={4}>
          <ImageUpload />
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing="1rem">
            <TextInput
              name="firstName"
              label="First Name"
              required
              control={control}
              md={12}
            />
            <TextInput
              name="middleName"
              label="Middle Name"
              required
              control={control}
              md={12}
            />
            <TextInput
              name="lastName"
              label="Last Name"
              required
              control={control}
              md={12}
            />
            <TextInput
              name="nickname"
              label="Nickname"
              control={control}
              md={12}
            />
          </Grid>
        </Grid>
      </Card>
      <Card>
        <Grid container spacing="1rem">
          <Header title="Additional Details" />
          <SelectInput
            name="placeOfIncident"
            label="Place of Incident"
            options={incidentLocationMap}
            control={control}
            md={6}
          />
          <TextInput
            name="other"
            label="Other"
            required
            control={control}
            md={6}
          />
        </Grid>
        <Grid container spacing="1rem">
          <TextInput
            name="dateOfBirth"
            label="Date of Birth"
            type="date"
            required
            control={control}
          />
          <TextInput
            name="cityOfBirth"
            label="City of Birth"
            required
            control={control}
          />
          <SelectInput
            name="stateOfBirth"
            label="State of Birth"
            options={stateMap}
            control={control}
          />
        </Grid>
        <Grid container spacing="1rem">
          <TextInput
            name="dateOfDeath"
            label="Date of Death"
            type="date"
            required
            control={control}
          />
          <TextInput
            name="cityOfDeath"
            label="City of Death"
            required
            control={control}
          />
          <SelectInput
            name="stateOfDeath"
            label="State of Death"
            options={stateMap}
            control={control}
          />
        </Grid>
      </Card>
      <Card>
        <Grid container spacing="1rem">
          <Header title="Parents" />
          <TextInput
            name="fatherFirstName"
            label="Father's First Name"
            required
            control={control}
          />
          <TextInput
            name="fatherLastName"
            label="Father's Last Name"
            required
            control={control}
            xs={8}
          />
          <CheckboxInput
            name="fatherIsDeceased"
            label="Deceased"
            xs={4}
            control={control}
          />
        </Grid>
        <Grid container spacing="1rem">
          <TextInput
            name="motherFirstName"
            label="Mother's First Name"
            required
            control={control}
          />
          <TextInput
            name="motherLastName"
            label="Mother's Last Name"
            required
            control={control}
            xs={8}
          />
          <CheckboxInput
            name="motherIsDeceased"
            label="Deceased"
            xs={4}
            control={control}
          />
        </Grid>
      </Card>
      <Navigation
        activeStep={activeStep}
        prev={prev}
        next={handleSubmit(onSubmit)}
      />
    </Form>
  );
}
