import { gql } from '@apollo/client';

export const ALL_COURSES_QUERY = gql`
  query All_COURSES_QUERY {
    completeCourses: allCourses(
      sortBy: [order_ASC]
      where: { complete: true }
    ) {
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

    incompleteCourses: allCourses(
      sortBy: [order_ASC]
      where: { complete: null }
    ) {
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

    lastUpdate: allCourses(sortBy: [updated_DESC], first: 1) {
      updated
    }
  }
`;
