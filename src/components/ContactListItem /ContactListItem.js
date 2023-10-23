import {
  Box,
  Text,
  Button,
  Center,
  Flex,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  SimpleGrid,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContacts,
  getLoading,
  getError,
  openEditModal,
} from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import { deleteContact, fetchContacts } from 'redux/auth/thunk';
import { useEffect } from 'react';

import { accessToken } from '../../redux/auth/authSlice';

const ContactListItem = () => {
  const token = useSelector(accessToken);
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  useEffect(() => {
    if (token) {
      dispatch(fetchContacts());
    }
  }, [dispatch, token]);

  const getFilteredContacts = () => {
    if (!contacts || !Array.isArray(contacts)) return [];
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredContacts = getFilteredContacts();

  if (loading) {
    return (
      <Center h="60vh">
        <Spinner size="xl" thickness="4px" speed="0.65s" color="teal.500" />
      </Center>
    );
  }

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        <Box flex="1">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription display="block">{error}</AlertDescription>
        </Box>
      </Alert>
    );
  }

  if (contacts.length === 0) {
    return (
      <Text fontSize="lg" mt={4}>
        No contacts to display.
      </Text>
    );
  }

  return (
    <SimpleGrid columns={1} spacing={4}>
      {filteredContacts.map(contact => (
        <Box
          key={contact.id}
          border="1px"
          borderColor="primary.300"
          borderRadius="md"
          p={4}
        >
          <Flex justify="space-between" align="center">
            <Text fontWeight="bold">
              {contact.name}: {contact.number}
            </Text>
            <Flex>
              <Button onClick={() => dispatch(openEditModal(contact))} mr={2}>
                Edit
              </Button>
              <Button onClick={() => dispatch(deleteContact(contact.id))}>
                Delete
              </Button>
            </Flex>
          </Flex>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default ContactListItem;

// import { useDispatch, useSelector } from 'react-redux';
// import {
//   getContacts,
//   getLoading,
//   getError,
//   openEditModal,
// } from 'redux/contactsSlice';
// import { getFilter } from 'redux/filterSlice';
// import { deleteContact, fetchContacts } from 'redux/auth/thunk';
// import { useEffect } from 'react';

// import {
//   ListItem,
//   ListItemWrapper,
//   ListItemInfo,
//   ListItemButton,
// } from './ContactListItem.styled';

// import { accessToken } from '../../redux/auth/authSlice';

// const ContactListItem = () => {
//   const token = useSelector(accessToken);
//   const contacts = useSelector(getContacts);
//   const filter = useSelector(getFilter);
//   const dispatch = useDispatch();
//   const loading = useSelector(getLoading);
//   const error = useSelector(getError);

//   console.log(contacts);
//   useEffect(() => {
//     if (token) {
//       dispatch(fetchContacts());
//     }
//   }, [dispatch, token]);

//   const getFilteredContacts = () => {
//     if (!contacts || !Array.isArray(contacts)) return [];
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };
//   const filteredContacts = getFilteredContacts();

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   if (error) {
//     return <h2>{error}</h2>;
//   }

//   if (contacts.length > 0) {
//     return filteredContacts.map(contact => (
//       <ListItem key={contact.id}>
//         <ListItemWrapper>
//           <ListItemInfo>
//             {contact.name}: {contact.number}
//           </ListItemInfo>
//           <ListItemButton onClick={() => dispatch(openEditModal(contact))}>
//             Edit
//           </ListItemButton>
//           <ListItemButton onClick={() => dispatch(deleteContact(contact.id))}>
//             Delete
//           </ListItemButton>
//         </ListItemWrapper>
//       </ListItem>
//     ));
//   }
// };

// export default ContactListItem;
