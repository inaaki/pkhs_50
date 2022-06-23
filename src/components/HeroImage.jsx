import { Square, useMediaQuery } from '@chakra-ui/react';
import pic_one from '../assets/images/school/one';
import pic_two from '../assets/images/school/two';
import FullPagedImageCard from './FullPagedImageCard';
import ImageCard from './ImageCard';

function HeroImage() {
  const [isMobile] = useMediaQuery('(hover:none)');

  return (
    <Square
      boxSize={['350px', '400px', '400px', '500px', '600px']}
      position="relative"
      data-group
    >
      <FullPagedImageCard
        imagePath={{
          src: pic_one.full.jpg,
          sources: [
            { srcset: pic_one.full.webp, media: '(min-width: 1280px)' },
            { srcset: pic_one.full.jpg, media: '(min-width: 1280px)' },
            { srcset: pic_one.half.webp, media: '(min-width: 576px)' },
            { srcset: pic_one.half.jpg, media: '(min-width: 576px)' },
            { srcset: pic_one.mini.webp },
            { srcset: pic_one.mini.jpg },
          ],
        }}
      >
        {({ handleOpen }) => (
          <ImageCard
            _groupHover={!isMobile ? { left: '25%' } : ''}
            left="28.5%"
            pos="absolute"
            top="17%"
            transform="rotate(-7.5deg)"
            transformOrigin="left"
            width={{ base: '70%', sm: '75%', lg: '65%' }}
            sources={[
              { srcset: pic_one.mini.webp },
              { srcset: pic_one.mini.jpg },
            ]}
            src={pic_one.mini.jpg}
            onOpen={handleOpen}
          />
        )}
      </FullPagedImageCard>
      {/*  */}
      <FullPagedImageCard
        imagePath={{
          src: pic_two.full.jpg,
          sources: [
            { srcset: pic_two.full.webp, media: '(min-width: 1280px)' },
            { srcset: pic_two.full.jpg, media: '(min-width: 1280px)' },
            { srcset: pic_two.half.webp, media: '(min-width: 576px)' },
            { srcset: pic_two.half.jpg, media: '(min-width: 576px)' },
            { srcset: pic_two.mini.webp },
            { srcset: pic_two.mini.jpg },
          ],
        }}
      >
        {({ handleOpen }) => (
          <ImageCard
            _groupHover={!isMobile ? { left: '10%' } : ''}
            left="6.5%"
            pos="absolute"
            top="52%"
            transform="rotate(7.5deg)"
            transformOrigin="left"
            width={{ base: '60%', sm: '65%', lg: '55%' }}
            sources={[
              { srcset: pic_two.mini.webp },
              { srcset: pic_two.mini.jpg },
            ]}
            src={pic_two.mini.jpg}
            onOpen={handleOpen}
          />
        )}
      </FullPagedImageCard>
    </Square>
  );
}

export default HeroImage;
