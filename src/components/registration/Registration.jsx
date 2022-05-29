import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import {
  Button,
  ButtonGroup,
  Center,
  chakra,
  Divider,
  Heading,
  Text,
  useMediaQuery,
  useToast,
  VStack,
} from '@chakra-ui/react';
import React, { useMemo, useState } from 'react';
import { reach } from 'yup';
import withBackground from '../../hoc/withBackground';
import { submitData } from '../../utils/fakeApi';
import { cloneDeepObject, nestedToSingleObject } from '../../utils/object';
import { registrationSchema, validation } from '../../validations';
import Card from '../Card';
import DisplayData from '../DisplayData';
import Ceremonial from './Ceremonial';
import Contact from './Contact';
import Payment from './Payment';
import Personal from './Personal';
import RequiredLabel from './RequiredLabel';

const initialState = {
  personal: {
    englishName: '',
    banglaName: '',
    father: '',
    mother: '',
    spouse: '',
    nid: '',
    religion: '',
    gender: '',
    blood: '',
    birthDate: '',
  },
  contact: {
    village: '',
    postOffice: '',
    upazila: '',
    district: '',
    mobile: '',
    emergencyMobile: '',
    email: '',
  },
  ceremonial: {
    batch: '',
    guest: '',
    size: '',
    qualification: '',
    institute: '',
    others: '',
  },
  payment: {
    paymentMethod: 'bkash',
    paymentId: '',
  },
};

function Registration() {
  const elements = useMemo(
    () => [
      { title: 'personal', element: props => <Personal {...props} /> },
      { title: 'contact', element: props => <Contact {...props} /> },
      { title: 'ceremonial', element: props => <Ceremonial {...props} /> },
      { title: 'payment', element: props => <Payment {...props} /> },
      { title: 'review' },
    ],
    []
  );

  const [state, setState] = useState(cloneDeepObject(initialState));
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const toast = useToast({
    position: 'bottom',
    isClosable: true,
    duration: 5000,
  });
  const currentPart = elements[categoryIndex].title;

  //submit function
  const handleSubmit = async e => {
    e.preventDefault();

    setLoading(true);
    try {
      await submitData(true);
      toast({
        status: 'success',
        title: 'Registration successful',
        description: "You've successfully submitted your data",
        variant: 'solid',
      });
      setCategoryIndex(0);
      setState(initialState);
    } catch (e) {
      toast({
        status: 'error',
        title: 'Error occurred',
        description: 'Sorry, we were unable to submit your data',
        variant: 'solid',
      });
    } finally {
      setLoading(false);
    }
  };

  //handle change function
  const handleChange = e => {
    if (!state[currentPart]) {
      state[currentPart] = {};
    }
    let { name, value, type } = e.target;
    if (value.includes('  ')) {
      value = value.replace(/\s\s+/g, ' ');
    }
    const newState = { ...state };
    newState[currentPart][name] = value;
    setState(newState);
  };

  const handleNext = () => {
    validation(registrationSchema[currentPart], state[currentPart])
      .then(r => {
        setError({});
        setCategoryIndex(state => state + 1);
      })
      .catch(e => {
        setError(e);
      });
  };

  const handleBlur = e => {
    const { name } = e.target;
    reach(registrationSchema[currentPart], name)
      .validate(state[currentPart][name])
      .then(r => {
        setError({ ...error, [name]: '' });
      })
      .catch(e => {
        setError({ ...error, [name]: e.message });
      });
  };

  return (
    <Center p={{ base: 4, md: 10 }} py={10} minH="100vh">
      <Card w="full" maxW={{ base: 'lg', md: '3xl' }} variant="form">
        <chakra.form w="full" onSubmit={handleSubmit}>
          <FormHeading title={elements[categoryIndex].title} />

          {elements[categoryIndex].title === 'review' ? (
            <DisplayData data={nestedToSingleObject(state)} />
          ) : (
            elements[categoryIndex].element({
              currentPart,
              error,
              state,
              onChange: handleChange,
              onBlur: handleBlur,
            })
          )}

          <Buttons
            categoryIndex={categoryIndex}
            setCategoryIndex={setCategoryIndex}
            targetLength={elements.length - 1}
            loading={loading}
            handleNext={handleNext}
          />
        </chakra.form>
      </Card>
    </Center>
  );
}

function FormHeading({ title }) {
  return (
    <VStack w={'full'} align="flex-start" mb={10}>
      <VStack align="flex-start">
        <Heading
          as={'h3'}
          variant="form-heading"
          fontSize={{ base: '2xl', sm: '4xl' }}
          // textAlign='start'
        >
          {title + ' information'}
        </Heading>
        {title === 'review' ? (
          <Text>
            &#40;Please, review before submit. You can always go back for
            correction&#41;
          </Text>
        ) : (
          <RequiredLabel />
        )}
      </VStack>
      <Divider />
    </VStack>
  );
}

function Buttons(props) {
  const [isMd] = useMediaQuery('(min-width: 768px)');
  const { targetLength, categoryIndex, setCategoryIndex, loading, handleNext } =
    props;

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

      {categoryIndex !== targetLength && (
        <Button
          type="button"
          rightIcon={<ArrowRightIcon />}
          onClick={handleNext}
        >
          {isMd && 'next'}
        </Button>
      )}

      {categoryIndex === targetLength && (
        <Button type="submit" isLoading={loading} loadingText="submitting">
          submit
        </Button>
      )}
    </ButtonGroup>
  );
}

export default withBackground(Registration);
