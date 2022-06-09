import { Center } from '@chakra-ui/react';
import React from 'react';
import { HashLoader } from 'react-spinners';

function FullLoader() {
  return (
    <Center minH={'calc(100vh - 67.5px)'}>
      <HashLoader color='#38A169' size={60}/>
    </Center>
  );
}

export default FullLoader;
