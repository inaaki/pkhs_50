import { Center } from '@chakra-ui/react';
import React from 'react';
import bg from '../assets/svg/wave.svg';

function withBackground(Component) {
  const style = {
    background: `top/contain url(${bg}) no-repeat`,
  };

  return props => (
    <Center minH={'calc(100vh - 67.5px)'} sx={style} >
      <Component {...props} />
    </Center>
  );
}

export default withBackground;
