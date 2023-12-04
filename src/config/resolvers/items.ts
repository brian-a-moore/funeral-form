import Joi from 'joi';
import {
  BOOL,
  EDUCATION_LEVEL,
  ID,
  NUM_OF_YRS,
  STATE,
  STATE_OPTIONAL,
  STRING,
  YEAR,
} from './constants';

export const childItem = Joi.object({
  id: ID,
  firstName: STRING,
  lastName: STRING,
  spouseName: STRING.allow(''),
  city: STRING.allow(''),
  state: STATE_OPTIONAL,
  isDeceased: BOOL,
}).options({ stripUnknown: true });

export const employerItem = Joi.object({
  id: ID,
  name: STRING,
  city: STRING.allow(''),
  state: STATE_OPTIONAL,
  numOfYears: NUM_OF_YRS,
  isRetired: BOOL,
}).options({ stripUnknown: true });

export const friendItem = Joi.object({
  id: ID,
  firstName: STRING,
  lastName: STRING,
}).options({ stripUnknown: true });

export const institutionItem = Joi.object({
  id: ID,
  name: STRING,
  city: STRING.allow(''),
  state: STATE,
  major: STRING.allow(''),
  degree: EDUCATION_LEVEL,
  graduationYear: YEAR,
}).options({ stripUnknown: true });

export const organizationItem = Joi.object({
  id: ID,
  name: STRING,
  position: STRING.allow(''),
  numOfYears: NUM_OF_YRS,
}).options({ stripUnknown: true });

export const siblingItem = Joi.object({
  id: ID,
  firstName: STRING,
  lastName: STRING,
  spouseName: STRING.allow(''),
  city: STRING.allow(''),
  state: STATE_OPTIONAL,
  isDeceased: BOOL,
}).options({ stripUnknown: true });
