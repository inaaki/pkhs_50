import isEmpty from 'lodash/isEmpty';
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';

function PublicRoute({ children }) {
  const user = useContext(UserContext);

  return isEmpty(user) ? <>{children}</> : <Navigate to="/" />;
}

export default PublicRoute;
