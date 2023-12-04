import Joi from 'joi';
import { IncidentLocation, State } from './enums';

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

const DATE = Joi.string().regex(dateRegex);
const STRING = Joi.string().min(1).max(64);
const FILE = Joi.any(); // Really need to verify this works;

export const bioResolver = Joi.object({
  image: Joi.alternatives().try(FILE, Joi.allow(null)).required(),
  firstName: STRING.required(),
  middleName: STRING.allow(''),
  lastName: STRING.required(),
  nickname: STRING.allow(''),
  placeOfIncident: Joi.string()
    .valid(
      ...Object.values(IncidentLocation).filter(
        v => v !== IncidentLocation.NONE,
      ),
    )
    .required(),
  other: Joi.when('placeOfIncident', {
    is: IncidentLocation.OTHER,
    then: STRING.required(),
    otherwise: STRING.valid(''),
  }),
  dateOfBirth: DATE.required(),
  cityOfBirth: STRING.allow(''),
  stateOfBirth: Joi.string().valid(
    ...Object.values(State).filter(v => v !== State.NONE),
  ),
  dateOfDeath: DATE.required(),
  cityOfDeath: STRING.allow(''),
  stateOfDeath: Joi.string().valid(
    ...Object.values(State).filter(v => v !== State.NONE),
  ),
  fatherFirstName: STRING.allow(''),
  fatherLastName: STRING.allow(''),
  fatherIsDeceased: Joi.boolean(),
  motherFirstName: STRING.allow(''),
  motherLastName: STRING.allow(''),
  motherIsDeceased: Joi.boolean(),
}).options({ stripUnknown: true });

export const educationResolver = Joi.object({});

export const employmentResolver = Joi.object({});

export const familyResolver = Joi.object({});

export const infoResolver = Joi.object({
  firstName: STRING.required(),
  lastName: STRING.required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  funeralHomeName: STRING.required(),
  state: Joi.string()
    .valid(...Object.values(State).filter(v => v !== State.NONE))
    .required(),
}).options({ stripUnknown: true });

export const serviceResolver = Joi.object({});
