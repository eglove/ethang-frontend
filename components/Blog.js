import { useQuery } from '@apollo/client';
import { BLOG_QUERY } from '../graphql/queries';
import { ContentVisibility } from '../styles/GlobalStyles.css';
import Post from './Post';
import Loading from './Loading';
import Error from './Error';

function Blog() {
  const { data, error, loading } = useQuery(BLOG_QUERY);

  if (loading) return <Loading />;

  if (error) return <Error message={error.message} />;

  const { allBlogs } = data;

  return (
    <ContentVisibility>
      {allBlogs.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ContentVisibility>
  );
}

export default Blog;
