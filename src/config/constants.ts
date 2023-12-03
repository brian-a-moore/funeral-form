import { EducationLevel, State } from './enums';
import {
  Child,
  Employer,
  FormBio,
  FormEducation,
  FormEmployment,
  FormFamily,
  FormInfo,
  FormService,
  Friend,
  Institution,
  Organization,
  Sibling,
} from './types';

export const DEFAULT_CHILD: Omit<Child, 'id'> = {
  firstName: '',
  lastName: '',
  spouseName: '',
  city: '',
  state: State.NORTH_CAROLINA,
  isDeceased: false,
};

export const DEFAULT_EMPLOYER: Omit<Employer, 'id'> = {
  name: '',
  city: '',
  state: State.NORTH_CAROLINA,
  numOfYears: 0,
  isRetired: false,
};

export const DEFAULT_FRIEND: Omit<Friend, 'id'> = {
  firstName: '',
  lastName: '',
};

export const DEFAULT_INSTITUTION: Omit<Institution, 'id'> = {
  name: '',
  city: '',
  state: State.NORTH_CAROLINA,
  major: '',
  degree: EducationLevel.HIGH_SCHOOL,
  graduationYear: 0,
};

export const DEFAULT_ORGANIZATION: Omit<Organization, 'id'> = {
  name: '',
  position: '',
  numOfYears: 0,
};

export const DEFAULT_SIBLING: Omit<Sibling, 'id'> = {
  firstName: '',
  lastName: '',
  spouseName: '',
  city: '',
  state: State.NORTH_CAROLINA,
  isDeceased: false,
};

export const FORM_BIO: Partial<FormBio> = {
  firstName: '',
  middleName: '',
  lastName: '',
  nickname: '',
  other: '',
  dateOfBirth: new Date(),
  cityOfBirth: '',
  stateOfBirth: State.NORTH_CAROLINA,
  dateOfDeath: new Date(),
  cityOfDeath: '',
  stateOfDeath: State.NORTH_CAROLINA,
  fatherFirstName: '',
  fatherLastName: '',
  fatherIsDeceased: false,
  motherFirstName: '',
  motherLastName: '',
  motherIsDeceased: false,
};

export const FORM_EDUCATION: Partial<FormEducation> = {
  institutions: [],
  organizations: [],
  militaryService: undefined,
};

export const FORM_EMPLOYMENT: Partial<FormEmployment> = {
  employers: [],
  hobbies: '',
  additionalInfo: '',
};

export const FORM_FAMILY: Partial<FormFamily> = {
  spouse: undefined,
  children: [],
  siblings: [],
  friends: [],
};

export const FORM_INFO: Partial<FormInfo> = {
  firstName: '',
  lastName: '',
  email: '',
  funeralHomeName: '',
  city: '',
};

export const FORM_SERVICE: Partial<FormService> = {
  serviceLocationName: '',
  serviceLocationCity: '',
  serviceLocationState: State.NORTH_CAROLINA,
  serviceLocationMinisterName: '',
  serviceLocationDayOfService: '',
  serviceLocationTimeOfService: '',
  viewingLocationName: '',
  viewingLocationCity: '',
  viewingLocationState: State.NORTH_CAROLINA,
  viewingLocationStartTime: '',
  viewingLocationEndTime: '',
  repassLocationName: '',
  repassLocationCity: '',
  repassLocationState: State.NORTH_CAROLINA,
};

export const FORM_STEPS = [
  'Info',
  'Bio',
  'Education',
  'Family',
  'Employment',
  'Service',
];
