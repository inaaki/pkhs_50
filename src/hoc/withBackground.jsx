import { Center } from '@chakra-ui/react';
import React from 'react';
import bg from '../assets/svg/wave.svg';

function withBackground(Component) {
  return props => {
    return (
      <Center
        minH={'calc(100vh - 67.5px)'}
        background={`top/contain url(${bg}) no-repeat`}
      >
        <Component {...props} />
      </Center>
    );
  };
}

export default withBackground;
