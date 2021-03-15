import { useQuery } from '@apollo/client';
import Head from 'next/head';
import { MainContent } from '../styles/PageStyles';
import { HOME_LOGOS_QUERY } from '../graphql/logoQueries';
import { HomeLogoStyles } from '../styles/HomeLogoStyles';
import Loading from './Loading';
import ErrorDisplay from './ErrorDisplay';

export const config = {
  unstable_runtimeJS: false,
};

function Home() {
  const { data, error, loading } = useQuery(HOME_LOGOS_QUERY);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorDisplay message={error.message} />;
  }

  const { allLogos } = data;

  function randomizeLogoOrder() {
    // Create array representing index for every logo
    const logoIndex = new Array(allLogos.length);
    for (let i = 0; i < logoIndex.length; i += 1) {
      logoIndex[i] = i;
    }

    // Shuffle index array
    for (let i = logoIndex.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * i);
      const temp = logoIndex[i];
      logoIndex[i] = logoIndex[j];
      logoIndex[j] = temp;
    }

    return logoIndex;
  }

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
        {randomizeLogoOrder().map((lIndex) => (
          <img
            key={allLogos[lIndex].id}
            src={allLogos[lIndex].image.publicUrlTransformed}
            alt={allLogos[lIndex].alt}
          />
        ))}
      </HomeLogoStyles>
    </MainContent>
  );
}

export default Home;
