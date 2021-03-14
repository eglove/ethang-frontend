import { useQuery } from '@apollo/client';
import Head from 'next/head';
import { PORTFOLIO_QUERY } from '../graphql/portfolioQueries';
import { ContentVisibility } from '../styles/GlobalStyles.css';
import Project from './Project';
import Loading from './Loading';
import ErrorDisplay from './ErrorDisplay';

function Portfolio() {
  const { data, error, loading } = useQuery(PORTFOLIO_QUERY);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorDisplay message={error.message} />;
  }

  const { allProjects } = data;

  return (
    <ContentVisibility>
      {allProjects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
      <Head>
        <title>EthanG | Portfolio</title>
        <meta name="description" content="Ethan Glover Portfolio" />
      </Head>
    </ContentVisibility>
  );
}

export default Portfolio;
