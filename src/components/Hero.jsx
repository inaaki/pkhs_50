import {
  Box,
  Button,
  Center,
  chakra,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import hero_bg from '../assets/svg/hero_bg.svg';
import HeroImage from './HeroImage';

function Hero() {
  const sectionCss = {
    bgImage: `url(${hero_bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: {
      base: 'auto 410px',
      sm: 'auto 450px',
      md: 'cover',
    },
    backgroundPosition: {
      base: 'bottom -1% center',
      md: 'center right 90%',
    },
  };

  return (
    <chakra.section sx={sectionCss}>
      <Container maxW={'container.2xl'} p="10">
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          minH={{ base: 'auto', '2xl': '36.5vw' }}
          rowGap={10}
        >
          <VStack
            spacing="6"
            align={{ base: 'center', md: 'start' }}
            ps={{ base: 0, md: '14' }}
          >
            <Box
              textAlign={{ base: 'center', md: 'initial' }}
              maxW={{
                base: 'md',
                md: 'xs',
                lg: 'sm',
                xl: 'md',
              }}
            >
              <Heading as={'h1'} variant={'hero-heading'} ms="-0.5">
                Celebrating
                <chakra.span color={'heading'}> 50 Years </chakra.span>
                of lovely connections
              </Heading>
              <Text mt={4} lineHeight="1.5" pe="2">
                We are united to build a memory. You're honourably invited to
                join us. Going to celebrate the best event, cannot be done
                without you!
              </Text>
            </Box>
            <RouterLink to="/registration">
              <Button variant="cta" size="cta">
                Register Now
              </Button>
            </RouterLink>
          </VStack>
          {/* hero image */}
          <Center>
            <HeroImage />
          </Center>
        </SimpleGrid>
      </Container>
    </chakra.section>
  );
}

export default Hero;
