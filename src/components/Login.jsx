import { PhoneIcon, UnlockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  chakra,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { reach } from 'yup';
import withBackground from '../hoc/withBackground';
import withPublicRoute from '../hoc/withPublicRoute';
import { submitData } from '../utils/fakeApi';
import { login, validate } from '../validations';
import Thunder from './icons/Thunder';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [state, setState] = useState({
    phone: '',
    password: '',
  });
  const [error, setError] = useState({});
  const [isShow, setIsShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast({
    position: 'bottom',
    isClosable: true,
    duration: 5000,
  });

  //handle change function
  const handleChange = e => {
    let { name, value } = e.target;
    if (value.includes('  ')) {
      value = value.replace(/\s\s+/g, ' ');
    }
    const newState = { ...state };
    newState[name] = value;
    setState(newState);
  };

  //handle focus out
  const handleBlur = e => {
    const { name } = e.target;
    reach(login, name)
      .validate(state[name])
      .then(r => {
        setError({ ...error, [name]: '' });
      })
      .catch(e => {
        setError({ ...error, [name]: e.message });
      });
  };

  //handle submit
  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await validate(login, state);
      setError({});
      //
      setIsLoading(true);
      try {
        //will be replaced by real rest-api
        await submitData(true);
        toast({
          status: 'success',
          title: 'Login successful',
          description: "We've successfully logged you in",
          variant: 'solid',
        });
        //navigating based on user delivered path
        navigate(location.state?.from || '/', {
          replace: true,
        });
      } catch (e) {
        toast({
          status: 'error',
          title: 'Error occurred',
          description: 'Sorry, we were unable to log you in',
          variant: 'solid',
        });
      } finally {
        setIsLoading(false);
      }
    } catch (e) {
      setError(e);
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
      p={7}
      py={10}
    >
      <VStack spacing={{ base: 5, md: 8 }}>
        <VStack spacing={2}>
          <Thunder color="brand.500" boxSize={10} />
          <Heading
            as={'h3'}
            fontSize={{ base: '2xl', md: '3xl' }}
            textAlign={'center'}
          >
            Login to your account
          </Heading>
          <chakra.span color="gray.400">
            Don't have an account?
            <Link as={RouterLink} to={'/signup'} color={'brand.600'}>
              Sign Up
            </Link>
          </chakra.span>
        </VStack>
        <Divider />
        <form onSubmit={handleSubmit}>
          <VStack spacing={6}>
            <FormControl isInvalid={error.phone}>
              <FormLabel htmlFor="login_phone">Phone Number</FormLabel>
              <InputGroup>
                <InputLeftElement
                  boxSize={12}
                  children={<PhoneIcon color={'gray.400'} />}
                  pointerEvents="none"
                />
                <Input
                  _placeholder={{ fontSize: { base: 'sm', md: 'md' } }}
                  disabled={isLoading}
                  id="login_phone"
                  placeholder="Enter your Phone Number"
                  size={'lg'}
                  variant="filled"
                  //
                  type="number"
                  name="phone"
                  value={state.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </InputGroup>
              <FormErrorMessage>{error.phone}</FormErrorMessage>
            </FormControl>

            {/* password field */}
            <FormControl isInvalid={error.password}>
              <FormLabel htmlFor="login_pass">Password</FormLabel>
              <InputGroup>
                <InputLeftElement
                  boxSize={12}
                  children={<UnlockIcon color={'gray.400'} />}
                  pointerEvents="none"
                />
                <Input
                  _placeholder={{ fontSize: { base: 'sm', md: 'md' } }}
                  disabled={isLoading}
                  id="login_pass"
                  placeholder="Enter your Password"
                  size={'lg'}
                  variant="filled"
                  //
                  type={isShow ? 'text' : 'password'}
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <InputRightElement
                  boxSize={12}
                  children={
                    isShow ? (
                      <ViewOffIcon color={'gray.400'} boxSize={5} />
                    ) : (
                      <ViewIcon color={'gray.400'} boxSize={5} />
                    )
                  }
                  onClick={() => {
                    setIsShow(state => !state);
                  }}
                />
              </InputGroup>
              <FormErrorMessage>{error.password}</FormErrorMessage>
            </FormControl>
            <Center pt={3}>
              <Button
                isLoading={isLoading}
                loadingText="logging in"
                size={'form'}
                type="submit"
              >
                Log in
              </Button>
            </Center>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
}

export default withPublicRoute(withBackground(Login));
