import { number, object, ref, string } from 'yup';
import errMsg from '../utils/errorMessage';

const BD_MOBILE_VALIDATION_REGEX = /^(01[3-9]\d{8})$/;

const signUpSchema = object({
  name: string().required(errMsg.required).max(30, errMsg.max_char_limit),
  password: string().required(errMsg.required).min(8, errMsg.min_pass_length),
  password_confirmation: string()
    .required(errMsg.required)
    .oneOf([ref('password')], errMsg.confirm_pass),
  phone: string()
    .matches(BD_MOBILE_VALIDATION_REGEX, errMsg.mobile_11)
    .required(errMsg.required),
  ssc: number()
    .required(errMsg.required)
    .min(1970, errMsg.batch)
    .max(2027, errMsg.batch),
});

export default signUpSchema;
