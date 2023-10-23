import { Container, Heading } from '@chakra-ui/react';
import ContactForm from '../../ContactForm/ContactForm';
import ContactFilter from '../../ContactFilter/ContactFilter';
import ContactList from '../../ContactList/ContactList';

const Contacts = () => {
  return (
    <Container maxW="md" pt={100}>
      <Heading as="h1" size="lg" textAlign="center" mb={4}>
        Phonebook
      </Heading>
      <ContactForm />
      <Heading as="h2" size="md" textAlign="center" mt={4} mb={2}>
        Contacts
      </Heading>
      <ContactFilter />
      <ContactList />
    </Container>
  );
};

export default Contacts;

// import ContactForm from '../../ContactForm/ContactForm';
// import ContactFilter from '../../ContactFilter/ContactFilter';
// import ContactList from '../../ContactList/ContactList';
// import { Container, TitleHone, TitleHtwo } from './Contacts.styled';

// const Contacts = () => {
//   return (
//     <Container>
//       <TitleHone>Phonebook</TitleHone>
//       <ContactForm />
//       <TitleHtwo>Contacts</TitleHtwo>
//       <ContactFilter />
//       <ContactList />
//     </Container>
//   );
// };

// export default Contacts;
