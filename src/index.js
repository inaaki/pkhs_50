import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import Theme from './Theme';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ChakraProvider theme={Theme}>
    <App />
  </ChakraProvider>
);
