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
import React, { useState } from 'react';
import { reach } from 'yup';
import { submitData } from '../utils/fakeApi';
import { signUp, validation } from '../validations';
import Thunder from './icons/Thunder';

function SignUp() {
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
    console.log('state', newState);
  };

  //handle focus out
  const handleBlur = e => {
    const { name } = e.target;
    reach(signUp, name)
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
      await validation(signUp, state);
      setError({});
      //
      setIsLoading(true);
      try {
        //will be replaced by real rest-api
        const result = await submitData(1);
        console.log(result);
        toast({
          status: 'success',
          title: 'Login successful',
          description: "We've successfully logged you in",
          variant: 'solid',
        });
      } catch (e) {
        console.log(e);
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
      console.log(e);
    }
  };

  return (
    <Center w="full" minH="100vh" p={10}>
      <Box
        borderRadius="md"
        p={7}
        py={10}
        boxShadow="md"
        border="1px"
        borderColor="gray.100"
      >
        <VStack spacing={10}>
          <VStack spacing={2}>
            <Thunder color="brand.500" boxSize={10} />
            <Heading as={'h3'} textAlign={'center'} fontSize={'3xl'}>
              Create an account
            </Heading>
            <chakra.span color="gray.400">
              Already have an account? <Link color={'brand.600'}>Log In</Link>
            </chakra.span>
          </VStack>
          <Divider />
          <form onSubmit={handleSubmit}>
            <VStack spacing={6}>
              <FormControl isInvalid={error.phone}>
                <FormLabel htmlFor="signUp_phone">Phone Number</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    boxSize={12}
                    children={<PhoneIcon color={'gray.400'} />}
                    pointerEvents="none"
                  />
                  <Input
                    _placeholder={{ fontSize: { base: 'sm', md: 'md' } }}
                    disabled={isLoading}
                    id="signUp_phone"
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
                <FormLabel htmlFor="signUp_pass">Password</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    boxSize={12}
                    children={<UnlockIcon color={'gray.400'} />}
                    pointerEvents="none"
                  />
                  <Input
                    _placeholder={{ fontSize: { base: 'sm', md: 'md' } }}
                    disabled={isLoading}
                    id="signUp_pass"
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
                  loadingText="signing up"
                  size={'form'}
                  type="submit"
                  onClick={() => {
                    console.log('clicked');
                  }}
                >
                  sign up
                </Button>
              </Center>
            </VStack>
          </form>
        </VStack>
      </Box>
    </Center>
  );
}

export default SignUp;
