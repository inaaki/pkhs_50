import time from '../utils/time';
import {
  Box,
  Center,
  chakra,
  Heading,
  HStack,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import Lighting from './icons/Lighting';

function CountDown() {
  const [month, setMonth] = useState(10);
  const [day, setDay] = useState(10);
  const [hour, setHour] = useState(10);
  const [minute, setMinute] = useState(10);
  const [second, setSecond] = useState(10);

  useEffect(() => {
    let differ = time.getAvailableTime();
    const timeoutId = setInterval(() => {
      const now = moment(differ);
      //
      differ -= 1000;
      //
      setMonth(now.month());
      setDay(now.date());
      setHour(now.hour());
      setMinute(now.minute());
      setSecond(now.second());
    }, 1000);

    return () => {
      clearInterval(timeoutId);
    };
  }, []);

  return (
    <Center py={{ base: 10, md: 20 }}>
      <VStack spacing={{ base: 5, md: 8, lg: 10 }}>
        <Heading size={'xl'} textTransform="capitalize" color={'gray.600'}>
          <Lighting color="brand.500" /> happening in...
          <Lighting color="brand.500" />
        </Heading>
        <HStack spacing={{ base: '3', md: '6' }}>
          {month && <TimeBox title={'month'} number={month} />}
          {day && <TimeBox title={'day'} number={day} />}
          <TimeBox title={'hour'} number={hour} />
          <TimeBox title={'minute'} number={minute} />
          <TimeBox title={'second'} number={second} />
        </HStack>
      </VStack>
    </Center>
  );
}

export default CountDown;

function TimeBox({ title, number }) {
  const title_fontSize = useBreakpointValue({
    base: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
  });
  const time_fontSize = useBreakpointValue({
    base: '3xl',
    sm: '4xl',
    lg: '5xl',
    xl: '6xl',
  });
  const time_size = useBreakpointValue({
    base: '14',
    sm: '16',
    md: '20',
    lg: '24',
    xl: '28',
  });

  return (
    <Box bg="brand.500" borderRadius="md" overflow="hidden" textAlign="center">
      <chakra.span
        bg="gray.600"
        color={'gray.50'}
        d="inline-block"
        py={1}
        textTransform="capitalize"
        width={'full'}
        fontSize={title_fontSize}
      >
        {number > 1 ? title + 's' : title}
      </chakra.span>
      <Center w={time_size} h={time_size} px={{ base: '0', xl: '16' }}>
        <chakra.span
          color="white"
          fontFamily="Poppins"
          letterSpacing="4px"
          lineHeight="1"
          ps="2px"
          fontSize={time_fontSize}
        >
          {number < 10 ? '0' + number : number}
        </chakra.span>
      </Center>
    </Box>
  );
}
