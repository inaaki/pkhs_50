import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Theme from './theme/_index';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ChakraProvider theme={Theme}>
    <App />
  </ChakraProvider>
);
