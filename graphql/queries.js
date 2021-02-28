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

export const COURSES_COMPLETE_QUERY = gql`
  query COURSES_QUERY {
    allCourses(sortBy: [order_ASC], where: { complete: true }) {
      id
      complete
      logo {
        image {
          publicUrlTransformed(
            transformation: { transformation: "SanitizeSVG" }
          )
        }
      }
      title
      url
      hours
    }
  }
`;

export const COURSES_INCOMPLETE_QUERY = gql`
  query COURSES_QUERY {
    allCourses(sortBy: [order_ASC], where: { complete: null }) {
      id
      complete
      logo {
        image {
          publicUrlTransformed(
            transformation: { transformation: "SanitizeSVG" }
          )
        }
      }
      title
      url
      hours
    }
  }
`;

export const COURSES_LAST_UPDATE_QUERY = gql`
  query COURSES_LAST_UPDATE_QUERY {
    allCourses(sortBy: [updated_DESC], first: 1) {
      title
      updated
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
