import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { addContact } from 'redux/auth/thunk';
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const newContact = { name: name, number: number };

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '' || number.trim() === '') return;

    const isExistingContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExistingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  return (
    <Container maxW="md">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel htmlFor="nameInput">Name</FormLabel>
          <Input
            id="nameInput"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleNameChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="numberInput">Number</FormLabel>
          <Input
            id="numberInput"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleNumberChange}
          />
        </FormControl>
        <Button mt={4} type="submit" disabled={!name || !number}>
          Add contact
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;

// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getContacts } from 'redux/contactsSlice';
// import { addContact } from 'redux/auth/thunk';
// // import { nanoid } from 'nanoid';
// import {
//   ContactFormContainer,
//   FormLabel,
//   FormInput,
//   FormButton,
// } from './ContactForm.styled';

// const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const contacts = useSelector(getContacts);
//   const dispatch = useDispatch();

//   const handleNameChange = event => {
//     setName(event.target.value);
//   };

//   const handleNumberChange = event => {
//     setNumber(event.target.value);
//   };
//   const newContact = { name: name, number: number };

//   const handleSubmit = event => {
//     event.preventDefault();

//     if (name.trim() === '' || number.trim() === '') return;

//     const isExistingContact = contacts.some(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );

//     if (isExistingContact) {
//       alert(`${name} is already in contacts.`);
//       return;
//     }
//     dispatch(addContact(newContact));
//     setName('');
//     setNumber('');
//   };

//   return (
//     <ContactFormContainer onSubmit={handleSubmit}>
//       <FormLabel htmlFor="nameInput">Name</FormLabel>
//       <FormInput
//         id="nameInput"
//         type="text"
//         name="name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//         value={name}
//         onChange={handleNameChange}
//       />
//       <FormLabel htmlFor="numberInput">Number</FormLabel>
//       <FormInput
//         id="numberInput"
//         type="tel"
//         name="number"
//         pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         required
//         value={number}
//         onChange={handleNumberChange}
//       />
//       <FormButton type="submit" disabled={!name || !number}>
//         Add contact
//       </FormButton>
//     </ContactFormContainer>
//   );
// };

// export default ContactForm;
