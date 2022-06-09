import { number, string } from 'yup';
import errMsg from './errorMessage';

// reuseable partial schemas
const limitedString = string().trim().max(30, errMsg.max);
const requiredString = limitedString.required(errMsg.required);
const optionalString = limitedString.optional();
const safeNumber = number().transform(value => (isNaN(value) ? 0 : value));
const mobileNumber = string()
  .min(11, errMsg.mobile11)
  .max(11, errMsg.mobile11)
  .nullable()
  .transform(value => (!!value ? value : null));

const partialSchemas = {
  limitedString,
  requiredString,
  optionalString,
  safeNumber,
  mobileNumber,
};

export default partialSchemas;
