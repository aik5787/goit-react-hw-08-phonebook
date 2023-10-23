import { Routes, Route } from 'react-router-dom';
import React, { lazy } from 'react';
import Layout from './Layout/Layout';
import { Navigate } from 'react-router-dom';
// import { useEffect } from 'react';
// import { getProfile } from '../redux/auth/thunk';
// import { useDispatch, useSelector } from 'react-redux';
// import { accessToken } from '../redux/auth/authSlice';

import { ChakraProvider } from '@chakra-ui/react';

const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const Registration = lazy(() => import('./Pages/Registration//Registration'));
const LogIn = lazy(() => import('./Pages/LogIn/LogIn'));
const Contacts = lazy(() => import('./Pages/Contacts/Contacts'));

const PrivateRoute = lazy(() => import('./PrivatePublicRoute/PrivateRoute'));
const PublicRoute = lazy(() => import('./PrivatePublicRoute/PublicRoute'));

export const App = () => {
  // const dispatch = useDispatch();
  // const token = useSelector(accessToken);

  // useEffect(() => {
  //   if (token) {
  //     dispatch(getProfile());
  //   }
  // }, [dispatch, token]);
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/goit-react-hw-08-phonebook/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <Registration />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <LogIn />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="*"
          element={<Navigate to="/goit-react-hw-08-phonebook/" replace />}
        />
      </Routes>
    </ChakraProvider>
  );
};
