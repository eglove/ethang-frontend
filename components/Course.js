import { useQuery } from '@apollo/client';
import Head from 'next/head';
import { ALL_COURSES_QUERY } from '../graphql/courseQueries';
import { ContentVisibility } from '../styles/GlobalStyles.css';
import Loading from './Loading';
import ErrorDisplay from './ErrorDisplay';
import { CourseContainer } from '../styles/PageStyles';
import CourseList from './CourseList';

export const config = {
  unstable_runtimeJS: false,
};

function Course() {
  const { data, error, loading } = useQuery(ALL_COURSES_QUERY);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorDisplay message={error.message} />;
  }

  const { completeCourses, incompleteCourses } = data;
  const lastUpdate = data.lastUpdate[0].updated;

  return (
    <ContentVisibility>
      <Head>
        <title>EthanG | Recommended Courses</title>
        <meta name="description" content="Ethan Glover Recommended Courses" />
      </Head>
      <CourseContainer>
        <h1>Recommended Courses</h1>
        <p>Last Update: {new Date(lastUpdate).toDateString()}</p>
        <CourseList courses={completeCourses} complete />
        <h2>Courses I'm Looking At</h2>
        <CourseList courses={incompleteCourses} complete={false} />
      </CourseContainer>
    </ContentVisibility>
  );
}

export default Course;
