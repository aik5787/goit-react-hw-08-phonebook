import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import ContactListItem from '../ContactListItem /ContactListItem';
import EditContactModal from '../Modal/Modal';
import { getIsEditModalOpen } from '../../redux/contactsSlice';

const ContactList = () => {
  const isOpenModal = useSelector(getIsEditModalOpen);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <SimpleGrid columns={1} spacing={4}>
      {isOpenModal && <EditContactModal isOpen={isOpen} onClose={onClose} />}
      <ContactListItem onOpenModal={onOpen} />
    </SimpleGrid>
  );
};

export default ContactList;

// import { ContactListItem } from '../ContactListItem /ContactListItem';
// import { ListContainer } from './ContactList.styled';
// import { getIsEditModalOpen } from '../../redux/contactsSlice';
// import { useSelector } from 'react-redux';
// import Modal from '../Modal/Modal';

// const ContactList = () => {
//   const isOpenModal = useSelector(getIsEditModalOpen);
//   return (
//     <ListContainer>
//       {isOpenModal && <Modal />}
//       <ContactListItem />
//     </ListContainer>
//   );
// };

// export default ContactList;
