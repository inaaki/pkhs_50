import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Registration from './components/registration/Registration';
import SignUp from './components/SignUp';
import NonRegisteredRoute from './routes/conditional/NonRegisteredRoute';
import PrivateRoute from './routes/conditional/PrivateRoute';
import PublicRoute from './routes/conditional/PublicRoute';
import RegisteredRoute from './routes/conditional/RegisteredRoute';
import DashBoard from './routes/DashBoard';
import Home from './routes/Home';

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
