import { useQuery } from '@apollo/client';
import { PORTFOLIO_QUERY } from '../graphql/queries';
import { ContentVisibility } from '../styles/GlobalStyles.css';
import Project from './Project';

function Portfolio() {
  const { data, error, loading } = useQuery(PORTFOLIO_QUERY);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  const { allProjects } = data;

  return (
    <ContentVisibility>
      {allProjects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ContentVisibility>
  );
}

export default Portfolio;
