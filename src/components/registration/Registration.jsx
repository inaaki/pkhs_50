import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import {
  Button,
  ButtonGroup,
  Center,
  chakra,
  Divider,
  Heading,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import React, { useMemo, useState } from 'react';
import withBackground from '../../hoc/withBackground';
import Card from '../Card';
import Ceremonial from './Ceremonial';
import Contact from './Contact';
import Payment from './Payment';
import Personal from './Personal';
import RequiredLabel from './RequiredLabel';

function Registration() {
  const elements = useMemo(
    () => [
      { title: 'personal', element: props => <Personal {...props} /> },
      { title: 'contact', element: props => <Contact {...props} /> },
      { title: 'ceremonial', element: props => <Ceremonial {...props} /> },
      { title: 'payment', element: props => <Payment {...props} /> },
    ],
    []
  );
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({});

  //submit function
  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    console.log('submitting');
    setTimeout(() => setLoading(false), 2000);
  };

  //handle change function
  const handleChange = e => {
    const { name, value, type } = e.target;
    console.log('name and value', name, value, type);

    const newState = { ...state };
    newState[name] = type === 'number' ? Number(value) : value;
    setState(newState);

    console.log(newState);
  };

  return (
    <Center p={{ base: 4, md: 10 }} py={10} minH="100vh">
      <Card w="full" maxW={{ base: 'lg', md: '3xl' }} variant="form">
        <VStack spacing={10}>
          <FormHeading title={elements[categoryIndex].title + ' information'} />
          <chakra.form w="full" onSubmit={handleSubmit}>
            {elements[categoryIndex].element({
              onChange: handleChange,
              state,
            })}

            <Buttons
              categoryIndex={categoryIndex}
              setCategoryIndex={setCategoryIndex}
              targetLength={elements.length - 1}
              loading={loading}
            />
          </chakra.form>
        </VStack>
      </Card>
    </Center>
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
  const [isMd] = useMediaQuery('(min-width: 768px)');
  const { targetLength, categoryIndex, setCategoryIndex, loading } = props;

  return (
    <ButtonGroup w="full" justifyContent="space-between" mt={10}>
      <Button
        type="button"
        leftIcon={<ArrowLeftIcon />}
        disabled={(categoryIndex > 0 ? false : true) || loading}
        onClick={() => setCategoryIndex(state => state - 1)}
      >
        {isMd && 'prev'}
      </Button>
      {categoryIndex === targetLength && (
        <Button type="submit" isLoading={loading} loadingText="submitting">
          submit
        </Button>
      )}
      {categoryIndex !== targetLength && (
        <Button
          type="button"
          rightIcon={<ArrowRightIcon />}
          onClick={() => setCategoryIndex(state => state + 1)}
        >
          {isMd && 'next'}
        </Button>
      )}
    </ButtonGroup>
  );
}

export default withBackground(Registration);
