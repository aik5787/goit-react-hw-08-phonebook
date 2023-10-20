import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authSlice';
import { deleteToken } from '../../redux/auth/thunk';

const UserMenu = ({ user }) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
    deleteToken();
  };

  return (
    <div>
      <p>{user.email}</p>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default UserMenu;
