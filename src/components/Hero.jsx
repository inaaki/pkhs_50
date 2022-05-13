import {
  Box,
  Button,
  Center,
  chakra,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Square,
  Text,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import school_1 from '../assets/images/school_1.jpeg';
import school_2 from '../assets/images/school_2.jpeg';
import hero_bg from '../assets/svg/hero_bg.svg';

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
    <chakra.section sx={sectionCss} mt="66.5px">
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
                <chakra.span color={'gray.600'}> 50 Years </chakra.span>
                of lovely connections
              </Heading>
              <Text mt={4} lineHeight="1.5" pe="2">
                We are united to build a memory. You're honourably invited to
                join us We are united to build a memory. You're honourably
                invited to join us We are united to build a memory.
              </Text>
            </Box>
            <Button
              variant="cta"
              size="cta"
              onClick={() => console.log('routing to register page')}
            >
              Register Now
            </Button>
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

function HeroImage() {
  const [isMobile] = useMediaQuery('(hover:none)');
  console.log(isMobile);

  return (
    <Square
      boxSize={['350px', '400px', '400px', '500px', '600px']}
      position="relative"
      data-group
    >
      <ImageCard
        _groupHover={!isMobile ? { left: '25%' } : ''}
        left="28.5%"
        pos="absolute"
        src={school_1}
        top="17%"
        transform="rotate(-7.5deg)"
        transformOrigin="left"
        width={{ base: '70%', sm: '75%', lg: '65%' }}
      />
      <ImageCard
        _groupHover={!isMobile ? { left: '10%' } : ''}
        left="6.5%"
        pos="absolute"
        src={school_2}
        top="51%"
        transform="rotate(7.5deg)"
        transformOrigin="left"
        transition="all 250ms cubic-bezier(0.4, 0, 0.2, 1) 50ms"
        width={{ base: '60%', sm: '65%', lg: '55%' }}
      />
    </Square>
  );
}

export default Hero;

function ImageCard({
  _active,
  _hover,
  cursor,
  overflow,
  src,
  srcset,
  transition,
  ...props
}) {
  const baseStyle = {
    borderRadius: 'md',
    border: '1px',
    borderColor: 'blackAlpha.300',
    boxShadow: 'lg',
    cursor: cursor || 'pointer',
    overflow: overflow || 'hidden',
    p: '2',
    backgroundColor: 'gray.50',
    transition: transition || 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 50ms',
  };

  const hoverStyle = {
    borderColor: 'brand.500',
    ..._hover,
  };
  const activeStyle = {
    transform: 'scale(1.05)',
    ..._active,
  };

  return (
    <Box sx={baseStyle} _hover={hoverStyle} _active={activeStyle} {...props}>
      <Image borderRadius={baseStyle.borderRadius} src={src} srcSet={srcset} />
    </Box>
  );
}
