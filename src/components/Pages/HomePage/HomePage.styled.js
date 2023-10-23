import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomePageLink = styled(NavLink)`
  text-decoration: none;
  color: #007bff;
  font-size: 30px;
  font-weight: bold;

  &:hover {
    color: #ff5722;
  }
`;
