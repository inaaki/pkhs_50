import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import FullLoader from './components/loader/FullLoader';

//code splitting
const Home = lazy(() => import('./routes/Home'));
const Contact = lazy(() => import('./routes/Contact'));
const Login = lazy(() => import('./components/Login'));
const SignUp = lazy(() => import('./components/SignUp'));
const DashBoard = lazy(() => import('./routes/DashBoard'));
const Registration = lazy(() =>
  import('./components/registration/Registration')
);
const NotFound = lazy(() => import('./components/NotFound'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<FullLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="contact" element={<Contact />} />

          <Route path="login" element={<Login />} />

          <Route path="signup" element={<SignUp />} />

          <Route path="dashboard" element={<DashBoard />} />

          <Route path="registration" element={<Registration />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
