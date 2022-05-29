import React from 'react';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }) {
  //isLoggedIn will be replaced by context
  const isLoggedIn = false;

  return isLoggedIn ? <Navigate to="/" /> : <>{children}</>;
}

export default PublicRoute;
