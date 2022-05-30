import { Center } from '@chakra-ui/react';
import React from 'react';
import bg from '../assets/svg/wave.svg';

function withBackground(Component) {
  const style = {
    background: `top/contain url(${bg}) no-repeat`,
    backgroundOrigin: 'content-box',
    pt: '67.5px',
  };

  return props => (
    <Center minH="100vh" sx={style}>
      <Component {...props} />
    </Center>
  );
}

export default withBackground;
