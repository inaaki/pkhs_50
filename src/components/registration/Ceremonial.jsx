import {
  chakra,
  FormControl,
  FormLabel,
  GridItem,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  SimpleGrid,
} from '@chakra-ui/react';
import React from 'react';
import Asterisk from './Asterisk';

const shirt_size = [
  { title: 'Medium (MD)', value: 'md' },
  { title: 'Large (LG)', value: 'lg' },
  { title: 'Extra Large (XL)', value: 'xl' },
  { title: 'Extra Extra Large (XXL)', value: 'xxl' },
];

function Ceremonial() {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      columnGap={12}
      rowGap={{ base: 8, md: 6 }}
    >
      {/* batch number */}
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>
            Passing Year / SSC Batch: <Asterisk />
          </FormLabel>
          <Input type="number" placeholder="eg. 2014" />
        </FormControl>
      </GridItem>

      {/* guest number */}
      <GridItem colSpan={1}>
        <FormLabel>Number of Guest:</FormLabel>
        <InputGroup>
          <InputLeftAddon children="You (1)+" pointerEvents="none" />
          <Input type="number" placeholder="0" />
        </InputGroup>
      </GridItem>

      {/* t-shirt size*/}
      <GridItem colSpan={1}>
        <FormLabel>
          T-Shirt Size: <Asterisk />
        </FormLabel>
        <Select
          placeholder="Choose your T-Shirt size"
          variant="filled"
          textTransform={'initial'}
        >
          {shirt_size.map(({ title, value }) => (
            <chakra.option key={value} value={value}>
              {title}
            </chakra.option>
          ))}
        </Select>
      </GridItem>

      {/* qualification */}
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Last Educational Qualification:</FormLabel>
          <Input placeholder="eg. Bsc in CSE" />
        </FormControl>
      </GridItem>

      {/* institute name */}
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Last Educational Institute:</FormLabel>
          <Input placeholder="eg. National University" />
        </FormControl>
      </GridItem>

      {/* others */}
      <GridItem colSpan={1}>
        <FormLabel>Others:</FormLabel>
        <InputGroup>
          <Input placeholder="Other information" />
        </InputGroup>
      </GridItem>
    </SimpleGrid>
  );
}

export default Ceremonial;
