import ContactForm from '../../ContactForm/ContactForm';
import ContactFilter from '../../ContactFilter/ContactFilter';
import ContactList from '../../ContactList/ContactList';
import { Container, TitleHone, TitleHtwo } from './Contacts.styled';

const Contacts = () => {
  return (
    <Container>
      <TitleHone>Phonebook</TitleHone>
      <ContactForm />
      <TitleHtwo>Contacts</TitleHtwo>
      <ContactFilter />
      <ContactList />
    </Container>
  );
};

export default Contacts;
