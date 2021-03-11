import { useQuery } from '@apollo/client';
import Head from 'next/head';
import { MainContent } from '../styles/PageStyles';
import { HOME_LOGOS_QUERY } from '../graphql/logoQueries';
import { HomeLogoStyles } from '../styles/HomeLogoStyles';
import Loading from './Loading';
import Error from './Error';

export const config = {
  unstable_runtimeJS: false,
};

function Home() {
  const { data, error, loading } = useQuery(HOME_LOGOS_QUERY);

  if (loading) return <Loading />;

  if (error) return <Error message={error.message} />;

  const { allLogos } = data;

  return (
    <MainContent>
      <Head>
        <title>EthanG</title>
        <meta name="description" content="Personal website of Ethan Glover" />
      </Head>
      <h1>Hi! I'm Ethan Glover.</h1>
      <h2>I'm a developer.</h2>
      <h3>What kind of developer?</h3>
      <p>Well.. I've worked with these technologies..</p>
      <HomeLogoStyles>
        {allLogos.map((logo) => (
          <img
            key={logo.id}
            src={logo.image.publicUrlTransformed}
            alt={logo.alt}
          />
        ))}
      </HomeLogoStyles>
    </MainContent>
  );
}

export default Home;
