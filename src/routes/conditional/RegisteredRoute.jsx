import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../../context/userContext';

function RegisteredRoute({ children }) {
  const user = useUserContext();

  return user?.isRegistered ? (
    <>{children}</>
  ) : (
    <Navigate to={'/registration'} replace />
  );
}

export default RegisteredRoute;
