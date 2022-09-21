import { object, string } from 'yup';
import errMsg from '../utils/errorMessage';

const BD_MOBILE_VALIDATION_REGEX = /^(01[3-9]\d{8})$/;

const loginSchema = object({
  phone: string()
    .matches(BD_MOBILE_VALIDATION_REGEX, errMsg.mobile_11)
    .required(errMsg.required),
  password: string().required(errMsg.required),
});

export default loginSchema;
