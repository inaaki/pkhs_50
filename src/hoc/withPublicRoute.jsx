import PublicRoute from '../routes/conditional/PublicRoute';

function withPublicRoute(Component) {
  return props => (
    <PublicRoute>
      <Component {...props} />
    </PublicRoute>
  );
}

export default withPublicRoute;
