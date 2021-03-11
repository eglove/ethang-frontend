import PropTypes from 'prop-types';
import Link from 'next/link';
import { CourseGrid } from '../../styles/PageStyles';
import UpdateStatus from '../UpdateStatus';

export const config = {
  unstable_runtimeJS: false,
};

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
