import PropTypes from 'prop-types';
import Link from 'next/link';
import UpdateStatus from './UpdateStatus';
import { CourseGrid, TotalHoursStyles } from '../styles/PageStyles';

function CourseList({ courses }) {
  let totalHours = 0;
  courses.forEach((course) => {
    if (parseFloat(course.hours)) {
      totalHours += parseFloat(course.hours);
    }
  });

  return (
    <>
      {courses.map((course) => (
        <CourseGrid key={course.id}>
          <p>{course.complete ? `✅` : `⬜`}</p>
          <img
            src={course.logo.image.publicUrlTransformed}
            alt={course.logo.alt}
          />
          <Link href={course.url}>
            <a target="_blank">{course.title}</a>
          </Link>
          <p>{course.instructor ?? ''}</p>
          <p>{course.hours === '-' ? course.hours : `${course.hours}  hrs`}</p>
          <UpdateStatus course={course} />
        </CourseGrid>
      ))}
      <TotalHoursStyles>Total Hours: {totalHours}</TotalHoursStyles>
    </>
  );
}

export default CourseList;

CourseList.propTypes = {
  courses: PropTypes.array,
};
