import {
  Button,
  Center,
  chakra,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import { TiTick, TiTimes } from 'react-icons/ti';

function UploadImage() {
  const okIcon = <ListIcon as={TiTick} color={'green.500'} fontSize={'xl'} />;
  const errIcon = <ListIcon as={TiTimes} color={'red.500'} fontSize={'xl'} />;

  const [borderCol, setBorderCol] = useState('gray.400');

  return (
    <Center mt={{ base: 28, md: 36 }} px={4}>
      <VStack spacing={{ base: 10, md: 14 }}>
        <VStack spacing={{ base: 12, md: 20 }}>
          <Heading as={'h3'}>Upload your photo:</Heading>
          <VStack spacing={8}>
            <chakra.div
              className="drop"
              boxSize={'180px'}
              border={'3px dashed'}
              borderColor={borderCol}
              borderRadius={'xl'}
              cursor={'pointer'}
            >
              <VStack justifyContent={'center'} height="full">
                <Icon as={BsPlus} boxSize={'24'} color={'gray.200'} />
                <Text fontSize={'xs'}>Click here or drop a photo</Text>
              </VStack>
            </chakra.div>
            <Button
              isLoading={false}
              loadingText="Uploading..."
              isDisabled={true}
              size={'sm'}
            >
              {' '}
              Upload Photo
            </Button>
          </VStack>
        </VStack>
        <List color={'gray.700'} listStyleType={'none'}>
          <VStack spacing={0}>
            <ListItem>
              {okIcon}
              Photo must be less than
              <chakra.code color={'red.400'}> 1MB </chakra.code>in size
            </ListItem>
            <ListItem>
              {errIcon}
              Supported format:
              <chakra.code ms={2} color={'red.400'}>
                .jpg .jpeg .png
              </chakra.code>
            </ListItem>
          </VStack>
        </List>
      </VStack>
    </Center>
  );
}

export default UploadImage;
