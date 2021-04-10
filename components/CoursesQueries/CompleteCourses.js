import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  CourseGrid,
  InstructorStyles,
  TextCenterParagraph,
  TotalHoursStyles,
} from '../../styles/PageStyles';
import UpdateStatus from '../UpdateStatus';
import { topInstructors } from '../../lib/topInstructors';

function CompleteCourses({ completeCourses }) {
  let totalHours = 0;
  completeCourses.forEach((course) => {
    totalHours += parseFloat(course.hours);
  });

  return (
    <>
      {completeCourses.map((course) => (
        <CourseGrid key={course.id}>
          <p>✅</p>
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
      <TotalHoursStyles>Total Hours: {totalHours}</TotalHoursStyles>
    </>
  );
}

export default CompleteCourses;

CompleteCourses.propTypes = {
  completeCourses: PropTypes.array,
};
