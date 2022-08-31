import { Icon } from '@chakra-ui/icons';
import {
  Button,
  ButtonGroup,
  HStack,
  SlideFade,
  useDisclosure,
} from '@chakra-ui/react';
import { AiTwotoneSetting } from 'react-icons/ai';

function Simulation(props) {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <HStack spacing={10} p={5} {...props}>
      <Icon
        as={AiTwotoneSetting}
        boxSize={10}
        cursor={'pointer'}
        color={'red.400'}
        onClick={onToggle}
      />

      <SlideFade in={isOpen} offsetX={'-20px'} offsetY={0} unmountOnExit>
        <ButtonGroup spacing={4}>
          <Button colorScheme={'blue'}>Login</Button>
          <Button colorScheme={'red'}>Logout</Button>
          <Button colorScheme={'teal'}>Registered View</Button>
          <Button colorScheme={'teal'}>Dashboard View</Button>
        </ButtonGroup>
      </SlideFade>
    </HStack>
  );
}

export default Simulation;
