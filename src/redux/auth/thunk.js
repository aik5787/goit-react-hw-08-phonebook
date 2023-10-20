import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

// instance.interceptors.response.use(
//   response => response,
//   error => {
//     console.error('Axios error:', error);
//     return Promise.reject(error);
//   }
// );
const setToken = token => {
  instance.defaults.headers.common['Authorization'] = token;
};

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
    setToken(`Bearer ${response.data.token}`);
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
});

export const getProfile = createAsyncThunk('users/current', async () => {
  try {
    const response = await instance.get('/users/current');
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
});

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const response = await instance.get('/contacts');
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    try {
      const response = await instance.post('/contacts', newContact);
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
      await instance.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return { error: error.message };
    }
  }
);
