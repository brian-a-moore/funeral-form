import { joiResolver } from '@hookform/resolvers/joi';
import { Grid } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { stateMap, timeMap } from '../../config/maps';
import { serviceResolver } from '../../config/resolvers';
import { FormService, Forms, MasterForm } from '../../config/types';
import { Card, Form } from '../container';
import { SelectInput, TextInput } from '../input';
import { Navigation } from '../navigation';
import { Header } from '../typography';

type Props = {
  activeStep: number;
  defaultValues: FormService;
  prev: () => void;
  next: (key: keyof MasterForm, data: Forms) => void;
};

export default function Service({
  activeStep,
  defaultValues,
  prev,
  next,
}: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormService>({
    defaultValues,
    resolver: joiResolver(serviceResolver),
  });

  const onSubmit: SubmitHandler<FormService> = data => {
    next('service', data);
  };

  return (
    <Form>
      <Card>
        <Header title="Service Location" />
        <Grid container spacing="1rem">
          <TextInput
            name="serviceLocation.name"
            label="Church/Funeral Home"
            control={control}
            invalidText={errors.serviceLocation?.name?.message}
          />
          <TextInput
            name="serviceLocation.city"
            label="City"
            control={control}
            invalidText={errors.serviceLocation?.city?.message}
          />
          <SelectInput<FormService>
            name="serviceLocation.state"
            label="State"
            options={stateMap}
            control={control}
            invalidText={errors.serviceLocation?.state?.message}
          />
          <TextInput
            name="serviceLocation.ministerName"
            label="Minister's Name"
            control={control}
            invalidText={errors.serviceLocation?.ministerName?.message}
          />
          <TextInput
            type="date"
            name="serviceLocation.date"
            label="Date of Service"
            control={control}
            invalidText={errors.serviceLocation?.date?.message}
          />
          <SelectInput<FormService>
            name="serviceLocation.time"
            label="Time of Service"
            control={control}
            options={timeMap}
            invalidText={errors.serviceLocation?.time?.message}
          />
        </Grid>
      </Card>
      <Card>
        <Header title="Viewing" />
        <Grid container spacing="1rem">
          <TextInput
            name="viewingLocation.name"
            label="Church/Funeral Home"
            control={control}
            invalidText={errors.viewingLocation?.name?.message}
          />
          <TextInput
            name="viewingLocation.city"
            label="City"
            control={control}
            invalidText={errors.viewingLocation?.city?.message}
          />
          <SelectInput<FormService>
            name="viewingLocation.state"
            label="State"
            control={control}
            options={stateMap}
            invalidText={errors.viewingLocation?.state?.message}
          />
          <SelectInput<FormService>
            name="viewingLocation.startTime"
            label="Start Time"
            control={control}
            options={timeMap}
            invalidText={errors.viewingLocation?.startTime?.message}
          />
          <SelectInput<FormService>
            name="viewingLocation.endTime"
            label="End Time"
            control={control}
            options={timeMap}
            invalidText={errors.viewingLocation?.endTime?.message}
          />
        </Grid>
      </Card>
      <Card>
        <Header title="Repass" />
        <Grid container spacing="1rem">
          <TextInput
            name="repassLocation.name"
            label="Church/Funeral Home"
            control={control}
            invalidText={errors.repassLocation?.name?.message}
          />
          <TextInput
            name="repassLocation.city"
            label="City"
            control={control}
            invalidText={errors.repassLocation?.city?.message}
          />
          <SelectInput<FormService>
            name="repassLocation.state"
            label="State"
            control={control}
            options={stateMap}
            invalidText={errors.repassLocation?.state?.message}
          />
        </Grid>
      </Card>
      <Navigation
        activeStep={activeStep}
        disabled={isSubmitting}
        prev={prev}
        next={handleSubmit(onSubmit)}
      />
    </Form>
  );
}
