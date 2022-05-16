import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import {
  Button,
  ButtonGroup,
  chakra,
  Divider,
  Heading,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Card from '../Card';
import Personal from './Personal';
import RequiredLabel from './RequiredLabel';

const category = ['personal', 'educational', 'contact', 'ceremonial'];

function Registration() {
  const [categoryIndex, setCategoryIndex] = useState(0);

  return (
    <Card w="full" maxW={{ base: 'lg', md: '3xl' }}>
      <VStack spacing={10}>
        <FormHeading title={category[categoryIndex] + ' information'} />

        {/* form */}
        <chakra.form w="full">
          <Personal />

          <Buttons
            categoryIndex={categoryIndex}
            setCategoryIndex={setCategoryIndex}
            targetLength={category.length - 1}
          />
        </chakra.form>
      </VStack>
    </Card>
  );
}

function FormHeading({ title }) {
  return (
    <VStack w={'full'} align={{ base: 'center', sm: 'flex-start' }}>
      <VStack>
        <Heading
          as={'h3'}
          variant="form-heading"
          fontSize={{ base: '2xl', sm: '4xl' }}
        >
          {title}
        </Heading>
        <RequiredLabel />
      </VStack>

      <Divider />
    </VStack>
  );
}

function Buttons(props) {
  const { targetLength, categoryIndex, setCategoryIndex } = props;

  return (
    <ButtonGroup w="full" justifyContent="space-between" mt={10}>
      <Button
        type="button"
        leftIcon={<ArrowLeftIcon />}
        disabled={categoryIndex > 0 ? false : true}
        onClick={() => setCategoryIndex(state => state - 1)}
      >
        prev
      </Button>
      {categoryIndex === targetLength && (
        <Button type="submit" isLoading={false} loadingText="submitting">
          submit
        </Button>
      )}
      {categoryIndex !== targetLength && (
        <Button
          type="button"
          rightIcon={<ArrowRightIcon />}
          onClick={() => setCategoryIndex(state => state + 1)}
        >
          next
        </Button>
      )}
    </ButtonGroup>
  );
}

export default Registration;
