import { joiResolver } from '@hookform/resolvers/joi';
import { Grid } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FORM_SERVICE } from '../../config/constants';
import { stateMap } from '../../config/maps';
import { serviceResolver } from '../../config/resolvers';
import { FormService } from '../../config/types';
import { Card, Form } from '../container';
import { SelectInput, TextInput } from '../input';
import { Navigation } from '../navigation';
import { Header } from '../typography';

type Props = {
  activeStep: number;
  prev: () => void;
  next: () => void;
};

export default function Service({ activeStep, prev, next }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormService>({
    defaultValues: FORM_SERVICE,
    resolver: joiResolver(serviceResolver),
  });

  const onSubmit: SubmitHandler<FormService> = data => {
    console.log(data);
    next();
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
            name="serviceLocationDayOfService"
            label="Day of Service"
            control={control}
            invalidText={errors.serviceLocationDayOfService?.message}
          />
          <TextInput
            name="serviceLocationTimeOfService"
            label="Time of Service"
            control={control}
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
          <TextInput
            name="viewingLocationStartTime"
            label="Start Time"
            control={control}
            invalidText={errors.viewingLocationStartTime?.message}
          />
          <TextInput
            name="viewingLocationEndTime"
            label="End Time"
            control={control}
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
