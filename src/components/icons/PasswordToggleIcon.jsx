import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react';
import React from 'react';

function PasswordToggleIcon({ show, onClick, ...props }) {
  return (
    <Icon
      color={'gray.400'}
      cursor="pointer"
      onClick={onClick}
      children={show ? <ViewOffIcon /> : <ViewIcon />}
      {...props}
    />
  );
}

export default PasswordToggleIcon;
