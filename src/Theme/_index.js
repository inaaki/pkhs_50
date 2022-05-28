import { extendTheme } from '@chakra-ui/react';
import Components from './components/_index';
import Colors from './foundations/color';
import Foundations from './foundations/_index';

import styles from './styles';

const theme = extendTheme({
  ...styles,
  ...Foundations,
  ...Components,
});

export default theme;
