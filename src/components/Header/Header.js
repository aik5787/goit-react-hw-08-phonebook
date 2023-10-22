import { Headercontainer, StyledNavLink, Home, RegLog } from './Header.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUserPlus,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { accessToken, currentUser } from '../../redux/auth/authSlice';

const Header = () => {
  const token = useSelector(accessToken);
  const user = useSelector(currentUser);

  return (
    <Headercontainer>
      <Home>
        <StyledNavLink to="/goit-react-hw-08-phonebook/">
          <FontAwesomeIcon icon={faHome} /> Home
        </StyledNavLink>
      </Home>

      {token && user ? (
        <RegLog>
          <UserMenu user={user} />
        </RegLog>
      ) : (
        <RegLog>
          <StyledNavLink to="/goit-react-hw-08-phonebook/register">
            <FontAwesomeIcon icon={faUserPlus} /> Registration
          </StyledNavLink>
          <StyledNavLink to="/goit-react-hw-08-phonebook/login">
            <FontAwesomeIcon icon={faSignInAlt} /> Login
          </StyledNavLink>
        </RegLog>
      )}
    </Headercontainer>
  );
};
export default Header;
