import { Routes, Route } from 'react-router-dom';
import React, { lazy } from 'react';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const Registration = lazy(() => import('./Pages/Registration//Registration'));
const LogIn = lazy(() => import('./Pages/LogIn/LogIn'));
const Contacts = lazy(() => import('./Pages/Contacts/Contacts'));
const PrivateRoute = lazy(() => import('./PrivatePublicRoute/PrivateRoute'));
const PublicRoute = lazy(() => import('./PrivatePublicRoute/PublicRoute'));
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { ContactFilter } from './ContactFilter/ContactFilter';
// import { Container, TitleHone, TitleHtwo } from './App.styled';

export const App = () => {
  return (
    <Routes>
      <Route path="/goit-react-hw-08-phonebook/" element={<Layout />}>
        <Route index element={<HomePage />} />
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
    </Routes>
    // <Container>
    //   <TitleHone>Phonebook</TitleHone>
    //   <ContactForm />
    //   <TitleHtwo>Contacts</TitleHtwo>
    //   <ContactFilter />
    //   <ContactList />
    // </Container>
  );
};
