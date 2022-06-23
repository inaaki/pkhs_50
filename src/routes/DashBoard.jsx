import { Flex } from '@chakra-ui/react';
import DisplayData from '../components/DisplayData';
import ProfileCard from '../components/ProfileCard';
import withBackground from '../hoc/withBackground';
import withPrivateRoute from '../hoc/withPrivateRoute';
import withRegisteredRoute from '../hoc/withRegisteredRoute';

//will be replace by real data
const user = {
  _id: '352c94c8e0f6',
  data: {
    name: 'Lindsey James',
    age: '35',
    batch: 2014,
    ticket: 3,
    sex: 'female',
    occupation: 'CTO, Laravo IT',
    children: 2,
    totalFamilyMember: 5,
  },
};

function DashBoard() {
  const {
    id,
    data: { name, batch, ticket },
  } = user;

  return (
    <Flex
      gap={20}
      p={10}
      pt={{ base: 14, md: 20 }}
      align="start"
      direction={{ base: 'column', md: 'row' }}
      maxW={'7xl'}
    >
      <ProfileCard id={id} name={name} batch={batch} ticket={ticket} />
      <DisplayData data={user.data} minW={{ base: 'auto', lg: 'lg' }} />
    </Flex>
  );
}

export default withPrivateRoute(withRegisteredRoute(withBackground(DashBoard)));
