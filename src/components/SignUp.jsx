import { PhoneIcon, UnlockIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  chakra,
  Divider,
  Heading,
  Icon,
  Link,
  VStack,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useCallback, useState } from 'react';
import { BsFillUnlockFill } from 'react-icons/bs';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/userContext';
import withBackground from '../hoc/withBackground';
import withPublicRoute from '../hoc/withPublicRoute';
import http from '../http';
import apiToFieldError from '../utils/apiToFieldError';
import ls from '../utils/localStorage';
import createToast from '../utils/toast';
import { signUpSchema } from '../validations';
import InputBox from './form/InputBox';
import PasswordToggleIcon from './icons/PasswordToggleIcon';

const initialData = {
  name: '',
  password: '',
  password_confirmation: '',
  phone: '',
  ssc: '',
};

function SignUp() {
  //global user setter
  const { setUser } = useUserContext();
  //routing hook
  const navigator = useNavigate();
  //local component state
  const [showPass, setShowPass] = useState(false);
  const handlePassView = useCallback(() => setShowPass(prev => !prev), []);
  //toast
  const toast = createToast();

  const handleMobileNumber = e => {
    //trimming all space character with regex
    const value = e.currentTarget.value;
    e.currentTarget.value = value.replace(/\s/g, '');
  };

  const handleSubmit = async (data, formikBag) => {
    try {
      const user = await http.signUp(data);
      // keep token in storage
      ls.set(user.token);
      // set user globally
      setUser(user);

      //navigate to registration
      const { name, ssc, phone } = data;
      navigator('/upload-picture', {
        replace: true,
        state: {
          phone,
          ssc,
          name,
        },
      });
    } catch (err) {
      if (err?.response?.status == '422') {
        const errors = apiToFieldError(err.response.data.errors);
        for (const key in errors) {
          formikBag.setFieldError(key, errors[key]);
        }
      }
    }
  };

  return (
    <Box
      bg="white"
      border="1px"
      borderColor="gray.100"
      borderRadius="md"
      boxShadow="md"
      m={4}
      p={6}
      py={8}
    >
      <VStack spacing={{ base: 5, md: 6 }}>
        <VStack>
          <Heading
            as={'h3'}
            fontSize={{ base: '2xl', md: '3xl' }}
            textAlign={'center'}
          >
            Create an account
          </Heading>
          <chakra.span color="gray.400">
            Already have an account?{' '}
            <Link as={RouterLink} to={'/login'} color={'brand.600'}>
              Log In
            </Link>
          </chakra.span>
        </VStack>
        <Divider />
        <Formik
          initialValues={initialData}
          validationSchema={signUpSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <VStack spacing={5} maxWidth={'sm'}>
                {/* full name */}
                <InputBox
                  label="Name"
                  name="name"
                  placeholder="Enter you name"
                />
                {/* ssc batch */}
                <InputBox
                  label="SSC batch"
                  name="ssc"
                  placeholder="Enter your SSC batch"
                  type="number"
                />
                {/* phone */}
                <InputBox
                  label="Phone Number"
                  name="phone"
                  placeholder="Enter your Phone Number"
                  type="text"
                  leftElement={<PhoneIcon color={'gray.400'} />}
                  onChange={handleMobileNumber}
                />
                {/* password */}
                <InputBox
                  label="Password"
                  name="password"
                  placeholder="Enter your Password"
                  type={showPass ? 'text' : 'password'}
                  leftElement={<UnlockIcon color={'gray.400'} />}
                  rightElement={
                    <PasswordToggleIcon
                      show={showPass}
                      onClick={handlePassView}
                    />
                  }
                />
                {/* confirm password */}
                <InputBox
                  label="confirm password"
                  name="password_confirmation"
                  placeholder="Confirm your Password"
                  type={showPass ? 'text' : 'password'}
                  leftElement={
                    <Icon as={BsFillUnlockFill} color={'gray.400'} />
                  }
                  rightElement={
                    <PasswordToggleIcon
                      show={showPass}
                      onClick={handlePassView}
                    />
                  }
                />
                {/* submit buttons */}
                <ButtonGroup
                  isDisabled={false}
                  size={'form'}
                  className="btn-group"
                >
                  <Button
                    type="reset"
                    variant={'outline'}
                    disabled={isSubmitting}
                  >
                    Reset
                  </Button>
                  <Button
                    isLoading={isSubmitting}
                    loadingText="signing up"
                    type="submit"
                  >
                    Sign Up
                  </Button>
                </ButtonGroup>
              </VStack>
            </Form>
          )}
        </Formik>
      </VStack>
    </Box>
  );
}

export default withPublicRoute(withBackground(SignUp));
