import { useQuery } from '@apollo/client';
import { COURSES_LAST_UPDATE_QUERY } from '../graphql/queries';
import { ContentVisibility } from '../styles/GlobalStyles.css';
import CompleteCourses from './CoursesQueries/CompleteCourses';
import IncompleteCourses from './CoursesQueries/IncompleteCourses';
import Loading from './Loading';
import Error from './Error';

function Course() {
  const { data, error, loading } = useQuery(COURSES_LAST_UPDATE_QUERY);

  if (loading) return <Loading />;

  if (error) return <Error message={error.message} />;

  const lastUpdate = data?.allCourses[0].updated;

  return (
    <ContentVisibility>
      <h1>Recommended Courses</h1>
      <p>Last Update: {new Date(lastUpdate).toDateString()}</p>
      <CompleteCourses />
      <h2>Courses I'm Looking At</h2>
      <IncompleteCourses />
    </ContentVisibility>
  );
}

export default Course;
