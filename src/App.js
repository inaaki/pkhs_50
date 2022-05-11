import { chakra } from '@chakra-ui/react';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
}

export default App;

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <chakra.footer>This is a demo footer</chakra.footer>
    </>
  );
}
