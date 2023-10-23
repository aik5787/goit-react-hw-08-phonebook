import { Box, Input, FormControl, FormLabel } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter } from 'redux/filterSlice';

const ContactFilter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Box mb={8}>
      <FormControl>
        <FormLabel htmlFor="nameFilterInput">Find contacts by name</FormLabel>
        <Input
          id="nameFilterInput"
          type="text"
          value={filter}
          onChange={handleFilterChange}
        />
      </FormControl>
    </Box>
  );
};

export default ContactFilter;

// import { useDispatch, useSelector } from 'react-redux';
// import { setFilter, getFilter } from 'redux/filterSlice';
// import {
//   FilterContainer,
//   FilterLabel,
//   FilterInput,
// } from './ContactFilter.styled';

// const ContactFilter = () => {
//   const filter = useSelector(getFilter);
//   const dispatch = useDispatch();

//   const handleFilterChange = event => {
//     dispatch(setFilter(event.target.value));
//   };

//   return (
//     <FilterContainer>
//       <FilterLabel htmlFor="nameFilterInput">Find contacts by name</FilterLabel>
//       <FilterInput
//         id="nameFilterInput"
//         type="text"
//         value={filter}
//         onChange={handleFilterChange}
//       />
//     </FilterContainer>
//   );
// };

// export default ContactFilter;
