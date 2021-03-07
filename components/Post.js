import PropTypes from 'prop-types';
import Link from 'next/link';
import Head from 'next/head';
import ParseHtml from '../lib/parseHtml';
import { BlogGrid } from '../styles/PageStyles';

function Post({ post }) {
  return (
    <BlogGrid key={post.id}>
      <Head>
        <title>EthanG | {post.title}</title>
        <meta name="description" content={`EthanG Blog Post ${post.title}`} />
      </Head>
      <h1>{post.title}</h1>
      <Link href={post.author.url}>{post.author.name}</Link>
      <div>{new Date(post.created).toDateString()}</div>
      <Link href={`/post/${post.id}`}>Permalink</Link>
      <ParseHtml documentObject={post.content.document} />
    </BlogGrid>
  );
}

export default Post;

Post.propTypes = {
  post: PropTypes.object,
};
