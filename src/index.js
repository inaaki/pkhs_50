import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import UserProvider from './context/userContext';
import Theme from './Theme/_index';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <UserProvider>
      <BrowserRouter>
        <ChakraProvider theme={Theme}>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </UserProvider>
  </StrictMode>
);
