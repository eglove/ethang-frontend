import { gql } from '@apollo/client';

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
      updated
    }
  }
`;
