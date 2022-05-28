import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  GridItem,
  Input,
  SimpleGrid,
} from '@chakra-ui/react';
import React from 'react';
import Asterisk from './Asterisk';

function Contact({ currentPart, state, error, onBlur, onChange }) {
  state = state[currentPart];

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      columnGap={12}
      rowGap={{ base: 8, md: 6 }}
      w="full"
    >
      {/* village name */}
      <GridItem colSpan={1}>
        <FormControl isInvalid={error.village}>
          <FormLabel>
            village: <Asterisk />
          </FormLabel>
          <Input
            placeholder="Enter your village name"
            name="village"
            value={state.village}
            onChange={onChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>{error.village}</FormErrorMessage>
        </FormControl>
      </GridItem>

      {/* post office */}
      <GridItem colSpan={1}>
        <FormControl isInvalid={error.postOffice}>
          <FormLabel>
            post office
            <Asterisk />
          </FormLabel>
          <Input
            placeholder="Enter your Post Office name"
            name="postOffice"
            value={state.postOffice}
            onChange={onChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>{error.postOffice}</FormErrorMessage>
        </FormControl>
      </GridItem>

      {/* upazila */}
      <GridItem colSpan={1}>
        <FormControl isInvalid={error.upazila}>
          <FormLabel>
            upazila
            <Asterisk />
          </FormLabel>
          <Input
            placeholder="Enter your upazila name"
            name="upazila"
            value={state.upazila}
            onChange={onChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>{error.upazila}</FormErrorMessage>
        </FormControl>
      </GridItem>

      {/* dist */}
      <GridItem colSpan={1}>
        <FormControl isInvalid={error.district}>
          <FormLabel>
            district
            <Asterisk />
          </FormLabel>
          <Input
            placeholder="Enter your district name"
            name="district"
            value={state.district}
            onChange={onChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>{error.district}</FormErrorMessage>
        </FormControl>
      </GridItem>

      {/* emergency mobile */}
      <GridItem colSpan={1}>
        <FormControl isInvalid={error.emergencyMobile}>
          <FormLabel>emergency mobile number</FormLabel>
          <Input
            type={'number'}
            placeholder="Emergency mobile number"
            name="emergencyMobile"
            value={state.emergencyMobile}
            onChange={onChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>{error.emergencyMobile}</FormErrorMessage>
        </FormControl>
      </GridItem>

      {/* email */}
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>email</FormLabel>
          <Input
            placeholder="Enter your email"
            name="email"
            value={state.email}
            onChange={onChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>{error.email}</FormErrorMessage>
        </FormControl>
      </GridItem>
    </SimpleGrid>
  );
}

export default Contact;
