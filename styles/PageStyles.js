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

export const CourseContainer = styled(MainContent)`
  place-items: unset;
`;

export const InstructorStyles = styled.p`
  text-align: center;
  background: ${(props) => (props.topInstructor ? '#9be9a8' : '')};
`;

export const CourseGrid = styled.div`
  display: grid;
  align-items: center;
  border-bottom: 1px solid var(--fontColor);
  gap: 1rem;
  grid-template-columns: repeat(2, auto) 2fr repeat(3, 1fr);

  img {
    width: 25px;
    height: 25px;
  }
`;

export const TextCenterParagraph = styled.p`
  text-align: center;
`;

export const TotalHoursStyles = styled.div`
  text-align: right;
  margin-top: 1rem;
  font-weight: bold;
`;

export const CourseUpdatedStyles = styled.div`
  color: white;
  text-align: center;
  background: ${({ color }) => color};
  display: ${({ color }) => (color === 'none' ? 'none' : '')};
`;

export const SmallImageStyles = styled.img`
  width: 50px;
  height: 50px;
  margin: 1rem;
`;

export const ErrorStyles = styled(MainContent)`
  border: 3px solid red;

  p {
    font-weight: bold;
  }
`;
