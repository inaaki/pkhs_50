import {
  Avatar,
  Button,
  HStack,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react';
import isEmpty from 'lodash/isEmpty';
import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/userContext';
import http from '../http';
import ls from '../utils/localStorage';
import createToast from '../utils/toast';
import SignIn from './icons/SignIn';
import SignUp from './icons/SignUp';

export default function User({ onClick }) {
  const { user, setUser } = useUserContext();

  const handleLogout = user => {
    setUser(user);
    onClick?.();
  };

  return (
    <HStack spacing={[20, null, 5, 5, 10]}>
      {isEmpty(user) ? (
        <LoggedOut onClick={onClick} />
      ) : (
        <LoggedIn user={user} onClick={handleLogout} />
      )}
    </HStack>
  );
}

//component to show when user is logged in
function LoggedIn({ user, onClick }) {
  //will be replaced later with dynamic code
  const isRegistered = user?.isRegistered;

  const toast = createToast();

  const responsiveSize = useBreakpointValue({
    base: 'md',
    md: 'sm',
    xl: 'md',
  });

  const handleLogout = async () => {
    let token = ls.get() || user.token;

    try {
      await http.logOut(token);
      //notify user
      toast.success('Logout Successful', "We've successfully logged you out");
      ls.remove();
      //set global user to {} and close mobile nav
      onClick({});
    } catch (err) {
      http.rejectHelper(err, () => {
        toast.error(
          'Error occurred',
          'Sorry, log out was unsuccessful. Try again later!'
        );
      });
    }
  };

  return (
    <HStack>
      <RouterLink to={isRegistered ? '/dashboard' : '/registration'}>
        <Button variant={'solid'} size={responsiveSize} onClick={onClick}>
          {isRegistered ? 'DashBoard' : 'Register'}
        </Button>
      </RouterLink>
      <Button
        size={responsiveSize}
        variant={'ghost'}
        colorScheme={'red'}
        leftIcon={<Icon as={FiLogOut} />}
        onClick={() => handleLogout()}
      >
        logout
      </Button>
      <Avatar
        size={responsiveSize}
        src="https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
      />
    </HStack>
  );
}

//component to show when user is logged out
function LoggedOut({ onClick }) {
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
          onClick={() => {
            navigate(route);
            onClick?.();
          }}
        >
          {title}
        </Button>
      ))}
    </>
  );
}
