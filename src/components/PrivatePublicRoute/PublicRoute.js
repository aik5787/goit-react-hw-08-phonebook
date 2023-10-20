import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { accessToken } from '../../redux/auth/authSlice';

const PublicRoute = ({ children }) => {
  const token = useSelector(accessToken);
  const { state } = useLocation();
  return !token ? (
    children
  ) : (
    <Navigate to={state ? state : '/goit-react-hw-08-phonebook/contacts'} />
  );
};
export default PublicRoute;
