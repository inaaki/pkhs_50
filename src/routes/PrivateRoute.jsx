import isEmpty from 'lodash/isEmpty';
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';

function PrivateRoute({ children }) {
  const user = useContext(UserContext);

  return isEmpty(user) ? <Navigate to={'/login'} /> : <>{children}</>;
}

export default PrivateRoute;
