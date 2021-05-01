import { gql } from '@apollo/client';

export const ALL_COURSES_QUERY = gql`
  query All_COURSES_QUERY {
    courses: allCourses(sortBy: [order_ASC]) {
      ...CourseData
    }

    lastUpdate: allCourses(sortBy: [updated_DESC], first: 1) {
      updated
    }
  }

  fragment CourseData on Course {
    id
    complete
    lastCourseUpdate
    logo {
      image {
        publicUrlTransformed(transformation: { transformation: "SanitizeSVG" })
      }
    }
    title
    instructor
    url
    hours
  }
`;
