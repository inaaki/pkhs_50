import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

function RegisteredRoute({ children }) {
  const user = useContext(UserContext);

  return user?.isRegistered ? (
    <>{children}</>
  ) : (
    <Navigate to={'/registration'} replace />
  );
}

export default RegisteredRoute;
