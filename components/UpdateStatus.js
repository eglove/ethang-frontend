import PropTypes from 'prop-types';
import {
  BlackBackground,
  GreenBackground,
  OrangeBackground,
  RedBackground,
} from '../styles/PageStyles';

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
      {course.lastCourseUpdate === currentYear - 2 && (
        <RedBackground>{course.lastCourseUpdate}</RedBackground>
      )}
      {course.lastCourseUpdate < currentYear - 2 &&
        course.lastCourseUpdate !== 1 && (
          <BlackBackground>course.lastCourseUpdate</BlackBackground>
        )}
      {course.lastCourseUpdate === 1 && <div>-</div>}
    </>
  );
}

export default UpdateStatus;

UpdateStatus.propTypes = {
  course: PropTypes.object,
};
