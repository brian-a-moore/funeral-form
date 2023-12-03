import { joiResolver } from '@hookform/resolvers/joi';
import { Delete } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
import {
  Control,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import { DEFAULT_EMPLOYER, FORM_EMPLOYMENT } from '../../config/constants';
import { stateMap } from '../../config/maps';
import { EmploymentResolver } from '../../config/resolvers';
import { Employer as EmployerType, FormEmployment } from '../../config/types';
import { generateId } from '../../helpers/generate';
import { Card, Form } from '../container';
import { CheckboxInput, SelectInput, TextInput } from '../input';
import { Navigation } from '../navigation';
import { EmptyList, Header } from '../typography';

type Props = {
  activeStep: number;
  prev: () => void;
  next: () => void;
};

export default function Employment({ activeStep, prev, next }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormEmployment>({
    defaultValues: FORM_EMPLOYMENT,
    resolver: joiResolver(EmploymentResolver),
  });

  console.log({ errors });

  const {
    fields: employers,
    append,
    remove,
  } = useFieldArray({
    control,
    name: 'employers',
    rules: {
      maxLength: 10,
    },
  });

  const onSubmit: SubmitHandler<FormEmployment> = data => {
    console.log(data);
    next();
  };

  const _addEmployer = () => append({ id: generateId(), ...DEFAULT_EMPLOYER });
  const _removeEmployer = (index: number) => remove(index);

  return (
    <Form>
      <Grid item xs={12}>
        <Grid container spacing="1rem">
          <Card>
            <Header
              title="Employers"
              disabled={employers.length === 10}
              addFn={_addEmployer}
            />
          </Card>
          {employers.length ? (
            employers.map((employer, index) => (
              <Employer
                indexNumber={index}
                employer={employer}
                removeEmployer={_removeEmployer}
                control={control}
              />
            ))
          ) : (
            <EmptyList text="No employers added" />
          )}
        </Grid>
      </Grid>
      <Card>
        <Grid container spacing="1rem">
          <Header title="Final Thoughts" />
          <TextInput
            name="hobbies"
            label="Hobbies"
            control={control}
            multiline
            maxRows={10}
            md={6}
          />
          <TextInput
            name="additionalInfo"
            label="Additional Information"
            control={control}
            multiline
            maxRows={10}
            md={6}
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

const Employer = ({
  control,
  indexNumber,
  employer,
  removeEmployer,
}: {
  control: Control<FormEmployment, unknown>;
  indexNumber: number;
  employer: EmployerType;
  removeEmployer: (index: number) => void;
}) => {
  return (
    <Card key={employer.id}>
      <Grid container spacing="1rem">
        <TextInput
          name={`employers.${indexNumber}.name`}
          label="Company Name"
          control={control}
          xs={6}
        />
        <TextInput
          name={`employers.${indexNumber}.city`}
          label="City"
          control={control}
          xs={6}
        />
        <SelectInput
          name={`employers.${indexNumber}.state`}
          label="State"
          options={stateMap}
          control={control}
          xs={4}
          md={4}
        />
        <TextInput
          type="number"
          name={`employers.${indexNumber}.numOfYears`}
          label="Years worked"
          control={control}
          xs={4}
          md={4}
        />
        <CheckboxInput
          name={`employers.${indexNumber}.isRetired`}
          label="Retired"
          control={control}
          xs={4}
          md={4}
        />
        <Grid item xs={12}>
          <Button
            fullWidth
            color="error"
            startIcon={<Delete />}
            onClick={() => removeEmployer(indexNumber)}>
            Remove Employer
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};
