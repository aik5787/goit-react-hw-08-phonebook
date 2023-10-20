import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomePageContainer = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const HomePageTitle = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  color: #333;
`;

export const HomePageText = styled.p`
  font-size: 30px;
  color: #333;
`;

export const HomePageLink = styled(NavLink)`
  text-decoration: none;
  color: #007bff;
  font-size: 30px;
  font-weight: bold;

  &:hover {
    color: #ff5722;
  }
`;
