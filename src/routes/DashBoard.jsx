import { Flex } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import DisplayData from '../components/DisplayData';
import ProfileCard from '../components/ProfileCard';
import { UserContext } from '../context/userContext';
import withBackground from '../hoc/withBackground';

const data = {
  name: 'mohammad inzamul',
  age: '35',
};

function DashBoard() {
  const user = useContext(UserContext);

  return user?.isRegistered ? (
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
  ) : (
    <Navigate to={'/registration'} />
  );
}

export default withBackground(DashBoard);
