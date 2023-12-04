import Joi from 'joi';
import {
  EducationLevel,
  IncidentLocation,
  MilitaryBranch,
  State,
} from '../enums';

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

export const BOOL = Joi.bool().required();
export const DATE = Joi.string().regex(dateRegex).required();
export const EDUCATION_LEVEL = Joi.string()
  .valid(
    ...Object.values(EducationLevel).filter(v => v !== EducationLevel.NONE),
  )
  .required();
export const FILE = Joi.any(); // Really need to verify this works;
export const ID = Joi.string().uuid().required();
export const INCIDENT_LOCATION = Joi.string()
  .valid(
    ...Object.values(IncidentLocation).filter(v => v !== IncidentLocation.NONE),
  )
  .required();
export const MILITARY_BRANCH = Joi.string()
  .valid(
    ...Object.values(MilitaryBranch).filter(v => v !== MilitaryBranch.NONE),
  )
  .required();
export const NUM_OF_YRS = Joi.number().min(0).max(99).required();
export const PARAGRAPH = Joi.string().min(1).max(2048).required();
export const STATE = Joi.string().valid(
  ...Object.values(State).filter(v => v !== State.NONE),
);
export const STATE_OPTIONAL = Joi.string().valid(...Object.values(State));
export const STRING = Joi.string().min(1).max(64).required();
export const YEAR = Joi.number().min(1900).max(9999).required();
