import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { DocumentRenderer } from '@keystone-next/document-renderer';
import { BLOG_QUERY } from '../graphql/queries';
import { BlogGrid } from '../styles/PageStyles';
import { ContentVisibility } from '../styles/GlobalStyles.css';

function Blog() {
  const { data, error, loading } = useQuery(BLOG_QUERY);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  const { allBlogs } = data;

  return (
    <ContentVisibility>
      {allBlogs.map((blog) => (
        <BlogGrid key={blog.id}>
          <h1>{blog.title}</h1>
          <Link href={blog.author.url}>{blog.author.name}</Link>
          <div>{new Date(blog.created).toDateString()}</div>
          <DocumentRenderer document={blog.content.document} />
        </BlogGrid>
      ))}
    </ContentVisibility>
  );
}

export default Blog;
