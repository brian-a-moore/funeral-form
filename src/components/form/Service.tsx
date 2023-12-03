import { Grid } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FORM_SERVICE } from '../../config/constants';
import { stateMap } from '../../config/maps';
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
  const { control, handleSubmit } = useForm<FormService>({
    defaultValues: FORM_SERVICE,
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
          />
          <TextInput
            name="serviceLocationCity"
            label="City"
            control={control}
          />
          <SelectInput
            name="serviceLocationState"
            label="State"
            options={stateMap}
            control={control}
          />
          <TextInput
            name="serviceLocationMinisterName"
            label="Minister's Name"
            control={control}
          />
          <TextInput
            name="serviceLocationDayOfService"
            label="Day of Service"
            control={control}
          />
          <TextInput
            name="serviceLocationTimeOfService"
            label="Time of Service"
            control={control}
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
          />
          <TextInput
            name="viewingLocationCity"
            label="City"
            control={control}
          />
          <SelectInput
            name="viewingLocationState"
            label="State"
            control={control}
            options={stateMap}
          />
          <TextInput
            name="viewingLocationStartTime"
            label="Start Time"
            control={control}
          />
          <TextInput
            name="viewingLocationEndTime"
            label="End Time"
            control={control}
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
          />
          <TextInput name="repassLocationCity" label="City" control={control} />
          <SelectInput
            name="repassLocationState"
            label="State"
            control={control}
            options={stateMap}
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
