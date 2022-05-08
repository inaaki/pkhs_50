import { Avatar, Button, HStack, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import SignIn from './icons/SignIn';
import SignUp from './icons/SignUp';

export default function User ({ user }) {
  return (
    <HStack spacing={[24, null, 5, 10]}>
      {true ? <LoggedIn /> : <LoggedOut />}
    </HStack>
  );
}
//
function LoggedIn() {
  const responsiveSize = useBreakpointValue({
    base: 'md',
    md: 'sm',
    lg: 'md',
  });
  return (
    <>
      <Button variant={'solid'} size={responsiveSize}>
        DashBoard
      </Button>
      <Avatar
        size={responsiveSize}
        src="https://picsum.phtos/id/1005/200/300"
      />
    </>
  );
}
function LoggedOut() {
  return (
    <>
      <Button size="sm" leftIcon={<SignIn />} iconSpacing={2} variant="outline">
        sign in
      </Button>
      <Button size="sm" leftIcon={<SignUp />} iconSpacing={2} variant="solid">
        sign up
      </Button>
    </>
  );
}
