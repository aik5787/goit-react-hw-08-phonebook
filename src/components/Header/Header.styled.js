import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Headercontainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 20px 200px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
`;

export const Home = styled.div``;
export const RegLog = styled.div`
  display: flex;
  gap: 20px;
`;
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-size: 24px;

  &:hover {
    color: #007bff;
  }

  &.active {
    font-weight: bold;
    color: #ff5722;
  }
`;
