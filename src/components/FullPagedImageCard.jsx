import { CloseIcon } from '@chakra-ui/icons';
import { Button, Center, useDisclosure } from '@chakra-ui/react';
import Picture from './Picture';

function FullPagedImageCard({ imagePath, children }) {
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

  return (
    <>
      {children({ handleOpen })}
      {isOpen && <Modal {...imagePath} onClose={handleClose} />}
    </>
  );
}

export default FullPagedImageCard;

function Modal({ sources, src, onClose }) {
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
        top={2}
        right={2}
      >
        <CloseIcon w={8} h={8} />
      </Button>
      <Picture
        sources={sources}
        src={src}
        onClick={e => {
          e.stopPropagation();
        }}
        maxH={'100%'}
      />
    </Center>
  );
}
