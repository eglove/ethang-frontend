import PropTypes from 'prop-types';
import Link from 'next/link';
import { DocumentRenderer } from '@keystone-next/document-renderer';
import { BlogGrid } from '../styles/PageStyles';

function Post({ post }) {
  return (
    <BlogGrid key={post.id}>
      <h1>{post.title}</h1>
      <Link href={post.author.url}>{post.author.name}</Link>
      <div>{new Date(post.created).toDateString()}</div>
      <Link href={`/post/${post.id}`}>Permalink</Link>
      <DocumentRenderer document={post.content.document} />
    </BlogGrid>
  );
}

export default Post;

Post.propTypes = {
  post: PropTypes.object,
};
