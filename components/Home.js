import { useQuery } from '@apollo/client';
import Image from 'next/image';
import { MainContent } from '../styles/PageStyles';
import { HOME_LOGOS_QUERY } from '../graphql/queries';

export default function Home() {
  const { data, error, loading } = useQuery(HOME_LOGOS_QUERY);

  if (loading) return <div>Loading...</div>;

  const { allLogos } = data;
  console.log(data);

  return (
    <MainContent>
      <h1>Hi! I'm Ethan Glover.</h1>
      <h2>I'm a developer.</h2>
      <h3>What kind of developer?</h3>
      <p>Well.. I've worked with these technologies..</p>
      {allLogos.map((logo) => (
        <>
          <img src={logo.image.publicUrlTransformed} alt={logo.alt} />
        </>
      ))}
    </MainContent>
  );
}
