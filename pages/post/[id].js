import PropType from 'prop-types';
import { useQuery } from '@apollo/client';
import { SINGLE_BLOG_QUERY } from '../../graphql/blogQueries';
import Post from '../../components/Post';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

function SingleBlogPage({ query }) {
  const { id } = query;

  const { data, loading, error } = useQuery(SINGLE_BLOG_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) return <Loading />;

  if (error) return <Error message={error.message} />;

  const post = data.allBlogs[0];

  return <Post post={post} />;
}

export default SingleBlogPage;

SingleBlogPage.propTypes = {
  query: PropType.object,
};
