import {
  HomePageContainer,
  HomePageTitle,
  HomePageText,
  HomePageLink,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <HomePageContainer>
      <HomePageTitle>Welcome to the Phonebook App</HomePageTitle>
      <HomePageText>
        Please{' '}
        <HomePageLink to="/goit-react-hw-08-phonebook/register">
          register
        </HomePageLink>{' '}
        or{' '}
        <HomePageLink to="/goit-react-hw-08-phonebook/login">
          log in
        </HomePageLink>{' '}
        to manage your contacts and keep them organized.
      </HomePageText>
    </HomePageContainer>
  );
};

export default HomePage;
