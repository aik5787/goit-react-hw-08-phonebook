import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './auth/thunk';

const initialState = {
  items: [],
  isEditModalOpen: false,
  contactForEdit: null,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleFetchFullfilled = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
  state.error = null;
};

const handleAddFullfilled = (state, action) => {
  state.isLoading = false;
  state.items.push(action.payload);
  state.error = null;
};
const handleDeleteFullfilled = (state, action) => {
  state.isLoading = false;
  state.items = state.items.filter(contact => contact.id !== action.payload);
  state.error = null;
};

const handleEditFullfilled = (state, action) => {
  state.isLoading = false;
  state.items = state.items.map(contact => {
    if (contact.id === action.payload.id) {
      return action.payload;
    }
    return contact;
  });

  state.isEditModalOpen = false;
  // state.contactForEdit = null;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    openEditModal: (state, action) => {
      state.isEditModalOpen = true;
      state.contactForEdit = action.payload;
    },
    closeEditModal: state => {
      state.isEditModalOpen = false;
      state.editedContact = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFetchFullfilled)
      .addCase(addContact.fulfilled, handleAddFullfilled)
      .addCase(deleteContact.fulfilled, handleDeleteFullfilled)
      .addCase(editContact.fulfilled, handleEditFullfilled)
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending,
          editContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected,
          editContact.rejected
        ),
        handleRejected
      );
  },
});

export const getContacts = state => state.contacts.items;
export const getLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getIsEditModalOpen = state => state.contacts.isEditModalOpen;
export const getContactForEdit = state => state.contacts.contactForEdit;
export const { openEditModal, closeEditModal } = contactsSlice.actions;
