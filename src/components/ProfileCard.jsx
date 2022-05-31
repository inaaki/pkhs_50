import {
  Avatar,
  Badge,
  Box,
  Center,
  Heading,
  HStack,
  Text,
} from '@chakra-ui/react';
import React, { lazy, Suspense } from 'react';
import SimpleLoader from './loader/SimpleLoader';
//code splitting
const QR = lazy(() => import('./QR'));

//these will be replaced by rest api
const src =
  'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ';
const userId = '352c94c8e0f6';

function ProfileCard() {
  const colorScheme = ['blue', 'orange'];
  return (
    <Box
      boxShadow={'2xl'}
      maxW='xs'
      p={10}
      border="1px"
      borderColor="gray.200"
      rounded={'lg'}
      textAlign={'center'}
      w={'full'}
    >
      <Avatar size={'xl'} src={src} alt={'Avatar Alt'} mb={4} />
      <Heading fontSize={'2xl'} fontFamily={'body'}>
        Lindsey James
      </Heading>
      <Text fontSize="xs">@{userId}</Text>
      <HStack justify="center" my={4}>
        <Badge colorScheme={colorScheme[0]}>Batch: 2014</Badge>
        <Badge colorScheme={colorScheme[1]}>Tickets: 3</Badge>
      </HStack>

      <Center mt={7} minH={128}>
        <Suspense fallback={<SimpleLoader />}>
          <QR value={userId} />
        </Suspense>
      </Center>
    </Box>
  );
}
export default ProfileCard;
