import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { accessToken } from '../../redux/auth/authSlice';

const PrivateRoute = ({ children }) => {
  const token = useSelector(accessToken);
  const location = useLocation();
  return token ? (
    children
  ) : (
    <Navigate to="/goit-react-hw-08-phonebook/login" state={location} />
  );
};
export default PrivateRoute;
