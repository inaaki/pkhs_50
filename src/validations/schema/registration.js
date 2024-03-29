/* eslint-disable no-template-curly-in-string */
import { object } from 'yup';
import errorMessage from '../utils/errorMessage';
import partialSchema from './partialSchema';

const { optionalString, requiredString, mobileNumber, safeNumber } =
  partialSchema;

/* --------- schema objects --------- */
const personal = object({
  banglaName: optionalString,
  birthDate: optionalString,
  blood: optionalString,
  englishName: requiredString,
  father: requiredString,
  gender: requiredString,
  mother: optionalString,
  nid: optionalString,
  religion: optionalString,
  spouse: optionalString,
});

const contact = object({
  district: requiredString,
  email: optionalString.email('Please provide a valid email address'),
  emergencyMobile: mobileNumber,
  postOffice: requiredString,
  upazila: requiredString,
  village: requiredString,
});

const ceremonial = object({
  batch: safeNumber.min(1972, errorMessage.batch).max(2022, errorMessage.batch),
  guest: safeNumber
    .min(0, errorMessage.number)
    .max(10, 'Maximum guest count is ${max}'),
  institute: optionalString,
  others: optionalString.max(150, 'Maximum characters length is 150'),
  qualification: optionalString,
  size: requiredString,
});

const payment = object({
  paymentId: requiredString,
  paymentMethod: requiredString,
});

const validationSchema = {
  ceremonial,
  contact,
  payment,
  personal,
};

export default validationSchema;
