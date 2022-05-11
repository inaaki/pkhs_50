import { HStack, Link, Slide, VStack } from '@chakra-ui/react';
import React from 'react';
import User from './User';

/* ----- navbar for mobile user ----- */
export function MobileNav({ isOpen }) {
  return (
    <Slide in={isOpen} direction="right" style={{ zIndex: -1 }}>
      <VStack
        pos={'absolute'}
        w="full"
        right="0"
        top="0"
        pt={24}
        h="100vh"
        spacing={10}
        zIndex="hide"
      >
        <User />
        <VStack spacing={5}>
          <NavItems />
        </VStack>
      </VStack>
    </Slide>
  );
}

/* ----- navbar for desktop user ---- */
export function DesktopNav(props) {
  return (
    <>
      <HStack spacing={{ base: 5, lg: 8 }}>
        <NavItems fontSize={['md', 'md', 'sm', 'md']} />
      </HStack>
      <User />
    </>
  );
}

/* ------- navItems generator ------- */
function NavItems(props) {
  const NAV_ITEMS = [
    { title: 'home', path: '/' },
    { title: 'venue', path: '#venue' },
    { title: 'schedule', path: '#schedule' },
    { title: 'contact', path: '#contact' },
  ];

  return (
    <>
      {NAV_ITEMS.map(({ title, path }) => (
        <Link key={title + path} href="path" variant="nav-link" {...props}>
          {title}
        </Link>
      ))}
    </>
  );
}
