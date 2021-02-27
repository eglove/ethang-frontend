import styled from 'styled-components';
import { ContentVisibility } from './GlobalStyles.css';

export const MainContent = styled(ContentVisibility)`
  display: grid;
  padding: 1rem;
  margin-top: 1rem;
  background: var(--white);
  box-shadow: var(--boxShadow);
  place-items: center;
`;

export const PortfolioGrid = styled(MainContent)`
  grid-template-columns: repeat(2, auto);
`;

export const BlogGrid = styled(MainContent)`
  place-items: flex-start;
`;

export const SmallImageStyles = styled.img`
  width: 50px;
  height: 50px;
  margin: 1rem;
`;
