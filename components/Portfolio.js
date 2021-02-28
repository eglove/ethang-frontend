import { useQuery } from '@apollo/client';
import Head from 'next/head';
import { PORTFOLIO_QUERY } from '../graphql/portfolioQueries';
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
      <Head>
        <title>EthanG | Portfolio</title>
      </Head>
    </ContentVisibility>
  );
}

export default Portfolio;
