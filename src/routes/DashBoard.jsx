import { Center, Flex } from '@chakra-ui/react';
import React from 'react';
import DisplayData from '../components/DisplayData';
import ProfileCard from '../components/ProfileCard';
import withBackground from '../hoc/withBackground';

const data = {
  name: 'inzamul',
  age: '35',
};

function DashBoard() {
  return (
    <Flex
      gap={20}
      p={10}
      align="start"
      direction={{ base: 'column', md: 'row' }}
    >
      <ProfileCard />
      <DisplayData
        border="1px"
        borderColor="gray.200"
        data={data}
        flexGrow={1}
        minW={{ base: 'auto', md: '2xl' }}
        w="full"
      />
    </Flex>
  );
}

export default withBackground(DashBoard);
