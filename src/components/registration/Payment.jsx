import {
  Box,
  chakra,
  Divider,
  Flex,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Text,
  VStack as VerticalStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { fees } from '../../data';
import Asterisk from './Asterisk';

const VStack = chakra(VerticalStack, {
  baseStyle: {
    width: '100%',
  },
});

// these values will be received as props
const guestCount = 2;
const batch = 2014;

function Payment() {
  const ownFee = batch < 2014 ? fees.big : fees.small;
  const guestFee = fees.guest * guestCount;
  const total = ownFee + guestFee;
  const pricing = [
    { title: 'Your own fee', fee: ownFee },
    { title: 'Guest fee', fee: guestFee },
    { title: 'Total', fee: total },
  ];

  const [method, setMethod] = useState('bkash');

  return (
    <VStack maxW={'2xl'} m="auto" spacing={10}>
      <VStack spacing={5} align="flex-start">
        <Heading title="Registration Fee" />
        <VStack>
          {pricing.map(({ title, fee }, index, arr) => (
            <React.Fragment key={fee + index}>
              <HStack w={'full'} justify={'space-between'}>
                <Text>{title}</Text>
                <Text fontWeight={'bold'}>{fee}</Text>
              </HStack>
              {index === arr.length - 2 && <Divider />}
            </React.Fragment>
          ))}
        </VStack>
      </VStack>
      {/*  */}
      <VStack align="flex-start" spacing={5}>
        <Heading title="Registration Payment" isRequired />
        <VStack align="flex-start" spacing={3.5}>
          <RadioGroup name="payment_method" value={method}>
            <HStack spacing={8}>
              {['bkash', 'bank'].map(item => (
                <Radio
                  key={item}
                  value={item}
                  textTransform="capitalize"
                  onChange={e => setMethod(e.target.value)}
                >
                  {item}
                </Radio>
              ))}
            </HStack>
          </RadioGroup>
          <Box
            w="full"
            p={5}
            borderRadius="md"
            bg={method === 'bkash' ? 'brand.500' : 'teal.500'}
            color={'gray.700'}
          >
            <PaymentDetails method={method} amount={total} />
          </Box>
        </VStack>
      </VStack>
    </VStack>
  );
}

function PaymentDetails({ amount, method, onChange }) {
  const bkashDetails = (
    <Text fontSize={'md'} color={'white'} mb={5}>
      Please, pay <chakra.span fontSize={'lg'}>{amount}tk</chakra.span> only via
      send-money.
      <br />
      Bkash merchant number:
      <Text letterSpacing="1px" fontWeight="500" mt={1} color="white">
        01712-059603
      </Text>
    </Text>
  );

  const bankDetails = (
    <Box fontSize={'md'} color={'white'} mb={5}>
      <chakra.span pb={1} borderColor="text" borderBottom="1px">
        Bank details:
      </chakra.span>
      <Flex mt={5} direction={{ base: 'column', md: 'row' }} gap={5}>
        <Box lineHeight="1.8">
          A/C: Name: Subarna jayanti 2022 <br />
          A/C No: 9901184055995 <br />
          Bank Name: Al Arafah Islami Bank Ltd. <br />
          Branch Name: Agent Banking
        </Box>
        <Box lineHeight="1.8">
          Routing Number: 015270609 <br />
          SWIFT Code: ALARBDDH <br />
          Pilgiri Outlet Office Number: 01813616677
        </Box>
      </Flex>
    </Box>
  );

  return (
    <>
      {method === 'bkash' ? bkashDetails : bankDetails}
      <Input placeholder="Enter your Transaction ID" onChange={onChange} />
    </>
  );
}

function Heading({ title, isRequired }) {
  return (
    <Box color={'gray.700'}>
      {title}: {isRequired && <Asterisk />}
      <Divider borderColor="gray.700" />
    </Box>
  );
}

export default Payment;
