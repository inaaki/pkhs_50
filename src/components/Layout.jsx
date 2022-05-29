import React from 'react';
import Nav from './Nav';

function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
export default Layout;
