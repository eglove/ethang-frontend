import { gql } from '@apollo/client';

export const HOME_LOGOS_QUERY = gql`
  query HOME_LOGOS_QUERY {
    allLogos(where: { home: true }) {
      id
      image {
        publicUrlTransformed(transformation: { transformation: "SanitizeSVG" })
      }
      alt
    }
  }
`;

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
      content {
        document(hydrateRelationships: true)
      }
    }
  }
`;

export const GITHUB_LOGO_QUERY = gql`
  query GITHUB_LOGO_QUERY {
    allLogos(where: { name: "GitHub" }) {
      image {
        publicUrlTransformed(transformation: { transformation: "SanitizeSVG" })
      }
      alt
    }
  }
`;

export const GLOBE_LOGO_QUERY = gql`
  query GLOBE_LOGO_QUERY {
    allLogos(where: { name: "Globe" }) {
      image {
        publicUrlTransformed(transformation: { transformation: "SanitizeSVG" })
      }
      alt
    }
  }
`;
