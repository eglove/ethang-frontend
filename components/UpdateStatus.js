import PropTypes from 'prop-types';
import {
  GreenBackground,
  OrangeBackground,
  RedBackground,
} from '../styles/PageStyles';

export const config = {
  unstable_runtimeJS: false,
};

function UpdateStatus({ course }) {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {course.lastCourseUpdate === currentYear && (
        <GreenBackground>{course.lastCourseUpdate}</GreenBackground>
      )}
      {course.lastCourseUpdate === currentYear - 1 && (
        <OrangeBackground>{course.lastCourseUpdate}</OrangeBackground>
      )}
      {course.lastCourseUpdate < currentYear - 1 &&
        course.lastCourseUpdate > 1 && (
          <RedBackground>{course.lastCourseUpdate}</RedBackground>
        )}
      {course.lastCourseUpdate === 1 && <div>-</div>}
    </>
  );
}

export default UpdateStatus;

UpdateStatus.propTypes = {
  course: PropTypes.object,
};
