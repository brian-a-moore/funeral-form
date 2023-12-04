import {
  EducationLevel,
  IncidentLocation,
  MilitaryBranch,
  State,
} from './enums';
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
  state: State.NONE,
  isDeceased: false,
};

export const DEFAULT_EMPLOYER: Omit<Employer, 'id'> = {
  name: '',
  city: '',
  state: State.NONE,
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
  state: State.NONE,
  major: '',
  degree: EducationLevel.NONE,
  graduationYear: 1999,
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
  state: State.NONE,
  isDeceased: false,
};

export const FORM_BIO: Partial<FormBio> = {
  image: null,
  firstName: '',
  middleName: '',
  lastName: '',
  nickname: '',
  placeOfIncident: IncidentLocation.NONE,
  other: '',
  dateOfBirth: new Date().toISOString().split('T')[0],
  cityOfBirth: '',
  stateOfBirth: State.NONE,
  dateOfDeath: new Date().toISOString().split('T')[0],
  cityOfDeath: '',
  stateOfDeath: State.NONE,
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
  militaryService: {
    branch: MilitaryBranch.NONE,
    position: '',
    numOfYears: 0,
    isRetired: false,
  },
};

export const FORM_EMPLOYMENT: Partial<FormEmployment> = {
  employers: [],
  hobbies: '',
  additionalInfo: '',
};

export const FORM_FAMILY: Partial<FormFamily> = {
  spouse: {
    firstName: '',
    lastName: '',
    numOfYears: 0,
  },
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
  state: State.NONE,
};

export const FORM_SERVICE: Partial<FormService> = {
  serviceLocationName: '',
  serviceLocationCity: '',
  serviceLocationState: State.NONE,
  serviceLocationMinisterName: '',
  serviceLocationDayOfService: '',
  serviceLocationTimeOfService: '',
  viewingLocationName: '',
  viewingLocationCity: '',
  viewingLocationState: State.NONE,
  viewingLocationStartTime: '',
  viewingLocationEndTime: '',
  repassLocationName: '',
  repassLocationCity: '',
  repassLocationState: State.NONE,
};

export const FORM_STEPS = [
  'Info',
  'Bio',
  'Education',
  'Family',
  'Employment',
  'Service',
];
