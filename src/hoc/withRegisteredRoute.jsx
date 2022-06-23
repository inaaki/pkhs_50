import RegisteredRoute from '../routes/conditional/RegisteredRoute';

function withRegisteredRoute(Component) {
  return props => (
    <RegisteredRoute>
      <Component {...props} />
    </RegisteredRoute>
  );
}

export default withRegisteredRoute;
