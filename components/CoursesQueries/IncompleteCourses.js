import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  CourseGrid,
  InstructorStyles,
  TextCenterParagraph,
} from '../../styles/PageStyles';
import UpdateStatus from '../UpdateStatus';

import { topInstructors } from '../../lib/topInstructors';

function IncompleteCourses({ incompleteCourses }) {
  return (
    <>
      {incompleteCourses.map((course) => (
        <CourseGrid key={course.id}>
          <p>⬜</p>
          <img
            src={course.logo.image.publicUrlTransformed}
            alt={course.logo.alt}
          />
          <Link href={course.url}>
            <a target="_blank">{course.title}</a>
          </Link>
          <InstructorStyles
            topInstructor={topInstructors.includes(course.instructor)}
          >
            {course.instructor ?? ''}
          </InstructorStyles>
          <TextCenterParagraph>
            {course.hours === '-' ? course.hours : `${course.hours}  hrs`}
          </TextCenterParagraph>
          <UpdateStatus course={course} />
        </CourseGrid>
      ))}
    </>
  );
}

export default IncompleteCourses;

IncompleteCourses.propTypes = {
  incompleteCourses: PropTypes.array,
};
