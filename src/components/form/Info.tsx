import { joiResolver } from '@hookform/resolvers/joi';
import { Alert, Grid } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FORM_INFO } from '../../config/constants';
import { stateMap } from '../../config/maps';
import { infoResolver } from '../../config/resolvers';
import { FormInfo } from '../../config/types';
import { Card, Form } from '../container';
import { SelectInput, TextInput } from '../input';
import { Navigation } from '../navigation';
import { Header } from '../typography';

type Props = {
  activeStep: number;
  prev: () => void;
  next: () => void;
};

export default function Info({ activeStep, prev, next }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInfo>({
    defaultValues: FORM_INFO,
    resolver: joiResolver(infoResolver),
  });

  const onSubmit: SubmitHandler<FormInfo> = data => {
    console.log(data);
    next();
  };

  return (
    <Form>
      <Card>
        <Header title="Your Info" />
        <Grid container spacing="1rem">
          <Grid item xs={12}>
            <Alert severity="info">
              To begin, we will need some information about you and the funeral
              home responsible for your family's services.
            </Alert>
          </Grid>
          <TextInput
            name="firstName"
            label="First Name"
            control={control}
            invalidText={errors.firstName?.message}
            required
          />
          <TextInput
            name="lastName"
            label="Last Name"
            control={control}
            invalidText={errors.lastName?.message}
            required
          />
          <TextInput
            name="email"
            label="E-Mail"
            control={control}
            required
            invalidText={errors.email?.message}
          />
          <TextInput
            name="funeralHomeName"
            label="Funeral Home Name"
            control={control}
            invalidText={errors.funeralHomeName?.message}
            required
          />
          <TextInput
            name="city"
            label="City"
            control={control}
            required
            invalidText={errors.city?.message}
          />
          <SelectInput
            name="state"
            label="State"
            options={stateMap}
            control={control}
            invalidText={errors.state?.message}
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
