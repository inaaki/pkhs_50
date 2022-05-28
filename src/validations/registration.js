import { number, object, string } from 'yup';

const errMsg = {
  required: 'This field cannot be empty',
  batch: 'Please, provide a valid batch number',
  max: 'Maximum character limit is ${max}',
  number: 'Please, provide a valid number',
  mobile11: 'Please, provide a Bangladeshi 11 digit mobile number',
};

/* --------- reusable schema -------- */
const limitedString = string().trim().max(30, errMsg.max);
const requiredString = limitedString.required(errMsg.required);
const optionalString = limitedString.optional();
const safeNumber = number().transform(value => (isNaN(value) ? 0 : value));
const mobileNumber = string()
  .min(11, errMsg.mobile11)
  .max(11, errMsg.mobile11)
  .nullable()
  .transform(value => (!!value ? value : null));

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
  batch: safeNumber.min(1972, errMsg.batch).max(2022, errMsg.batch),
  guest: safeNumber
    .min(0, errMsg.number)
    .max(10, 'Maximum guest count is ${max}'),
  institute: optionalString,
  others: optionalString.max(150, 'Maximum characters length is 150'),
  qualification: optionalString,
  size: requiredString,
});

const payment = object({
  paymentMethod: requiredString,
  paymentId: requiredString,
});

const validationSchema = {
  personal,
  contact,
  ceremonial,
  payment,
};

export default validationSchema;
