import { Square, useMediaQuery } from '@chakra-ui/react';
import school_1 from '../assets/images/school_1.jpeg';
import school_2 from '../assets/images/school_2.jpeg';
import withFullPageImage from '../hoc/withFullPageImage';
import ImageCard from './ImageCard';

function HeroImage() {
  const [isMobile] = useMediaQuery('(hover:none)');

  const FullPagedImageCard = withFullPageImage(ImageCard);

  return (
    <Square
      boxSize={['350px', '400px', '400px', '500px', '600px']}
      position="relative"
      data-group
    >
      <FullPagedImageCard
        _groupHover={!isMobile ? { left: '25%' } : ''}
        left="28.5%"
        pos="absolute"
        src={school_1}
        top="17%"
        transform="rotate(-7.5deg)"
        transformOrigin="left"
        width={{ base: '70%', sm: '75%', lg: '65%' }}
      />
      <FullPagedImageCard
        _groupHover={!isMobile ? { left: '10%' } : ''}
        left="6.5%"
        pos="absolute"
        src={school_2}
        top="52%"
        transform="rotate(7.5deg)"
        transformOrigin="left"
        transition="all 250ms cubic-bezier(0.4, 0, 0.2, 1) 50ms"
        width={{ base: '60%', sm: '65%', lg: '55%' }}
      />
    </Square>
  );
}

export default HeroImage;
