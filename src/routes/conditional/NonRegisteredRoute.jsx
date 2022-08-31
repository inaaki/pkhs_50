import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../../context/userContext';

function NonRegisteredRoute({ children }) {
  const user = useUserContext();
  return user?.isRegistered ? (
    <Navigate to={'/dashboard'} replace />
  ) : (
    <>{children}</>
  );
}

export default NonRegisteredRoute;
