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
  MasterForm,
  Organization,
  Sibling,
} from './types';

const DEFAULT_DATE = new Date().toISOString().split('T')[0];

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

export const FORM_BIO: FormBio = {
  image: null,
  firstName: '',
  middleName: '',
  lastName: '',
  nickname: '',
  placeOfIncident: IncidentLocation.NONE,
  other: '',
  dateOfBirth: DEFAULT_DATE,
  cityOfBirth: '',
  stateOfBirth: State.NONE,
  dateOfDeath: DEFAULT_DATE,
  cityOfDeath: '',
  stateOfDeath: State.NONE,
  fatherFirstName: '',
  fatherLastName: '',
  fatherIsDeceased: false,
  motherFirstName: '',
  motherLastName: '',
  motherIsDeceased: false,
};

export const FORM_EDUCATION: FormEducation = {
  institutions: [],
  organizations: [],
  militaryService: {
    branch: MilitaryBranch.NONE,
    position: '',
    numOfYears: 0,
    isRetired: false,
  },
};

export const FORM_EMPLOYMENT: FormEmployment = {
  employers: [],
  hobbies: '',
  additionalInfo: '',
};

export const FORM_FAMILY: FormFamily = {
  spouse: {
    firstName: '',
    lastName: '',
    numOfYears: 0,
  },
  children: [],
  siblings: [],
  friends: [],
};

export const FORM_INFO: FormInfo = {
  firstName: '',
  lastName: '',
  email: '',
  funeralHomeName: '',
  city: '',
  state: State.NONE,
};

export const FORM_SERVICE: FormService = {
  serviceLocationName: '',
  serviceLocationCity: '',
  serviceLocationState: State.NONE,
  serviceLocationMinisterName: '',
  serviceLocationDateOfService: DEFAULT_DATE,
  serviceLocationTimeOfService: '08:00',
  viewingLocationName: '',
  viewingLocationCity: '',
  viewingLocationState: State.NONE,
  viewingLocationStartTime: '08:00',
  viewingLocationEndTime: '08:00',
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

export const MASTER_FORM: MasterForm = {
  bio: FORM_BIO,
  education: FORM_EDUCATION,
  employment: FORM_EMPLOYMENT,
  family: FORM_FAMILY,
  info: FORM_INFO,
  service: FORM_SERVICE,
};
