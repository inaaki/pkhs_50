import {
  Box,
  Button,
  ButtonGroup,
  chakra,
  Divider,
  Heading,
  Link,
  VStack,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/userContext';
import withBackground from '../hoc/withBackground';
import withPublicRoute from '../hoc/withPublicRoute';
import http from '../http';
import { loginSchema } from '../validations';
import InputBox from './form/InputBox';

function Login() {
  const { setUser } = useUserContext();
  const navigate = useNavigate();
  const location = useLocation();

  //handle submit
  const handleSubmit = async (formValue, formikBag) => {
    try {
      // call api
      const user = await http.login(formValue);
      // set global user
      setUser(user);
      // navigate user
      navigate(location.state?.from || '/registration', {
        replace: true,
      });
    } catch (error) {}
  };

  return (
    <Box
      bg="white"
      border="1px"
      borderColor="gray.100"
      borderRadius="md"
      boxShadow="md"
      m={4}
      p={7}
      py={10}
    >
      <VStack spacing={6}>
        <VStack spacing={2}>
          <Heading
            as={'h3'}
            fontSize={{ base: '2xl', md: '3xl' }}
            textAlign={'center'}
          >
            Login to your account
          </Heading>
          <chakra.span color="gray.400">
            Don't have an account?{' '}
            <Link as={RouterLink} to={'/signup'} color={'brand.600'}>
              Sign Up
            </Link>
          </chakra.span>
        </VStack>
        <Divider />
        <Formik
          initialValues={{
            phone: '',
            password: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={loginSchema}
        >
          {({ isSubmitting }) => (
            <Form>
              <VStack spacing={6}>
                <InputBox
                  placeholder={'Enter your phone number'}
                  name={'phone'}
                  label={'Phone number'}
                />
                <InputBox
                  placeholder={'Enter your password'}
                  name={'password'}
                  label={'Password'}
                />
                <ButtonGroup
                  size={'form'}
                  className="btn-group"
                  disabled={isSubmitting}
                >
                  <Button type="reset" variant={'outline'}>
                    Reset
                  </Button>
                  <Button
                    isLoading={isSubmitting}
                    loadingText={'Logging in'}
                    type="submit"
                  >
                    log in
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

export default withPublicRoute(withBackground(Login));
