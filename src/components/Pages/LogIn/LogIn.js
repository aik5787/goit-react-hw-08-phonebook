import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn, getProfile } from '../../../redux/auth/thunk';
import Notiflix from 'notiflix';

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (formData.email.trim() === '' || formData.password.trim() === '') {
      return;
    }
    const user = {
      email: formData.email,
      password: formData.password,
    };
    dispatch(signIn(user))
      .unwrap()
      .then(response => {
        // console.log(response);
        if (response.token) {
          Notiflix.Notify.success('User is logged in');
        } else {
          Notiflix.Notify.failure('Login error');
        }

        dispatch(getProfile())
          .unwrap()
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.error('GetProfile error:', error);
          });

        navigate('/goit-react-hw-08-phonebook/contacts');
        setFormData({
          email: '',
          password: '',
        });
      })
      .catch(error => {
        // Notiflix.Notify.failure('Log in is unsuccesfull, try again');
        console.error('Registration error:', error);
      });
  };

  return (
    <div>
      <h2>Log in</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LogIn;
