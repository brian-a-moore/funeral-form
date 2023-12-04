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
            name="serviceLocationName"
            label="Church/Funeral Home"
            control={control}
            invalidText={errors.serviceLocationName?.message}
          />
          <TextInput
            name="serviceLocationCity"
            label="City"
            control={control}
            invalidText={errors.serviceLocationCity?.message}
          />
          <SelectInput
            name="serviceLocationState"
            label="State"
            options={stateMap}
            control={control}
            invalidText={errors.serviceLocationState?.message}
          />
          <TextInput
            name="serviceLocationMinisterName"
            label="Minister's Name"
            control={control}
            invalidText={errors.serviceLocationMinisterName?.message}
          />
          <TextInput
            type="date"
            name="serviceLocationDateOfService"
            label="Date of Service"
            control={control}
            invalidText={errors.serviceLocationDateOfService?.message}
          />
          <SelectInput
            name="serviceLocationTimeOfService"
            label="Time of Service"
            control={control}
            options={timeMap}
            invalidText={errors.serviceLocationTimeOfService?.message}
          />
        </Grid>
      </Card>
      <Card>
        <Header title="Viewing" />
        <Grid container spacing="1rem">
          <TextInput
            name="viewingLocationName"
            label="Church/Funeral Home"
            control={control}
            invalidText={errors.viewingLocationName?.message}
          />
          <TextInput
            name="viewingLocationCity"
            label="City"
            control={control}
            invalidText={errors.viewingLocationCity?.message}
          />
          <SelectInput
            name="viewingLocationState"
            label="State"
            control={control}
            options={stateMap}
            invalidText={errors.viewingLocationState?.message}
          />
          <SelectInput
            name="viewingLocationStartTime"
            label="Start Time"
            control={control}
            options={timeMap}
            invalidText={errors.viewingLocationStartTime?.message}
          />
          <SelectInput
            name="viewingLocationEndTime"
            label="End Time"
            control={control}
            options={timeMap}
            invalidText={errors.viewingLocationEndTime?.message}
          />
        </Grid>
      </Card>
      <Card>
        <Header title="Repass" />
        <Grid container spacing="1rem">
          <TextInput
            name="repassLocationName"
            label="Church/Funeral Home"
            control={control}
            invalidText={errors.repassLocationName?.message}
          />
          <TextInput
            name="repassLocationCity"
            label="City"
            control={control}
            invalidText={errors.repassLocationCity?.message}
          />
          <SelectInput
            name="repassLocationState"
            label="State"
            control={control}
            options={stateMap}
            invalidText={errors.repassLocationState?.message}
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
