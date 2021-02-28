import PropType from 'prop-types';
import { useQuery } from '@apollo/client';
import { SINGLE_BLOG_QUERY } from '../../graphql/queries';
import Post from '../../components/Post';

function SingleBlogPage({ query }) {
  const { id } = query;

  const { data, loading, error } = useQuery(SINGLE_BLOG_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  const post = data.allBlogs[0];

  return <Post post={post} />;
}

export default SingleBlogPage;

SingleBlogPage.propTypes = {
  query: PropType.object,
};
