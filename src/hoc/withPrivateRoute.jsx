import PrivateRoute from '../routes/conditional/PrivateRoute';

function withPrivateRoute(Component) {
  return props => (
    <PrivateRoute>
      <Component {...props} />
    </PrivateRoute>
  );
}

export default withPrivateRoute;
