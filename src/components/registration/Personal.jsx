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

function Personal({ currentPart, state, onChange }) {
  state = state[currentPart];
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      columnGap={12}
      rowGap={{ base: 8, md: 6 }}
      w="full"
    >
      {/* english name */}
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>
            Name (English): <Asterisk />
          </FormLabel>
          <Input
            placeholder="Enter your name"
            name="englishName"
            value={state.englishName}
            onChange={onChange}
          />
        </FormControl>
      </GridItem>
      {/* bangla name */}
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Name (Bangla):</FormLabel>
          <Input
            placeholder="Name in Bangla"
            name="banglaName"
            value={state.banglaName}
            onChange={onChange}
          />
        </FormControl>
      </GridItem>
      {/* parent's name */}
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>
            Father's Name: <Asterisk />
          </FormLabel>
          <Input
            placeholder="Enter your Father's Name"
            name="father"
            value={state.father}
            onChange={onChange}
          />
        </FormControl>
      </GridItem>
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Mother's Name:</FormLabel>
          <Input
            placeholder="Your Mother's name"
            name="mother"
            value={state.mother}
            onChange={onChange}
          />
        </FormControl>
      </GridItem>
      {/* date of birth */}
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Spouse Name:</FormLabel>
          <Input
            placeholder="Enter your Spouse name"
            name="spouse"
            onChange={onChange}
            value={state.spouse}
          />
        </FormControl>
      </GridItem>
      {/* nid */}
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>NID Number:</FormLabel>
          <Input
            type="number"
            placeholder="Enter your NID number"
            name="nid"
            value={state.nid}
            onChange={onChange}
          />
        </FormControl>
      </GridItem>
      {/* religion */}
      <GridItem colSpan={1}>
        <FormLabel>Religion:</FormLabel>
        <RadioGroup name="religion" value={state.religion}>
          <SimpleGrid
            gap={1}
            columns={2}
            maxWidth={'300px'}
            justifyItems="start"
          >
            {religion.map(item => (
              <Radio key={item} value={item} colSpan={1} onChange={onChange}>
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
          <RadioGroup name="gender" value={state.gender}>
            <HStack spacing={6}>
              {['male', 'female'].map(item => (
                <Radio key={item} value={item} onChange={onChange}>
                  {item}
                </Radio>
              ))}
            </HStack>
          </RadioGroup>
        </FormControl>
      </GridItem>
      {/* blood group */}
      <GridItem colSpan={1}>
        <FormLabel>Blood Group:</FormLabel>
        <Select
          placeholder="Blood group?"
          name="blood"
          value={state.blood}
          variant="filled"
          onChange={onChange}
        >
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
        <Input
          type={'date'}
          variant="filled"
          name="birthDate"
          value={state.birthDate}
          onChange={onChange}
        />
      </GridItem>
    </SimpleGrid>
  );
}

export default Personal;
