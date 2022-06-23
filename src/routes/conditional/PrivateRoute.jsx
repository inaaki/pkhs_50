import isEmpty from 'lodash/isEmpty';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

function PrivateRoute({ children }) {
  const user = useContext(UserContext);
  const location = useLocation();

  return isEmpty(user) ? (
    <Navigate to={'/login'} replace state={{ from: location.pathname }} />
  ) : (
    <>{children}</>
  );
}

export default PrivateRoute;
