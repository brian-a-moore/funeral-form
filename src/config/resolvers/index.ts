import Joi from 'joi';
import { IncidentLocation, MilitaryBranch } from '../enums';
import {
  DATE,
  FILE,
  INCIDENT_LOCATION,
  MILITARY_BRANCH,
  NUM_OF_YRS,
  PARAGRAPH_OPTIONAL,
  STATE,
  STATE_OPTIONAL,
  STRING,
  STRING_OPTIONAL,
  TIME,
} from './constants';
import {
  childItem,
  employerItem,
  friendItem,
  institutionItem,
  organizationItem,
  siblingItem,
} from './items';

export const bioResolver = Joi.object({
  image: Joi.alternatives().try(FILE, Joi.allow(null)).required(),
  firstName: STRING('First Name'),
  middleName: STRING_OPTIONAL('Middle Name'),
  lastName: STRING('Last Name'),
  nickname: STRING_OPTIONAL('Nickname'),
  placeOfIncident: INCIDENT_LOCATION,
  other: Joi.when('placeOfIncident', {
    is: IncidentLocation.OTHER,
    then: STRING('Other'),
    otherwise: STRING_OPTIONAL('Other'),
  }),
  dateOfBirth: DATE,
  cityOfBirth: STRING_OPTIONAL('City of Birth'),
  stateOfBirth: STATE_OPTIONAL,
  dateOfDeath: DATE,
  cityOfDeath: STRING_OPTIONAL('City of Death'),
  stateOfDeath: STATE_OPTIONAL,
  fatherFirstName: STRING_OPTIONAL("Father's First Name"),
  fatherLastName: STRING_OPTIONAL("Fathers's Last Name"),
  fatherIsDeceased: Joi.boolean(),
  motherFirstName: STRING_OPTIONAL("Mother's First Name"),
  motherLastName: STRING_OPTIONAL("Mother's Last Name"),
  motherIsDeceased: Joi.boolean(),
}).options({ stripUnknown: true });

export const educationResolver = Joi.object({
  institutions: Joi.array().items(institutionItem).min(0).max(10).required(),
  organizations: Joi.array().items(organizationItem).min(0).max(10).required(),
  militaryService: Joi.object({
    branch: Joi.when('position', {
      is: STRING('Branch'),
      then: MILITARY_BRANCH,
      otherwise: Joi.string().valid(MilitaryBranch.NONE).required(),
    }),
    position: STRING_OPTIONAL('Position'),
    numOfYears: NUM_OF_YRS('Years Served'),
  })
    .required()
    .options({ stripUnknown: true }),
}).options({ stripUnknown: true });

export const employmentResolver = Joi.object({
  employers: Joi.array().items(employerItem).min(0).max(10).required(),
  hobbies: PARAGRAPH_OPTIONAL('Hobbies'),
  additionalInfo: PARAGRAPH_OPTIONAL('Additional Info'),
});

export const familyResolver = Joi.object({
  spouse: Joi.object({
    firstName: STRING_OPTIONAL('First Name'),
    lastName: STRING_OPTIONAL('Last Name'),
    numOfYears: NUM_OF_YRS('Years Together'),
  })
    .required()
    .options({ stripUnknown: true }),
  children: Joi.array().items(childItem).min(0).max(10).required(),
  siblings: Joi.array().items(siblingItem).min(0).max(10).required(),
  friends: Joi.array().items(friendItem).min(0).max(10).required(),
});

export const infoResolver = Joi.object({
  firstName: STRING('First Name'),
  lastName: STRING('Last Name'),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  funeralHomeName: STRING('Funeral Home Name'),
  state: STATE,
}).options({ stripUnknown: true });

export const serviceResolver = Joi.object({
  serviceLocationName: STRING('Location'),
  serviceLocationCity: STRING('City'),
  serviceLocationState: STATE,
  serviceLocationMinisterName: STRING('Minister Name'),
  serviceLocationDateOfService: DATE('Date of Service'),
  serviceLocationTimeOfService: TIME,
  viewingLocationName: STRING('Location'),
  viewingLocationCity: STRING('City'),
  viewingLocationState: STATE,
  viewingLocationStartTime: TIME,
  viewingLocationEndTime: TIME,
  repassLocationName: STRING('Location'),
  repassLocationCity: STRING('City'),
  repassLocationState: STATE,
});

export const masterForm = Joi.object({
  bio: bioResolver,
  education: educationResolver,
  employment: employmentResolver,
  family: familyResolver,
  info: infoResolver,
  service: serviceResolver,
}).options({ stripUnknown: true });
