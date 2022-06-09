import {
  Button,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import errorSvg from '../assets/svg/error.svg';

function NotFound() {
  return (
    <Center minH="calc(100vh - 67.5px)">
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        alignItems="center"
        gap={10}
        p={10}
        maxW="container.xl"
        mt={{ base: 0, md: -20 }}
      >
        <VStack align={'flex-start'} spacing={8}>
          <Heading as={'h4'} fontSize="7xl" color="primary">
            404
          </Heading>
          <Text color="heading" fontWeight={600} fontSize="3xl">
            Sorry, we couldn't find the page you're looking for
          </Text>
          <RouterLink to="/" replace>
            <Button textTransform="lowercase">back to homepage</Button>
          </RouterLink>
        </VStack>
        <Image src={errorSvg} />
      </SimpleGrid>
    </Center>
  );
}

export default NotFound;
