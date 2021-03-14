import { useQuery } from '@apollo/client';
import Head from 'next/head';
import { BLOG_QUERY } from '../graphql/blogQueries';
import { ContentVisibility } from '../styles/GlobalStyles.css';
import Post from './Post';
import Loading from './Loading';
import ErrorDisplay from './ErrorDisplay';

export const config = {
  unstable_runtimeJS: false,
};

function Blog() {
  const { data, error, loading } = useQuery(BLOG_QUERY);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorDisplay message={error.message} />;
  }

  const { allBlogs } = data;

  return (
    <ContentVisibility>
      {allBlogs.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <Head>
        <title>EthanG | Blog</title>
        <meta name="description" content="Ethan Glover blog" />
      </Head>
    </ContentVisibility>
  );
}

export default Blog;
