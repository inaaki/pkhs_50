import {
  Button,
  Center,
  chakra,
  Heading,
  Icon,
  Input,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import Dropzone from 'react-dropzone';
import { BsPlus } from 'react-icons/bs';
import { TiTick } from 'react-icons/ti';
import createToast from '../utils/toast';

//TODO: implement api

function UploadImage() {
  const [loading, setLoading] = useState(false);
  const [borderCol, setBorderCol] = useState('gray.400');
  const [image, setImage] = useState('');
  const initState = () => {
    setBorderCol('gray.400');
    setImage('');
  };

  const toast = createToast();

  const handleDragEnter = () => setBorderCol('blue.500');
  const handleDragLeave = () => setBorderCol(image ? 'brand.500' : 'gray.400');
  const handleDrop = files => {
    if (files?.length === 1) {
      const file = files[0];
      // check validity
      const type = ['image/png', 'image/jpeg', 'image/webp'];
      const MAX_SIZE = 1_000_000;
      if (!type.includes(file.type)) {
        toast.error('Format invalid', 'Supported format is .jpg, .jpeg, .png');
        initState('');
        return;
      } else if (file.size > MAX_SIZE) {
        toast.error('File too large', 'Maximum file size is 1MB');
        initState('');
        return;
      } else {
        const reader = new FileReader();
        reader.onerror = () => setImage('');
        reader.abort = () => setImage('');
        reader.onload = ev => {
          setImage(ev.target.result);
        };
        reader.readAsDataURL(file);
        setBorderCol('brand.500');
      }
    } else {
      toast.notify('Drop or select a valid photo');
      initState('');
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      //navigate
      setLoading(false);
    }, 1000);
  };

  return (
    <Center mt={{ base: 28, md: 36 }} px={4}>
      <VStack spacing={{ base: 10, md: 14 }}>
        <VStack spacing={{ base: 12, md: 20 }}>
          <Heading as={'h3'}>Upload your photo:</Heading>
          <VStack spacing={8}>
            <Dropzone
              accept={{ 'image/*': ['.jpeg', '.jpg', '.png', '.webp'] }}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {({ getRootProps, getInputProps }) => (
                <chakra.div
                  backgroundImage={image}
                  backgroundPosition={'center'}
                  backgroundSize={'cover'}
                  border={`3px ${image ? 'solid' : 'dashed'}`}
                  borderColor={borderCol}
                  borderRadius={'xl'}
                  boxSize={'180px'}
                  cursor={'pointer'}
                  overflow={'hidden'}
                  {...getRootProps()}
                >
                  <Input {...getInputProps()} />
                  {!image && (
                    <VStack justifyContent={'center'} height="full">
                      <Icon as={BsPlus} boxSize={'24'} color={'gray.200'} />
                      <Text fontSize={'xs'}>Click here or drop a photo</Text>
                    </VStack>
                  )}
                </chakra.div>
              )}
            </Dropzone>
            <Button
              isLoading={loading}
              loadingText="Uploading..."
              isDisabled={!image}
              size={'sm'}
              onClick={handleSubmit}
            >
              {' '}
              Upload Photo
            </Button>
          </VStack>
        </VStack>
        <List color={'gray.700'} listStyleType={'none'}>
          <VStack spacing={0}>
            <ListItem>
              <ListIcon as={TiTick} color={'green.500'} fontSize={'xl'} />
              Supported size (maximum):
              <chakra.code color={'red.400'}> 1MB </chakra.code>
            </ListItem>
            <ListItem>
              <ListIcon as={TiTick} color={'green.500'} fontSize={'xl'} />
              Supported format:
              <chakra.code ms={2} color={'red.400'}>
                .jpg .jpeg .png .webp
              </chakra.code>
            </ListItem>
          </VStack>
        </List>
      </VStack>
    </Center>
  );
}

export default UploadImage;
