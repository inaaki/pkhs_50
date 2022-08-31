import { Icon } from '@chakra-ui/icons';
import {
  Button,
  ButtonGroup,
  HStack,
  SlideFade,
  useDisclosure,
} from '@chakra-ui/react';
import isEmpty from 'lodash/isEmpty';
import { AiTwotoneSetting } from 'react-icons/ai';
import { useUserContext } from '../context/userContext';

function Simulation(props) {
  const { isOpen, onToggle } = useDisclosure();
  const { onDashboard, onLogout, onRegister, onLogin, user } = useUserContext();

  const hasUser = !isEmpty(user);
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
          {!hasUser && (
            <Button colorScheme={'blue'} onClick={onLogin}>
              Login
            </Button>
          )}
          {hasUser && (
            <Button colorScheme={'red'} onClick={onLogout}>
              Logout
            </Button>
          )}
          {user && !user?.isRegistered && (
            <Button colorScheme={'teal'} onClick={onDashboard}>
              View Dashboard UI
            </Button>
          )}
          {user && user?.isRegistered && (
            <Button colorScheme={'teal'} onClick={onRegister}>
              View Register UI
            </Button>
          )}
        </ButtonGroup>
      </SlideFade>
    </HStack>
  );
}

export default Simulation;
