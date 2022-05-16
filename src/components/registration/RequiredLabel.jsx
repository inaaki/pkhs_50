import { chakra, Text } from '@chakra-ui/react';
import React from 'react';

function RequiredLabel() {
  return (
    <Text
      w={'full'}
      textTransform="uppercase"
      fontSize={{ base: '10px', md: 'xs' }}
    >
      marked (<chakra.span color={'red'}>*</chakra.span>) fields are required
    </Text>
  );
}

export default RequiredLabel;
