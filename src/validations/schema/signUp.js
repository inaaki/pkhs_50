import { object, string, ref, number } from 'yup';
import errMsg from '../utils/errorMessage';

const signUpSchema = object({
  name: string().required(errMsg.required).max(30, errMsg.max_char_limit),
  password: string().required(errMsg.required).min(8, errMsg.min_pass_length),
  password_confirmation: string()
    .required(errMsg.required)
    .oneOf([ref('password'), null], errMsg.confirm_pass),
  phone: number().required(errMsg.required),
  ssc: number()
    .required(errMsg.required)
    .min(1970, errMsg.batch)
    .max(2027, errMsg.batch),
});

export default signUpSchema;
