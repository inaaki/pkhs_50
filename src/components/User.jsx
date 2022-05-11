import { Avatar, Button, HStack, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import SignIn from './icons/SignIn';
import SignUp from './icons/SignUp';

export default function User({ user }) {
  return (
    <HStack spacing={[24, null, 5, 10]}>
      {user || false ? <LoggedIn /> : <LoggedOut />}
    </HStack>
  );
}
//
function LoggedIn() {
  const responsiveSize = useBreakpointValue({
    base: 'md',
    md: 'sm',
    xl: 'md',
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
  const buttons = [
    { title: 'log in', variant: 'outline', icon: <SignIn /> },
    { title: 'sign up', variant: 'solid', icon: <SignUp /> },
  ];

  const responsiveSize = useBreakpointValue({
    base: 'md',
    md: 'sm',
    xl: 'md',
  });
  return (
    <>
      {buttons.map(({ title, icon, variant }, index) => (
        <Button
          key={title + index}
          size={responsiveSize}
          leftIcon={icon}
          variant={variant}
          iconSpacing={2}
        >
          {title}
        </Button>
      ))}
    </>
  );
}
