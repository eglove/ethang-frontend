import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { SINGLE_PROJECT_QUERY } from '../../graphql/queries';
import Project from '../../components/Project';

function SingleProjectPage({ query }) {
  const { id } = query;

  const { data, loading, error } = useQuery(SINGLE_PROJECT_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  const project = data.allProjects[0];

  return <Project project={project} />;
}

export default SingleProjectPage;

SingleProjectPage.propTypes = {
  query: PropTypes.object,
};
