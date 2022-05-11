import { theme } from '@chakra-ui/react';

/* ---- fonts are comma separated --- */
const primary = `Inter, ${theme?.fonts?.body}`;

const Fonts = {
  heading: primary,
  body: primary,
};

export default Fonts;
