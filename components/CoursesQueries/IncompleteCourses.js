import PropTypes from 'prop-types';
import Link from 'next/link';
import { CourseGrid } from '../../styles/PageStyles';

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
          <p>{course.hours === '-' ? course.hours : `${course.hours}  hrs`}</p>
        </CourseGrid>
      ))}
    </>
  );
}

export default IncompleteCourses;

IncompleteCourses.propTypes = {
  incompleteCourses: PropTypes.array,
};
