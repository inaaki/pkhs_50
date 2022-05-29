import { HStack, Link, Slide, Stack, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { enableScroll } from '../utils/scroll';
import User from './User';

/* ----- navbar for mobile user ----- */
export function MobileNav({ isOpen }) {
  return (
    <Slide
      in={isOpen}
      direction="right"
      style={{
        zIndex: -1,
        right: `${isOpen ? 0 : '-5rem'}`,
      }}
    >
      <VStack bg="white" h="100vh" pt={24} spacing={10} w="full">
        <User />
        <VStack spacing={5}>
          <NavItems />
        </VStack>
      </VStack>
    </Slide>
  );
}

/* ----- navbar for desktop user ---- */
export function DesktopNav() {
  useEffect(() => {
    enableScroll();
  }, []);

  return (
    <HStack
      //flex-grow=1 for menu centering
      flexGrow={{ base: 0, lg: 1 }}
      align="center"
      spacing={4}
    >
      <NavItems fontSize={['md', 'md', 'sm', 'md']} />
      <User />
    </HStack>
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
    <Stack
      direction={{ base: 'column', md: 'row' }}
      //margin-left_right = auto for menu centering
      mx="auto"
      spacing={{ base: 5, lg: 4, xl: 8 }}
      align="center"
    >
      {NAV_ITEMS.map(({ title, path }) => (
        <Link key={title + path} href="path" variant="nav-link" {...props}>
          {title}
        </Link>
      ))}
    </Stack>
  );
}
