import Joi from 'joi';
import {
  EducationLevel,
  IncidentLocation,
  MilitaryBranch,
  State,
} from '../enums';

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

export const BOOL = Joi.bool().required();

export const DATE = (label: string) =>
  Joi.string().regex(dateRegex).message(`${label} is required`).required();

export const EDUCATION_LEVEL = (label: string) =>
  Joi.string()
    .valid(
      ...Object.values(EducationLevel).filter(v => v !== EducationLevel.NONE),
    )
    .messages({
      'string.valid': `${label} is required`,
      'any.required': `${label} is required`,
    })
    .required();

export const FILE = Joi.any(); // Really need to verify this works;

export const ID = Joi.string().uuid().required();

export const INCIDENT_LOCATION = Joi.string()
  .valid(
    ...Object.values(IncidentLocation).filter(v => v !== IncidentLocation.NONE),
  )
  .messages({
    'string.valid': `Incident Location is required`,
    'any.required': `Incident Location is required`,
  })
  .required();

export const MILITARY_BRANCH = Joi.string()
  .valid(
    ...Object.values(MilitaryBranch).filter(v => v !== MilitaryBranch.NONE),
  )
  .messages({
    'string.valid': `Branch is required`,
    'any.required': `Branch is required`,
  })
  .required();

export const NUM_OF_YRS = (label: string) =>
  Joi.number()
    .min(0)
    .max(99)
    .messages({
      'string.base': `${label} must be a number`,
      'string.min': `${label} must be no less than zero`,
      'string.max': `${label} must be no more than 99`,
      'any.required': `${label} is required`,
    })
    .required();

export const PARAGRAPH_OPTIONAL = (label: string) =>
  Joi.string()
    .min(1)
    .max(2048)
    .allow('')
    .messages({
      'string.base': `${label} must be a string`,
      'string.min': `${label} must be at least one character`,
      'string.max': `${label} must be no more than 64 characters`,
      'any.required': `${label} is required`,
    })
    .required();

export const STATE = Joi.string()
  .valid(...Object.values(State).filter(v => v !== State.NONE))
  .messages({
    'string.valid': `State is required`,
    'any.required': `State is required`,
  })
  .required();

export const STATE_OPTIONAL = Joi.string()
  .valid(...Object.values(State))
  .messages({
    'string.valid': `State is required`,
  })
  .required();

export const STRING = (label: string) =>
  Joi.string()
    .min(1)
    .max(64)
    .messages({
      'string.base': `${label} must be a string`,
      'string.min': `${label} must be at least one character`,
      'string.max': `${label} must be no more than 64 characters`,
      'any.required': `${label} is required`,
    })
    .required();

export const STRING_OPTIONAL = (label: string) =>
  Joi.string()
    .min(1)
    .max(64)
    .allow('')
    .messages({
      'string.base': `${label} must be a string`,
      'string.min': `${label} must be at least one character`,
      'string.max': `${label} must be no more than 64 characters`,
      'any.required': `${label} is required`,
    })
    .required();

export const TIME = Joi.string()
  .min(5)
  .max(5)
  .regex(/^\d{2}:\d{2}$/)
  .required();

export const YEAR = (label: string) =>
  Joi.number()
    .min(1900)
    .max(9999)
    .messages({
      'string.base': `${label} must be a valid year between 1900 - 9999`,
      'string.min': `${label} must be no less than 1900`,
      'string.max': `${label} must be no more than 9999`,
      'any.required': `${label} is required`,
    })
    .required();
