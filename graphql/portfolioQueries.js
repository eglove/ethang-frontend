import { gql } from '@apollo/client';

export const PORTFOLIO_QUERY = gql`
  query PORTFOLIO_QUERY {
    allProjects(sortBy: [created_DESC]) {
      id
      name
      image {
        image {
          publicUrlTransformed
        }
      }
      description {
        document(hydrateRelationships: true)
      }
      githubLink
      liveLink
    }
  }
`;

export const SINGLE_PROJECT_QUERY = gql`
  query SINGLE_PROJECT_QUERY($id: ID!) {
    allProjects(where: { id: $id }) {
      id
      name
      image {
        image {
          publicUrlTransformed
        }
      }
      description {
        document(hydrateRelationships: true)
      }
      githubLink
      liveLink
    }
  }
`;
