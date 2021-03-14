import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { SINGLE_PROJECT_QUERY } from '../../graphql/portfolioQueries';
import Project from '../../components/Project';
import Loading from '../../components/Loading';
import ErrorDisplay from '../../components/ErrorDisplay';

function SingleProjectPage({ query }) {
  const { id } = query;

  const { data, loading, error } = useQuery(SINGLE_PROJECT_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorDisplay message={error.message} />;
  }

  const project = data.allProjects[0];

  return <Project project={project} />;
}

export default SingleProjectPage;

SingleProjectPage.propTypes = {
  query: PropTypes.object,
};
