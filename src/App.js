import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './routes/Home';
import PublicRoute from './routes/PublicRoute';

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
      </Routes>
    </Layout>
  );
}

export default App;
