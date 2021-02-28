import { useQuery } from '@apollo/client';
import { PORTFOLIO_QUERY } from '../graphql/queries';
import { ContentVisibility } from '../styles/GlobalStyles.css';
import Project from './Project';
import Loading from './Loading';
import Error from './Error';

function Portfolio() {
  const { data, error, loading } = useQuery(PORTFOLIO_QUERY);

  if (loading) return <Loading />;

  if (error) return <Error message={error.message} />;

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
