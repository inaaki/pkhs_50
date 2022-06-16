import { CloseIcon } from '@chakra-ui/icons';
import { Button, Center, Image, useDisclosure } from '@chakra-ui/react';

function withFullPageImage(Component) {
  return props => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleClose = e => {
      e.stopPropagation();
      document.body.style.overflow = 'auto';
      onClose();
    };
    const handleOpen = e => {
      e.stopPropagation();
      document.body.style.overflow = 'hidden';
      onOpen();
    };

    const { src } = props;
    return (
      <>
        <Component {...props} onOpen={handleOpen} />
        {isOpen && <Modal src={src} onClose={handleClose} />}
      </>
    );
  };
}

export default withFullPageImage;

function Modal({ src, onClose }) {
  return (
    <Center
      bg={'blackAlpha.800'}
      h={'100vh'}
      left={0}
      p={{ base: 2, md: 10, xl: 16 }}
      position={'fixed'}
      top={0}
      w={'full'}
      zIndex="overlay"
      onClick={onClose}
    >
      <Button
        variant={'unstyled'}
        color={'white'}
        position="absolute"
        top={5}
        right={5}
        onClick={onClose}
      >
        <CloseIcon w={8} h={8} />
      </Button>
      <Image src={src} onClick={e => e.stopPropagation()} maxH={'100%'} />
    </Center>
  );
}
