import Joi from 'joi';
import { IncidentLocation, MilitaryBranch } from '../enums';
import {
  DATE,
  FILE,
  INCIDENT_LOCATION,
  MILITARY_BRANCH,
  NUM_OF_YRS,
  PARAGRAPH,
  STATE,
  STRING,
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
  firstName: STRING,
  middleName: STRING.allow(''),
  lastName: STRING,
  nickname: STRING.allow(''),
  placeOfIncident: INCIDENT_LOCATION,
  other: Joi.when('placeOfIncident', {
    is: IncidentLocation.OTHER,
    then: STRING,
    otherwise: STRING.valid(''),
  }),
  dateOfBirth: DATE,
  cityOfBirth: STRING.allow(''),
  stateOfBirth: STATE,
  dateOfDeath: DATE,
  cityOfDeath: STRING.allow(''),
  stateOfDeath: STATE,
  fatherFirstName: STRING.allow(''),
  fatherLastName: STRING.allow(''),
  fatherIsDeceased: Joi.boolean(),
  motherFirstName: STRING.allow(''),
  motherLastName: STRING.allow(''),
  motherIsDeceased: Joi.boolean(),
}).options({ stripUnknown: true });

export const educationResolver = Joi.object({
  institutions: Joi.array().items(institutionItem).min(0).max(10).required(),
  organizations: Joi.array().items(organizationItem).min(0).max(10).required(),
  militaryService: Joi.object({
    branch: Joi.when('position', {
      is: STRING,
      then: MILITARY_BRANCH,
      otherwise: Joi.string().valid(MilitaryBranch.NONE).required(),
    }),
    position: STRING.allow(''),
    numOfYears: NUM_OF_YRS,
  })
    .required()
    .options({ stripUnknown: true }),
}).options({ stripUnknown: true });

export const employmentResolver = Joi.object({
  employers: Joi.array().items(employerItem).min(0).max(10).required(),
  hobbies: PARAGRAPH.allow(''),
  additionalInfo: PARAGRAPH.allow(''),
});

export const familyResolver = Joi.object({
  spouse: Joi.object({
    firstName: STRING.allow(''),
    lastName: STRING.allow(''),
    numOfYears: NUM_OF_YRS,
  })
    .required()
    .options({ stripUnknown: true }),
  children: Joi.array().items(childItem).min(0).max(10).required(),
  siblings: Joi.array().items(siblingItem).min(0).max(10).required(),
  friends: Joi.array().items(friendItem).min(0).max(10).required(),
});

export const infoResolver = Joi.object({
  firstName: STRING,
  lastName: STRING,
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  funeralHomeName: STRING,
  state: STATE,
}).options({ stripUnknown: true });

export const serviceResolver = Joi.object({
  serviceLocationName: STRING,
  serviceLocationCity: STRING,
  serviceLocationState: STATE,
  serviceLocationMinisterName: STRING,
  serviceLocationDayOfService: STATE,
  serviceLocationTimeOfService: STRING,
  viewingLocationName: STRING,
  viewingLocationCity: STRING,
  viewingLocationState: STATE,
  viewingLocationStartTime: STRING,
  viewingLocationEndTime: STRING,
  repassLocationName: STRING,
  repassLocationCity: STRING,
  repassLocationState: STATE,
});
