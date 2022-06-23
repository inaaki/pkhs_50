import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import FullLoader from './components/loader/FullLoader';

//code splitting
const Home = lazy(() => import('./routes/Home'));
const Login = lazy(() => import('./components/Login'));
const SignUp = lazy(() => import('./components/SignUp'));
const DashBoard = lazy(() => import('./routes/DashBoard'));
const Registration = lazy(() =>
  import('./components/registration/Registration')
);
const NotFound = lazy(() => import('./components/NotFound'));
const PrivateRoute = lazy(() => import('./routes/conditional/PrivateRoute'));
const PublicRoute = lazy(() => import('./routes/conditional/PublicRoute'));
const RegisteredRoute = lazy(() =>
  import('./routes/conditional/RegisteredRoute')
);
const NonRegisteredRoute = lazy(() =>
  import('./routes/conditional/NonRegisteredRoute')
);

function App() {
  return (
    <Layout>
      <Suspense fallback={<FullLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="signup"
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          />
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <RegisteredRoute>
                  <DashBoard />
                </RegisteredRoute>
              </PrivateRoute>
            }
          />
          <Route
            path="registration"
            element={
              <PrivateRoute>
                <NonRegisteredRoute>
                  <Registration />
                </NonRegisteredRoute>
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
