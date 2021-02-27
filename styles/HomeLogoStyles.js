import styled from 'styled-components';
import { ContentVisibility } from './GlobalStyles.css';

export const HomeLogoStyles = styled(ContentVisibility)`
  display: inline-flex;
  flex-wrap: wrap;
  margin: 1rem;
  gap: 1rem;

  img {
    width: 100px;
    height: 100px;
  }
`;
