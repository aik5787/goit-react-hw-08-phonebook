import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../../redux/auth/thunk';
import Notiflix from 'notiflix';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
} from '@chakra-ui/react';

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
        if (response.token) {
          Notiflix.Notify.success('User is logged in');
        } else {
          Notiflix.Notify.failure('Login error');
        }

        navigate('/goit-react-hw-08-phonebook/contacts');
        setFormData({
          email: '',
          password: '',
        });
      })
      .catch(error => {
        console.error('Registration error:', error);
      });
  };

  return (
    <Box maxW="400px" mx="auto" p="4" pt={100}>
      <Heading as="h2" size="lg" mb="4">
        Log in
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mb="4">
          <FormLabel>Email:</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Password:</FormLabel>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal">
          Log in
        </Button>
      </form>
    </Box>
  );
};

export default LogIn;

// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { signIn } from '../../../redux/auth/thunk';
// import Notiflix from 'notiflix';

// const LogIn = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (formData.email.trim() === '' || formData.password.trim() === '') {
//       return;
//     }
//     const user = {
//       email: formData.email,
//       password: formData.password,
//     };
//     dispatch(signIn(user))
//       .unwrap()
//       .then(response => {
//         if (response.token) {
//           Notiflix.Notify.success('User is logged in');
//         } else {
//           Notiflix.Notify.failure('Login error');
//         }

//         navigate('/goit-react-hw-08-phonebook/contacts');
//         setFormData({
//           email: '',
//           password: '',
//         });
//       })
//       .catch(error => {
//         console.error('Registration error:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Log in</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <button type="submit">Log in</button>
//       </form>
//     </div>
//   );
// };

// export default LogIn;
