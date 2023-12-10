import { joiResolver } from '@hookform/resolvers/joi';
import { Grid } from '@mui/material';
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

  const _updateImages = (name: Path<FormBio>, images: File[] | null) => {
    setValue(name, images);
  };

  const onSubmit: SubmitHandler<FormBio> = data => {
    next('bio', data);
  };

  const isOtherDisabled = watch('placeOfIncident') !== IncidentLocation.OTHER;
  const currentImages = getValues('images');

  console.log({ defaultValues });

  return (
    <Form>
      <Card>
        <Header title="Bio" />
        <Grid item xs={12} md={12}>
          <Grid container spacing="1rem">
            <TextInput
              name="firstName"
              label="First Name"
              invalidText={errors.firstName?.message}
              control={control}
              md={6}
            />
            <TextInput
              name="middleName"
              label="Middle Name"
              invalidText={errors.middleName?.message}
              control={control}
              md={6}
            />
            <TextInput
              name="lastName"
              label="Last Name"
              invalidText={errors.lastName?.message}
              control={control}
              md={6}
            />
            <TextInput
              name="nickname"
              label="Nickname"
              invalidText={errors.nickname?.message}
              control={control}
              md={6}
            />
          </Grid>
        </Grid>
      </Card>
      <Card>
        <Header title="Images" />
        <Grid item xs={12} md={12}>
          <ImageUpload<FormBio>
            name="images"
            defaultValue={currentImages ?? null}
            updateImages={_updateImages}
          />
        </Grid>
      </Card>
      <Card>
        <Grid container spacing="1rem">
          <Header title="Additional Details" />
          <SelectInput<FormBio>
            name="placeOfIncident"
            label="Place of Incident"
            options={incidentLocationMap}
            invalidText={errors.placeOfIncident?.message}
            control={control}
            md={isOtherDisabled ? 12 : 6}
          />
          {!isOtherDisabled && (
            <TextInput
              name="other"
              label="Other"
              control={control}
              invalidText={errors.other?.message}
              md={6}
            />
          )}
        </Grid>
        <Grid container spacing="1rem">
          <TextInput
            name="dateOfBirth"
            type="date"
            label="Date of Birth"
            control={control}
            invalidText={errors.dateOfBirth?.message}
          />
          <TextInput
            name="cityOfBirth"
            label="City of Birth"
            control={control}
            invalidText={errors.cityOfBirth?.message}
          />
          <SelectInput<FormBio>
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
            type="date"
            label="Date of Death"
            control={control}
            invalidText={errors.dateOfDeath?.message}
          />
          <TextInput
            name="cityOfDeath"
            label="City of Death"
            control={control}
            invalidText={errors.cityOfDeath?.message}
          />
          <SelectInput<FormBio>
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
