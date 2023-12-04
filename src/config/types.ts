import {
  EducationLevel,
  IncidentLocation,
  MilitaryBranch,
  State,
} from './enums';

export type Child = {
  id: string;
  firstName: string;
  lastName: string;
  spouseName: string;
  city: string;
  state: State;
  isDeceased: boolean;
};

export type Employer = {
  id: string;
  name: string;
  city: string;
  state: State;
  numOfYears: number;
  isRetired: boolean;
};

export type Friend = {
  id: string;
  firstName: string;
  lastName: string;
};

export type FormBio = {
  image: FormData | null;
  firstName: string;
  middleName: string;
  lastName: string;
  nickname: string;
  placeOfIncident: IncidentLocation;
  other: string;
  dateOfBirth: string;
  cityOfBirth: string;
  stateOfBirth: State;
  dateOfDeath: string;
  cityOfDeath: string;
  stateOfDeath: State;
  fatherFirstName: string;
  fatherLastName: string;
  fatherIsDeceased: boolean;
  motherFirstName: string;
  motherLastName: string;
  motherIsDeceased: boolean;
};

export type FormEducation = {
  institutions: Institution[];
  organizations: Organization[];
  militaryService: {
    branch: MilitaryBranch;
    position: string;
    numOfYears: number;
    isRetired: boolean;
  };
};

export type FormEmployment = {
  employers: Employer[];
  hobbies: string;
  additionalInfo: string;
};

export type FormFamily = {
  spouse: {
    firstName: string;
    lastName: string;
    numOfYears: number;
  };
  children: Child[];
  siblings: Sibling[];
  friends: Friend[];
};

export type FormInfo = {
  firstName: string;
  lastName: string;
  email: string;
  funeralHomeName: string;
  city: string;
  state: State;
};

export type FormService = {
  serviceLocationName: string;
  serviceLocationCity: string;
  serviceLocationState: State;
  serviceLocationMinisterName: string;
  serviceLocationDateOfService: string;
  serviceLocationTimeOfService: string;
  viewingLocationName: string;
  viewingLocationCity: string;
  viewingLocationState: State;
  viewingLocationStartTime: string;
  viewingLocationEndTime: string;
  repassLocationName: string;
  repassLocationCity: string;
  repassLocationState: State;
};

export type Institution = {
  id: string;
  name: string;
  city: string;
  state: State;
  major: string;
  degree: EducationLevel;
  graduationYear: number;
};

export type MasterForm = {
  bio: FormBio;
  education: FormEducation;
  employment: FormEmployment;
  family: FormFamily;
  info: FormInfo;
  service: FormService;
};

export type Forms =
  | FormBio
  | FormEducation
  | FormEmployment
  | FormFamily
  | FormInfo
  | FormService;

export type Organization = {
  id: string;
  name: string;
  position: string;
  numOfYears: number;
};

export type Sibling = {
  id: string;
  firstName: string;
  lastName: string;
  spouseName: string;
  city: string;
  state: State;
  isDeceased: boolean;
};
