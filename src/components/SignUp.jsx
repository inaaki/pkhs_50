import { PhoneIcon, UnlockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  chakra,
  Divider,
  FormControl,
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
import { submitData } from '../utils/fakeApi';
import Thunder from './icons/Thunder';

function SignUp() {
  const [isShow, setIsShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast({
    position: 'bottom',
    isClosable: true,
    duration: 5000,
  });

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await submitData(false);
      console.log(result);
      toast({
        status: 'success',
        title: 'Account created',
        description: "We've created your account for you",
        variant: 'solid',
      });
    } catch (e) {
      console.log(e);
      toast({
        status: 'error',
        title: 'Error occurred',
        description: 'Sorry, we were unable to create your account',
        variant: 'solid',
      });
    } finally {
      setIsLoading(false);
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
              <FormControl>
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
                    name="number"
                    placeholder="Enter your Phone Number"
                    size={'lg'}
                    type={'number'}
                    variant="filled"
                  />
                </InputGroup>
              </FormControl>

              {/* password field */}
              <FormControl>
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
                    name="password"
                    placeholder="Enter your Password"
                    size={'lg'}
                    type={isShow ? 'text' : 'password'}
                    variant="filled"
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
