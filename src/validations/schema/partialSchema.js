import { number, string } from 'yup';
import errorMessage from '../utils/errorMessage';

// reuseable partial schemas
const limitedString = string().trim().max(30, errorMessage.max);
const requiredString = limitedString.required(errorMessage.required);
const optionalString = limitedString.optional();
const safeNumber = number().transform(value => (isNaN(value) ? 0 : value));
const mobileNumber = string()
  .min(11, errorMessage.mobile11)
  .max(11, errorMessage.mobile11)
  .nullable()
  .transform(value => (!!value ? value : null));

const partialSchema = {
  limitedString,
  requiredString,
  optionalString,
  safeNumber,
  mobileNumber,
};

export default partialSchema;
