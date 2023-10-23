import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { Spinner, Center } from '@chakra-ui/react';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <Center h="60vh">
            <Spinner size="xl" thickness="4px" speed="0.65s" color="teal.500" />
          </Center>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
