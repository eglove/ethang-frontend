import { useQuery } from '@apollo/client';
import { MainContent } from '../styles/PageStyles';
import { HOME_LOGOS_QUERY } from '../graphql/queries';
import { HomeLogoStyles } from '../styles/HomeLogoStyles';
import Loading from './Loading';
import Error from './Error';

function Home() {
  const { data, error, loading } = useQuery(HOME_LOGOS_QUERY);

  if (loading) return <Loading />;

  if (error) return <Error message={error.message} />;

  const { allLogos } = data;

  return (
    <MainContent>
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
