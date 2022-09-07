import { object } from 'yup';
import errMsg from '../utils/errorMessage';
import partialSchema from './partialSchema';

const { mobileNumber, requiredString } = partialSchema;

const loginSchema = object({
  phone: mobileNumber.required(errMsg.required),
  password: requiredString,
});

export default loginSchema;
