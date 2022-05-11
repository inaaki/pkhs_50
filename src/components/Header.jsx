import { Button, chakra, Hide, HStack, Show } from '@chakra-ui/react';
import React, { useState } from 'react';
import Logo from './icons/logo/Logo';
import Toggler from './icons/Toggler';
import { MobileNav, DesktopNav } from './Navigation';

function Header() {
  const [isOpen, toggleNav] = useState(false);

  return (
    <chakra.header
      zIndex="sticky"
      px={[3, 5, 8, 16]}
      py={{ base: 1, md: 2.5 }}
      width="100%"
      pos="fixed"
      top='0'
      left='0'
    >
      <HStack justify={'space-between'}>
        <Logo />
        <Show above="md">
          <DesktopNav />
        </Show>
        <Hide above="md">
          <Button
            onClick={() => {
              toggleNav(!isOpen);
            }}
            variant={'outline'}
          >
            <Toggler isOpen={isOpen} />
          </Button>
        </Hide>
      </HStack>
      <Hide above="md">
        <MobileNav isOpen={isOpen} />
      </Hide>
    </chakra.header>
  );
}

export default Header;
