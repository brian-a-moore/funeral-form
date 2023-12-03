import { Delete } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
import {
  Control,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import {
  DEFAULT_INSTITUTION,
  DEFAULT_ORGANIZATION,
  FORM_EDUCATION,
} from '../../config/constants';
import {
  educationLevelMap,
  militaryBranchMap,
  stateMap,
} from '../../config/maps';
import {
  FormEducation,
  Institution as InstitutionType,
  Organization as OrganizationType,
} from '../../config/types';
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

export default function Education({ activeStep, prev, next }: Props) {
  const { control, handleSubmit } = useForm<FormEducation>({
    defaultValues: FORM_EDUCATION,
  });

  const {
    fields: institutions,
    append: appendInstitution,
    remove: removeInstitution,
  } = useFieldArray({
    control,
    name: 'institutions',
    rules: {
      maxLength: 10,
    },
  });

  const {
    fields: organizations,
    append: appendOrganization,
    remove: removeOrganization,
  } = useFieldArray({
    control,
    name: 'organizations',
    rules: {
      maxLength: 10,
    },
  });

  const onSubmit: SubmitHandler<FormEducation> = data => {
    console.log(data);
    next();
  };

  const _addInstitution = () =>
    appendInstitution({ id: generateId(), ...DEFAULT_INSTITUTION });
  const _removeInstitution = (index: number) => removeInstitution(index);

  const _addOrganization = () =>
    appendOrganization({ id: generateId(), ...DEFAULT_ORGANIZATION });
  const _removeOrganization = (index: number) => removeOrganization(index);

  return (
    <Form>
      <Grid item xs={12} md={6}>
        <Grid container spacing="1rem">
          <Card>
            <Header
              title="Institutions"
              disabled={institutions.length === 10}
              addFn={_addInstitution}
            />
          </Card>
          {institutions.length ? (
            institutions.map((institution, index) => (
              <Institution
                indexNumber={index}
                institution={institution}
                removeInstitution={_removeInstitution}
                control={control}
              />
            ))
          ) : (
            <EmptyList text="No institution added" />
          )}
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing="1rem">
          <Card>
            <Header
              title="Charitable Organizations"
              disabled={organizations.length === 10}
              addFn={_addOrganization}
            />
          </Card>
          {organizations.length ? (
            organizations.map((organization, index) => (
              <Organization
                indexNumber={index}
                organization={organization}
                removeOrganization={_removeOrganization}
                control={control}
              />
            ))
          ) : (
            <EmptyList text="No organizations added" />
          )}
        </Grid>
      </Grid>
      <Card>
        <Grid container spacing="1rem">
          <Header title="Military Service" />
          <SelectInput
            name="militaryService.branch"
            label="Branch"
            options={militaryBranchMap}
            md={3}
            control={control}
          />
          <TextInput
            name="militaryService.position"
            label="Position"
            control={control}
          />
          <TextInput
            name="militaryService.numOfYears"
            type="number"
            label="Years of Service"
            md={3}
            control={control}
          />
          <CheckboxInput
            name="militaryService.isRetired"
            label="Retired"
            control={control}
            md={2}
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

const Institution = ({
  indexNumber,
  institution,
  removeInstitution,
  control,
}: {
  indexNumber: number;
  institution: InstitutionType;
  removeInstitution: (index: number) => void;
  control: Control<FormEducation, unknown>;
}) => {
  return (
    <Card key={institution.id}>
      <Grid container spacing="1rem">
        <TextInput
          name={`institutions.${indexNumber}.name`}
          label="Institution Name"
          control={control}
          md={12}
        />
        <TextInput
          name={`institutions.${indexNumber}.city`}
          label="City"
          control={control}
          md={12}
        />
        <SelectInput
          name={`institutions.${indexNumber}.state`}
          label="State"
          options={stateMap}
          control={control}
          xs={6}
          md={6}
        />
        <TextInput
          name={`institutions.${indexNumber}.major`}
          label="Major"
          control={control}
          xs={6}
          md={6}
        />
        <SelectInput
          name={`institutions.${indexNumber}.degree`}
          label="Degree"
          options={educationLevelMap}
          control={control}
          xs={6}
          md={6}
        />
        <TextInput
          type="number"
          name={`institutions.${indexNumber}.graduationYear`}
          label="Graduation Year"
          control={control}
          xs={6}
          md={6}
        />
        <Grid item xs={12}>
          <Button
            fullWidth
            color="error"
            startIcon={<Delete />}
            onClick={() => removeInstitution(indexNumber)}>
            Remove Institution
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

const Organization = ({
  indexNumber,
  organization,
  removeOrganization,
  control,
}: {
  indexNumber: number;
  organization: OrganizationType;
  removeOrganization: (index: number) => void;
  control: Control<FormEducation, unknown>;
}) => {
  return (
    <Card key={organization.id}>
      <TextInput
        name={`organizations.${indexNumber}.name`}
        label="Organization Name"
        control={control}
        md={12}
      />
      <TextInput
        name={`organizations.${indexNumber}.position`}
        label="Position"
        control={control}
        md={12}
      />
      <TextInput
        type="number"
        name={`organizations.${indexNumber}.numOfYears`}
        label="Years Active"
        control={control}
        md={12}
      />
      <Grid item xs={12}>
        <Button
          fullWidth
          color="error"
          startIcon={<Delete />}
          onClick={() => removeOrganization(indexNumber)}>
          Remove Organization
        </Button>
      </Grid>
    </Card>
  );
};
