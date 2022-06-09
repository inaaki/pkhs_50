import { Avatar, Button, HStack, useBreakpointValue } from '@chakra-ui/react';
import isEmpty from 'lodash/isEmpty';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import SignIn from './icons/SignIn';
import SignUp from './icons/SignUp';

export default function User() {
  const user = useContext(UserContext);

  return (
    <HStack spacing={[20, null, 5, 5, 10]}>
      {isEmpty(user) ? <LoggedOut /> : <LoggedIn />}
    </HStack>
  );
}
//
function LoggedIn() {
  const navigate = useNavigate();
  const responsiveSize = useBreakpointValue({
    base: 'md',
    md: 'sm',
    xl: 'md',
  });
  return (
    <>
      <Button
        variant={'solid'}
        size={responsiveSize}
        onClick={() => navigate('/dashboard')}
      >
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
  const navigate = useNavigate();
  const buttons = [
    {
      title: 'log in',
      variant: 'outline',
      icon: <SignIn />,
      route: 'login',
    },
    {
      title: 'sign up',
      variant: 'solid',
      icon: <SignUp />,
      route: 'signup',
    },
  ];
  const responsiveSize = useBreakpointValue({
    base: 'md',
    md: 'sm',
    xl: 'md',
  });
  return (
    <>
      {buttons.map(({ title, icon, variant, route }) => (
        <Button
          iconSpacing={2}
          key={title}
          leftIcon={icon}
          size={responsiveSize}
          variant={variant}
          onClick={() => navigate(route)}
        >
          {title}
        </Button>
      ))}
    </>
  );
}
