import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { DocumentRenderer } from '@keystone-next/document-renderer';
import { BLOG_QUERY } from '../graphql/queries';
import { BlogGrid } from '../styles/PageStyles';
import { ContentVisibility } from '../styles/GlobalStyles.css';
import Post from './Post';

function Blog() {
  const { data, error, loading } = useQuery(BLOG_QUERY);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

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
