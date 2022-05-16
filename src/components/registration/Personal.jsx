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

const blood_group = ['a+', 'a-', 'b+', 'b-', 'ab+', 'ab-', 'o+', 'o-'];
const religion = ['islam', 'hindu', 'christianity', 'others'];

function Personal() {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      columnGap={12}
      rowGap={{ base: 8, md: 6 }}
    >
      {/* english name */}
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>
            Name (English): <Asterisk />
          </FormLabel>
          <Input variant={'filled'} placeholder="Enter your name" />
        </FormControl>
      </GridItem>
      {/* bangla name */}
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Name (Bangla):</FormLabel>
          <Input variant={'filled'} placeholder="Name in Bangla" />
        </FormControl>
      </GridItem>
      {/* parent's name */}
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>
            Father's Name: <Asterisk />
          </FormLabel>
          <Input variant={'filled'} placeholder="Enter your Father's Name" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Mother's Name:</FormLabel>
          <Input variant={'filled'} placeholder="Your Mother's name" />
        </FormControl>
      </GridItem>
      {/* date of birth */}
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Spouse Name:</FormLabel>
          <Input variant={'filled'} placeholder="Enter your Spouse name" />
        </FormControl>
      </GridItem>
      {/* nid */}
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>NID Number:</FormLabel>
          <Input
            variant={'filled'}
            type="number"
            placeholder="Enter your NID number"
          />
        </FormControl>
      </GridItem>
      {/* religion */}
      <GridItem colSpan={1}>
        <FormLabel>Religion:</FormLabel>
        <RadioGroup name="religion">
          <SimpleGrid gap={1} columns={2} maxWidth={'300px'}>
            {religion.map(item => (
              <Radio key={item} value={item} colSpan={1}>
                {item}
              </Radio>
            ))}
          </SimpleGrid>
        </RadioGroup>
      </GridItem>
      {/* gender */}
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>
            Gender: <Asterisk />
          </FormLabel>
          <RadioGroup name="gender">
            <HStack spacing={6}>
              <Radio value={'male'}>male</Radio>
              <Radio value={'female'}>female</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
      </GridItem>
      {/* blood group */}
      <GridItem colSpan={1}>
        <FormLabel>Blood Group:</FormLabel>
        <Select placeholder="Blood group?" variant="filled">
          {blood_group.map(item => (
            <chakra.option key={item} value={item}>
              {item}
            </chakra.option>
          ))}
        </Select>
      </GridItem>
      {/* date of birth */}
      <GridItem colSpan={1}>
        <FormLabel>Date of birth:</FormLabel>
        <Input type={'date'} variant="filled" />
      </GridItem>
    </SimpleGrid>
  );
}

export default Personal;
