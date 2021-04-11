import PropTypes from 'prop-types';
import { CourseUpdatedStyles } from '../styles/PageStyles';

function UpdateStatus({ course }) {
  const currentYear = new Date().getFullYear();
  const updated = course.lastCourseUpdate;
  let backgroundColor;

  if (updated === currentYear) {
    backgroundColor = 'green';
  } else if (updated === currentYear - 1) {
    backgroundColor = 'darkorange';
  } else if (updated === currentYear - 2) {
    backgroundColor = 'red';
  } else if (updated === 1) {
    backgroundColor = 'none';
  } else {
    backgroundColor = 'black';
  }

  return (
    <CourseUpdatedStyles color={backgroundColor}>
      {course.lastCourseUpdate}
    </CourseUpdatedStyles>
  );
}

export default UpdateStatus;

UpdateStatus.propTypes = {
  course: PropTypes.object,
};
