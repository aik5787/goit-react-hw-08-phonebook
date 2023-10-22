import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getIsEditModalOpen,
  getContactForEdit,
  closeEditModal,
} from 'redux/contactsSlice';
import { editContact } from '../../redux/auth/thunk';
import { Overlay, ModalStyle } from './Modal.styled';

const Modal = () => {
  const isOpenModal = useSelector(getIsEditModalOpen);
  const contactForEdit = useSelector(getContactForEdit);
  //   const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState(contactForEdit.name);
  const [number, setNumber] = useState(contactForEdit.number);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape' && isOpenModal) {
        dispatch(closeEditModal());
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpenModal, dispatch]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      dispatch(closeEditModal());
    }
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const editedContact = { name: name, number: number };

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '' || number.trim() === '') return;

    // const isExistingContact = contacts.some(
    //   contact => contact.name.toLowerCase() === name.toLowerCase()
    // );

    // if (isExistingContact) {
    //   alert(`${name} is already in contacts.`);
    //   return;
    // }
    dispatch(editContact({ contactId: contactForEdit.id, editedContact }));
    dispatch(closeEditModal());
  };

  return (
    isOpenModal &&
    contactForEdit && (
      <Overlay onClick={handleBackdropClick}>
        <ModalStyle>
          <h2>Edit Contact</h2>
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name || ''}
                onChange={handleNameChange}
              />
            </div>

            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={number || ''}
                onChange={handleNumberChange}
              />
            </div>
            <button type="button" onClick={handleSubmit}>
              Save
            </button>
          </form>
        </ModalStyle>
      </Overlay>
    )
  );
};

export default Modal;
