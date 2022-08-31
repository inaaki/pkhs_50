import isEmpty from 'lodash/isEmpty';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../../context/userContext';

function PublicRoute({ children }) {
  const user = useUserContext();

  return isEmpty(user) ? <>{children}</> : <Navigate to="/" />;
}

export default PublicRoute;
