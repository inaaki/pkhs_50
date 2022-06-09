import { Button, Hide, HStack, Show } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { disableScroll, enableScroll } from '../utils/scroll';
import Header from './Header';
import Logo from './icons/logo/Logo';
import Toggler from './icons/Toggler';
import { DesktopNav, MobileNav } from './Navigation';

function Nav() {
  const [isOpen, setNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        if (isSticky) return;
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isSticky]);

  const toggleNav = () => {
    !isOpen ? disableScroll() : enableScroll();
    setNav(!isOpen);
  };

  return (
    <Header variant={isSticky ? 'secondary' : 'primary'}>
      <HStack
        justify={{
          base: 'space-between',
          md: 'space-around',
          lg: 'space-between',
        }}
      >
        <Logo />
        <Show above="md">
          <DesktopNav />
        </Show>
        <Hide above="md">
          <Button onClick={toggleNav} variant={'outline'}>
            <Toggler isOpen={isOpen} />
          </Button>
        </Hide>
      </HStack>
      <Hide above="md">
        <MobileNav isOpen={isOpen} onClick={toggleNav} />
      </Hide>
    </Header>
  );
}

export default Nav;
