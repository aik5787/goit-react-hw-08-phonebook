import { ContactListItem } from '../ContactListItem /ContactListItem';
import { ListContainer } from './ContactList.styled';
import { getIsEditModalOpen } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal';

const ContactList = () => {
  const isOpenModal = useSelector(getIsEditModalOpen);
  return (
    <ListContainer>
      {isOpenModal && <Modal />}
      <ContactListItem />
    </ListContainer>
  );
};

export default ContactList;
