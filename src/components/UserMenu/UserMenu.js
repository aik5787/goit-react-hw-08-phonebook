import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authSlice';
import { deleteToken } from '../../redux/auth/thunk';
import { Button, Box, Text } from '@chakra-ui/react';

const UserMenu = ({ user }) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
    deleteToken();
  };

  return (
    <Box>
      <Text fontSize="lg">{user.email}</Text>
      <Button onClick={handleLogOut}>Logout</Button>
    </Box>
  );
};

export default UserMenu;
