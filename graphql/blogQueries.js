import { gql } from '@apollo/client';

export const BLOG_QUERY = gql`
  query BLOG_QUERY {
    allBlogs(sortBy: [created_DESC]) {
      id
      title
      author {
        name
        url
      }
      created
      updated
      image {
        image {
          publicUrlTransformed
        }
      }
      summary
      content {
        document(hydrateRelationships: true)
      }
    }
  }
`;

export const SINGLE_BLOG_QUERY = gql`
  query SINGLE_BLOG_QUERY($id: ID!) {
    allBlogs(where: { id: $id }) {
      id
      title
      author {
        name
        url
      }
      created
      updated
      image {
        image {
          publicUrlTransformed
        }
      }
      content {
        document(hydrateRelationships: true)
      }
    }
  }
`;
