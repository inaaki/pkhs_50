import { object } from 'yup';
import errorMessage from '../utils/errorMessage';
import partialSchema from './partialSchema';

const { mobileNumber, requiredString } = partialSchema;

const signUpSchema = object({
  phone: mobileNumber.required(errorMessage.required),
  password: requiredString,
});

export default signUpSchema;
