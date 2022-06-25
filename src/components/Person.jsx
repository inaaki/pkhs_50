import { PhoneIcon } from '@chakra-ui/icons';
import { Heading, HStack, Text, VStack } from '@chakra-ui/react';
import person_jpg from '../assets/images/person/akib/akib.jpg';
import person_webp from '../assets/images/person/akib/akib.webp';
import Picture from './Picture';

//will be replaced by props
const name = 'md. inzamul huq akib';
const phone = '01629-847168';
const sources = [{ srcset: person_webp }, { srcset: person_jpg }];

function Person() {
  return (
    <HStack spacing={5} p={2}>
      <Picture
        src={person_jpg}
        sources={sources}
        rounded="full"
        w={'75px'}
        h={'75px'}
      />
      <VStack align={'flex-start'} spacing={2}>
        <Heading
          as={'h3'}
          fontSize={'2xl'}
          color={'primary'}
          textTransform="capitalize"
          lineHeight={1}
        >
          {name}
        </Heading>
        <HStack>
          <PhoneIcon color={'gray.600'} />
          <Text
            fontWeight={600}
            fontSize={'xl'}
            letterSpacing={'1px'}
            as={'samp'}
          >
            {phone}
          </Text>
        </HStack>
      </VStack>
    </HStack>
  );
}

export default Person;
