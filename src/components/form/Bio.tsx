import { joiResolver } from '@hookform/resolvers/joi';
import { Alert, Grid } from '@mui/material';
import { Path, SubmitHandler, useForm } from 'react-hook-form';
import { IncidentLocation } from '../../config/enums';
import { incidentLocationMap, stateMap } from '../../config/maps';
import { bioResolver } from '../../config/resolvers';
import { FormBio, Forms, MasterForm } from '../../config/types';
import { Card, Form } from '../container';
import { CheckboxInput, ImageUpload, SelectInput, TextInput } from '../input';
import { Navigation } from '../navigation';
import { Header } from '../typography';

type Props = {
  activeStep: number;
  defaultValues: FormBio;
  prev: () => void;
  next: (key: keyof MasterForm, data: Forms) => void;
};

export default function Bio({ activeStep, defaultValues, prev, next }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    getValues,
    watch,
  } = useForm<FormBio>({
    defaultValues,
    resolver: joiResolver(bioResolver),
  });

  const _updateImage = (name: Path<FormBio>, file: File | null) => {
    setValue(name, file);
  };

  const onSubmit: SubmitHandler<FormBio> = data => {
    next('bio', data);
  };

  const isOtherDisabled = watch('placeOfIncident') !== IncidentLocation.OTHER;
  const currentImage = getValues('image');

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
          <ImageUpload<FormBio>
            name="image"
            defaultValue={currentImage ?? null}
            updateImage={_updateImage}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing="1rem">
            <TextInput
              name="firstName"
              label="First Name"
              invalidText={errors.firstName?.message}
              control={control}
              md={12}
            />
            <TextInput
              name="middleName"
              label="Middle Name"
              invalidText={errors.middleName?.message}
              control={control}
              md={12}
            />
            <TextInput
              name="lastName"
              label="Last Name"
              invalidText={errors.lastName?.message}
              control={control}
              md={12}
            />
            <TextInput
              name="nickname"
              label="Nickname"
              invalidText={errors.nickname?.message}
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
            invalidText={errors.placeOfIncident?.message}
            control={control}
            md={6}
          />
          <TextInput
            name="other"
            label="Other"
            control={control}
            disabled={isOtherDisabled}
            invalidText={errors.other?.message}
            md={6}
          />
        </Grid>
        <Grid container spacing="1rem">
          <TextInput
            name="dateOfBirth"
            label="Date of Birth"
            type="date"
            control={control}
            invalidText={errors.dateOfBirth?.message}
          />
          <TextInput
            name="cityOfBirth"
            label="City of Birth"
            control={control}
            invalidText={errors.cityOfBirth?.message}
          />
          <SelectInput
            name="stateOfBirth"
            label="State of Birth"
            options={stateMap}
            control={control}
            invalidText={errors.stateOfBirth?.message}
          />
        </Grid>
        <Grid container spacing="1rem">
          <TextInput
            name="dateOfDeath"
            label="Date of Death"
            type="date"
            control={control}
            invalidText={errors.dateOfDeath?.message}
          />
          <TextInput
            name="cityOfDeath"
            label="City of Death"
            control={control}
            invalidText={errors.cityOfDeath?.message}
          />
          <SelectInput
            name="stateOfDeath"
            label="State of Death"
            options={stateMap}
            control={control}
            invalidText={errors.stateOfDeath?.message}
          />
        </Grid>
      </Card>
      <Card>
        <Grid container spacing="1rem">
          <Header title="Parents" />
          <TextInput
            name="fatherFirstName"
            label="Father's First Name"
            control={control}
            invalidText={errors.fatherFirstName?.message}
          />
          <TextInput
            name="fatherLastName"
            label="Father's Last Name"
            control={control}
            invalidText={errors.fatherLastName?.message}
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
            control={control}
            invalidText={errors.motherFirstName?.message}
          />
          <TextInput
            name="motherLastName"
            label="Mother's Last Name"
            control={control}
            invalidText={errors.motherLastName?.message}
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
        disabled={isSubmitting}
        activeStep={activeStep}
        prev={prev}
        next={handleSubmit(onSubmit)}
      />
    </Form>
  );
}
