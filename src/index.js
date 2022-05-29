import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Theme from './Theme/_index';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <ChakraProvider theme={Theme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>
);
