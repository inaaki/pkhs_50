import React from 'react';
import Hero from './components/Hero';
import Nav from './components/Nav';

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
      <Nav />
      {children}
    </>
  );
}
