import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

// const setToken = token => {
//   instance.defaults.headers.common['Authorization'] = token;
// };

export const deleteToken = token => {
  delete instance.defaults.headers.common['Authorization'];
};

export const signUp = createAsyncThunk('users/signUp', async newUser => {
  try {
    const response = await instance.post('/users/signup', newUser);
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
});

export const signIn = createAsyncThunk('users/login', async user => {
  try {
    const response = await instance.post('/users/login', user);
    // setToken(`Bearer ${response.token}`);
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
});

export const getProfile = createAsyncThunk(
  'users/current',
  async (args, { getState }) => {
    try {
      const state = getState();
      const { token } = state.auth;
      const response = await instance.get('/users/current', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (args, { getState }) => {
    try {
      const state = getState();
      const { token } = state.auth;
      const response = await instance.get('/contacts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { getState }) => {
    try {
      const state = getState();
      const { token } = state.auth;
      const response = await instance.post('/contacts', newContact, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { getState }) => {
    try {
      const state = getState();
      const { token } = state.auth;
      await instance.delete(`/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return contactId;
    } catch (error) {
      return { error: error.message };
    }
  }
);
