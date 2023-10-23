import { Box, Heading, Text } from '@chakra-ui/react';
import { HomePageLink } from './HomePage.styled';

const HomePage = () => {
  return (
    <Box
      padding="50px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      mt={10}
      pt={100}
    >
      <Heading as="h1" size="2xl" color="#333" mb={4}>
        Welcome to the Phonebook App
      </Heading>
      <Text fontSize="xl" color="#333">
        Please{' '}
        <HomePageLink to="/goit-react-hw-08-phonebook/register">
          Register
        </HomePageLink>{' '}
        or{' '}
        <HomePageLink to="/goit-react-hw-08-phonebook/login">
          Log in
        </HomePageLink>{' '}
        to manage your contacts and keep them organized.
      </Text>
    </Box>
  );
};

export default HomePage;

// import {
//   HomePageContainer,
//   HomePageTitle,
//   HomePageText,
//   HomePageLink,
// } from './HomePage.styled';

// const HomePage = () => {
//   return (
//     <HomePageContainer>
//       <HomePageTitle>Welcome to the Phonebook App</HomePageTitle>
//       <HomePageText>
//         Please{' '}
//         <HomePageLink to="/goit-react-hw-08-phonebook/register">
//           register
//         </HomePageLink>{' '}
//         or{' '}
//         <HomePageLink to="/goit-react-hw-08-phonebook/login">
//           log in
//         </HomePageLink>{' '}
//         to manage your contacts and keep them organized.
//       </HomePageText>
//     </HomePageContainer>
//   );
// };

// export default HomePage;
