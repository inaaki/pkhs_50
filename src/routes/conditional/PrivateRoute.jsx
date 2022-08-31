import isEmpty from 'lodash/isEmpty';
import { Navigate, useLocation } from 'react-router-dom';
import { useUserContext } from '../../context/userContext';

function PrivateRoute({ children }) {
  const { user } = useUserContext();
  const location = useLocation();

  return isEmpty(user) ? (
    <Navigate to={'/login'} replace state={{ from: location.pathname }} />
  ) : (
    <>{children}</>
  );
}

export default PrivateRoute;
