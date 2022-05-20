import {
  chakra,
  FormControl,
  FormLabel,
  GridItem,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
} from '@chakra-ui/react';
import React from 'react';
import Asterisk from './Asterisk';

function Contact() {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      columnGap={12}
      rowGap={{ base: 8, md: 6 }}
      w="full"
    >
      {/* village name */}
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>
            village: <Asterisk />
          </FormLabel>
          <Input placeholder="Enter your name" />
        </FormControl>
      </GridItem>

      {/* post office */}
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>
            post office
            <Asterisk />
          </FormLabel>
          <Input placeholder="Enter your name" />
        </FormControl>
      </GridItem>

      {/* upazila */}
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>
            upazila
            <Asterisk />
          </FormLabel>
          <Input placeholder="Enter your name" />
        </FormControl>
      </GridItem>


      {/* dist */}
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>
            district
            <Asterisk />
          </FormLabel>
          <Input placeholder="Enter your name" />
        </FormControl>
      </GridItem>

      {/* mobile */}
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>
            mobile
            <Asterisk />
          </FormLabel>
          <Input type={'number'} placeholder="Enter your name" />
        </FormControl>
      </GridItem>

      {/* mobile */}
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>
            emergency mobile number
          </FormLabel>
          <Input type={'number'} placeholder="Enter your name" />
        </FormControl>
      </GridItem>
      
      {/* email */}
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>
            email
          </FormLabel>
          <Input placeholder="Enter your name" />
        </FormControl>
      </GridItem>
    </SimpleGrid>
  );
}

export default Contact;
