import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../../redux/auth/thunk';
import Notiflix from 'notiflix';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Box,
} from '@chakra-ui/react';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
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
    if (
      formData.name.trim() === '' ||
      formData.email.trim() === '' ||
      formData.password.trim() === ''
    ) {
      return;
    }
    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };
    dispatch(signUp(newUser))
      .unwrap()
      .then(response => {
        console.log(response);
        if (response.token) {
          Notiflix.Notify.success('User is successfully registered');
          navigate('/goit-react-hw-08-phonebook/login');
        } else {
          Notiflix.Notify.failure('Registration is unsuccessful');
          navigate('/goit-react-hw-08-phonebook/register');
        }

        setFormData({
          name: '',
          email: '',
          password: '',
        });
      })
      .catch(error => {
        Notiflix.Notify.failure('Registration is unsuccessful');
        console.error('Registration error:', error);
      });
  };

  return (
    <Box maxW="400px" mx="auto" p="4" pt={100}>
      <Heading as="h2" size="lg" mb="4">
        Registration
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" mt="4">
          Sign up
        </Button>
      </form>
    </Box>
  );
};

export default Registration;

// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { signUp } from '../../../redux/auth/thunk';
// import Notiflix from 'notiflix';

// const Registration = () => {
//   const [formData, setFormData] = useState({
//     name: '',
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
//     if (
//       formData.name.trim() === '' ||
//       formData.email.trim() === '' ||
//       formData.password.trim() === ''
//     ) {
//       return;
//     }
//     const newUser = {
//       name: formData.name,
//       email: formData.email,
//       password: formData.password,
//     };
//     console.log(newUser);
//     dispatch(signUp(newUser))
//       .unwrap()
//       .then(response => {
//         console.log(response);
//         if (response.token) {
//           Notiflix.Notify.success('User is successfully registered');
//           navigate('/goit-react-hw-08-phonebook/login');
//         } else {
//           Notiflix.Notify.failure('Registration is unsuccessful');
//           navigate('/goit-react-hw-08-phonebook/register');
//         }

//         setFormData({
//           name: '',
//           email: '',
//           password: '',
//         });
//       })
//       .catch(error => {
//         Notiflix.Notify.failure('Registration is unsuccesfull');
//         console.error('Registration error:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Registration</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             // pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             // pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
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
//             // pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <button type="submit">Sign up</button>
//       </form>
//     </div>
//   );
// };

// export default Registration;
