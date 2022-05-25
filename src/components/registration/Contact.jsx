import {
  FormControl,
  FormLabel,
  GridItem,
  Input,
  SimpleGrid,
} from '@chakra-ui/react';
import React from 'react';
import Asterisk from './Asterisk';

function Contact({ onChange, state }) {
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
          <Input
            placeholder="Enter your village name"
            name="village"
            value={state.village || ''}
            onChange={onChange}
          />
        </FormControl>
      </GridItem>

      {/* post office */}
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>
            post office
            <Asterisk />
          </FormLabel>
          <Input
            placeholder="Enter your Post Office name"
            name="postOffice"
            value={state.postOffice || ''}
            onChange={onChange}
          />
        </FormControl>
      </GridItem>

      {/* upazila */}
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>
            upazila
            <Asterisk />
          </FormLabel>
          <Input
            placeholder="Enter your upazila name"
            name="upazila"
            value={state.upazila || ''}
            onChange={onChange}
          />
        </FormControl>
      </GridItem>

      {/* dist */}
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>
            district
            <Asterisk />
          </FormLabel>
          <Input
            placeholder="Enter your district name"
            name="district"
            value={state.district || ''}
            onChange={onChange}
          />
        </FormControl>
      </GridItem>

      {/* mobile */}
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>
            mobile
            <Asterisk />
          </FormLabel>
          <Input
            type={'number'}
            placeholder="Enter your mobile number"
            name="mobile"
            value={state.mobile || ''}
            onChange={onChange}
          />
        </FormControl>
      </GridItem>

      {/* mobile */}
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>emergency mobile number</FormLabel>
          <Input
            type={'number'}
            placeholder="Emergency mobile number"
            name="emergencyMobile"
            value={state.emergencyMobile || ''}
            onChange={onChange}
          />
        </FormControl>
      </GridItem>

      {/* email */}
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>email</FormLabel>
          <Input
            placeholder="Enter your email"
            name="email"
            value={state.email || ''}
            onChange={onChange}
          />
        </FormControl>
      </GridItem>
    </SimpleGrid>
  );
}

export default Contact;
