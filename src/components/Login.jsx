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

function Login() {
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
      const result = await submitData(true);
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
              Login to your account
            </Heading>
            <chakra.span color="gray.400">
              Don't have an account? <Link color={'brand.600'}>Sign Up</Link>
            </chakra.span>
          </VStack>
          <Divider />
          <form onSubmit={handleSubmit}>
            <VStack spacing={6}>
              <FormControl>
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
                  loadingText="logging in"
                  size={'form'}
                  type="submit"
                  onClick={() => {
                    console.log('clicked');
                  }}
                >
                  Log in
                </Button>
              </Center>
            </VStack>
          </form>
        </VStack>
      </Box>
    </Center>
  );
}

export default Login;
