import {
  chakra,
  FormControl,
  FormErrorMessage,
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

function Personal({ currentPart, error, state, onBlur, onChange }) {
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
        <FormControl isInvalid={error.englishName}>
          <FormLabel>
            Name (English): <Asterisk />
          </FormLabel>
          <Input
            name="englishName"
            onBlur={onBlur}
            onChange={onChange}
            placeholder="Enter your name"
            value={state.englishName}
          />
          <FormErrorMessage>{error.englishName}</FormErrorMessage>
        </FormControl>
      </GridItem>
      {/* bangla name */}
      <GridItem colSpan={1}>
        <FormControl isInvalid={error.banglaName}>
          <FormLabel>Name (Bangla):</FormLabel>
          <Input
            name="banglaName"
            onBlur={onBlur}
            onChange={onChange}
            placeholder="Name in Bangla"
            value={state.banglaName}
          />
          <FormErrorMessage>{error.banglaName}</FormErrorMessage>
        </FormControl>
      </GridItem>
      {/* father's name */}
      <GridItem colSpan={1}>
        <FormControl isInvalid={error.father}>
          <FormLabel>
            Father's Name: <Asterisk />
          </FormLabel>
          <Input
            name="father"
            onBlur={onBlur}
            onChange={onChange}
            placeholder="Enter your Father's Name"
            value={state.father}
          />
          <FormErrorMessage>{error.father}</FormErrorMessage>
        </FormControl>
      </GridItem>
      {/* mother's name */}
      <GridItem colSpan={1}>
        <FormControl isInvalid={error.mother}>
          <FormLabel>Mother's Name:</FormLabel>
          <Input
            name="mother"
            onBlur={onBlur}
            onChange={onChange}
            placeholder="Your Mother's name"
            value={state.mother}
          />
          <FormErrorMessage>{error.mother}</FormErrorMessage>
        </FormControl>
      </GridItem>
      {/* spouse name */}
      <GridItem colSpan={1}>
        <FormControl isInvalid={error.spouse}>
          <FormLabel>Spouse Name:</FormLabel>
          <Input
            name="spouse"
            onBlur={onBlur}
            onChange={onChange}
            placeholder="Enter your Spouse name"
            value={state.spouse}
          />
          <FormErrorMessage>{error.spouse}</FormErrorMessage>
        </FormControl>
      </GridItem>
      {/* nid */}
      <GridItem colSpan={1}>
        <FormControl isInvalid={error.nid}>
          <FormLabel>NID Number:</FormLabel>
          <Input
            name="nid"
            onBlur={onBlur}
            onChange={onChange}
            placeholder="Enter your NID number"
            type="number"
            value={state.nid}
          />
          <FormErrorMessage>{error.nid}</FormErrorMessage>
        </FormControl>
      </GridItem>
      {/* religion */}
      <GridItem colSpan={1}>
        <FormControl isInvalid={error.religion}>
          <FormLabel>Religion:</FormLabel>
          <RadioGroup name="religion" value={state.religion}
          onBlur={onBlur}>
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
          <FormErrorMessage>{error.religion}</FormErrorMessage>
        </FormControl>
      </GridItem>
      {/* gender */}
      <GridItem colSpan={1}>
        <FormControl isInvalid={error.gender}>
          <FormLabel>
            Gender: <Asterisk />
          </FormLabel>
          <RadioGroup name="gender" value={state.gender} onBlur={onBlur}>
            <HStack spacing={6}>
              {['male', 'female'].map(item => (
                <Radio key={item} value={item} onChange={onChange}>
                  {item}
                </Radio>
              ))}
            </HStack>
          </RadioGroup>
          <FormErrorMessage>{error.gender}</FormErrorMessage>
        </FormControl>
      </GridItem>
      {/* blood group */}
      <GridItem colSpan={1}>
        <FormControl isInvalid={error.blood}>
          <FormLabel>Blood Group:</FormLabel>
          <Select
            name="blood"
            onBlur={onBlur}
            onChange={onChange}
            placeholder="Blood group?"
            value={state.blood}
            variant="filled"
          >
            {blood_group.map(item => (
              <chakra.option key={item} value={item}>
                {item}
              </chakra.option>
            ))}
          </Select>
          <FormErrorMessage>{error.blood}</FormErrorMessage>
        </FormControl>
      </GridItem>
      {/* date of birth */}
      <GridItem colSpan={1}>
        <FormControl isInvalid={error.birthDate}>
          <FormLabel>Date of birth:</FormLabel>
          <Input
            name="birthDate"
            onBlur={onBlur}
            onChange={onChange}
            type={'date'}
            value={state.birthDate}
            variant="filled"
          />
          <FormErrorMessage>{error.birthDate}</FormErrorMessage>
        </FormControl>
      </GridItem>
    </SimpleGrid>
  );
}

export default Personal;
