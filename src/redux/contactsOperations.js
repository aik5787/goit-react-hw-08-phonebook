// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
//   const response = await axios.get(
//     'https://6526e0d7917d673fd76d2701.mockapi.io/contacts'
//   );
//   return response.data;
// });

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async newContact => {
//     const response = await axios.post(
//       'https://6526e0d7917d673fd76d2701.mockapi.io/contacts',
//       newContact
//     );
//     return response.data;
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async contactId => {
//     await axios.delete(
//       `https://6526e0d7917d673fd76d2701.mockapi.io/contacts/${contactId}`
//     );
//     return contactId;
//   }
// );

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = token => {
  axios.defaults.headers.common['Authorization'] = token;
};

export const deleteToken = token => {
  delete axios.defaults.headers.common['Authorization'];
};

export const signUp = createAsyncThunk('users/signUp', async newUser => {
  try {
    const response = await axios.post('/users/signup', newUser);
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
});

export const signIn = createAsyncThunk('users/login', async user => {
  try {
    const response = await axios.post('/users/login', user);
    setToken(`Bearer ${response.data.token}`);
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
});

export const getProfile = createAsyncThunk('users/current', async () => {
  try {
    const response = await axios.get('/users/current');
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
});

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    try {
      const response = await axios.post('/contacts', newContact);
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return { error: error.message };
    }
  }
);
