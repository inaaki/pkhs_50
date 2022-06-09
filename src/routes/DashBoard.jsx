import { Flex } from '@chakra-ui/react';
import React from 'react';
import DisplayData from '../components/DisplayData';
import ProfileCard from '../components/ProfileCard';
import withBackground from '../hoc/withBackground';

const data = {
  name: 'mohammad inzamul',
  age: '35',
};

function DashBoard() {
  return (
    <Flex
      gap={20}
      p={10}
      pt={{ base: 14, md: 20 }}
      align="start"
      direction={{ base: 'column', md: 'row' }}
      maxW={'7xl'}
    >
      <ProfileCard />
      <DisplayData data={data} minW={{ base: 'auto', lg: 'lg' }} />
    </Flex>
  );
}

export default withBackground(DashBoard);
