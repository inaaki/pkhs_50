import { Avatar, Button, HStack, useBreakpointValue } from '@chakra-ui/react';
import isEmpty from 'lodash/isEmpty';
import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/userContext';
import SignIn from './icons/SignIn';
import SignUp from './icons/SignUp';

export default function User({ onClick }) {
  const {user} = useUserContext();

  return (
    <HStack spacing={[20, null, 5, 5, 10]}>
      {isEmpty(user) ? (
        <LoggedOut />
      ) : (
        <LoggedIn user={user} onClick={onClick} />
      )}
    </HStack>
  );
}
//
function LoggedIn({ user, onClick }) {
  //will be replaced later with dynamic code
  const isRegistered = user?.isRegistered;

  const responsiveSize = useBreakpointValue({
    base: 'md',
    md: 'sm',
    xl: 'md',
  });
  return (
    <>
      <RouterLink to={isRegistered ? '/dashboard' : '/registration'}>
        <Button variant={'solid'} size={responsiveSize} onClick={onClick}>
          {isRegistered ? 'DashBoard' : 'Register'}
        </Button>
      </RouterLink>

      <Avatar
        size={responsiveSize}
        src="https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
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
