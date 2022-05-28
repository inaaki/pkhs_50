import {
  chakra,
  FormControl,
  FormErrorMessage,
  FormLabel,
  GridItem,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  SimpleGrid,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
import Asterisk from './Asterisk';

function Ceremonial({ currentPart, error, onBlur, state, onChange }) {
  state = state[currentPart];

  const shirt_size = [
    { title: 'Medium (MD)', value: 'md' },
    { title: 'Large (LG)', value: 'lg' },
    { title: 'Extra Large (XL)', value: 'xl' },
    { title: 'Extra Extra Large (XXL)', value: 'xxl' },
  ];

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      columnGap={12}
      rowGap={{ base: 8, md: 6 }}
    >
      {/* batch number */}
      <GridItem colSpan={1}>
        <FormControl isInvalid={error.batch}>
          <FormLabel>
            Passing Year / SSC Batch: <Asterisk />
          </FormLabel>
          <Input
            type="number"
            placeholder="eg. 2014"
            name="batch"
            value={state.batch}
            onChange={onChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>{error.batch}</FormErrorMessage>
        </FormControl>
      </GridItem>

      {/* guest number */}
      <GridItem colSpan={1}>
        <FormControl isInvalid={error.guest}>
          <FormLabel>Number of Guest:</FormLabel>
          <InputGroup>
            <InputLeftAddon children="You (1)+" pointerEvents="none" />
            <Input
              type={'number'}
              placeholder="0"
              name="guest"
              value={state.guest}
              onChange={onChange}
              onBlur={onBlur}
            />
          </InputGroup>
          <FormErrorMessage>{error.guest}</FormErrorMessage>
        </FormControl>
      </GridItem>

      {/* t-shirt size*/}
      <GridItem colSpan={1}>
        <FormControl isInvalid={error.size}>
          <FormLabel>
            T-Shirt Size: <Asterisk />
          </FormLabel>
          <Select
            placeholder="Choose your T-Shirt size"
            variant="filled"
            textTransform={'initial'}
            name="size"
            value={state.size}
            onChange={onChange}
            onBlur={onBlur}
          >
            {shirt_size.map(({ title, value }) => (
              <chakra.option key={value} value={value}>
                {title}
              </chakra.option>
            ))}
          </Select>
          <FormErrorMessage>{error.size}</FormErrorMessage>
        </FormControl>
      </GridItem>

      {/* qualification */}
      <GridItem colSpan={1}>
        <FormControl isInvalid={error.qualification}>
          <FormLabel>Last Educational Qualification:</FormLabel>
          <Input
            placeholder="eg. Bsc in CSE"
            name="qualification"
            value={state.qualification}
            onChange={onChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>{error.qualification}</FormErrorMessage>
        </FormControl>
      </GridItem>

      {/* institute name */}
      <GridItem colSpan={1}>
        <FormControl isInvalid={error.institute}>
          <FormLabel>Last Educational Institute:</FormLabel>
          <Input
            placeholder="eg. National University"
            name="institute"
            value={state.institute}
            onChange={onChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>{error.institute}</FormErrorMessage>
        </FormControl>
      </GridItem>

      {/* others */}
      <GridItem colSpan={1}>
        <FormControl isInvalid={error.others}>
          <FormLabel>Others:</FormLabel>
          <InputGroup>
            <Textarea
              placeholder="Other information"
              variant="filled"
              name="others"
              value={state.others}
              onChange={onChange}
              onBlur={onBlur}
            />
          </InputGroup>
          <FormErrorMessage>{error.others}</FormErrorMessage>
        </FormControl>
      </GridItem>
    </SimpleGrid>
  );
}

export default Ceremonial;
