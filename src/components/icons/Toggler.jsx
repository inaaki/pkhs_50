import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react';
import React from 'react';

export default function Toggler({ isOpen, ...props }) {
  return <Icon as={isOpen ? CloseIcon : HamburgerIcon} {...props} />;
}
