import NonRegisteredRoute from '../routes/conditional/NonRegisteredRoute';

function withNonRegisteredRoute(Component) {
  return props => (
    <NonRegisteredRoute>
      <Component {...props} />
    </NonRegisteredRoute>
  );
}

export default withNonRegisteredRoute;
