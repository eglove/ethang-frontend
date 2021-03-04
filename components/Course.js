import { useQuery } from '@apollo/client';
import Head from 'next/head';
import { ALL_COURSES_QUERY } from '../graphql/courseQueries';
import { ContentVisibility } from '../styles/GlobalStyles.css';
import CompleteCourses from './CoursesQueries/CompleteCourses';
import IncompleteCourses from './CoursesQueries/IncompleteCourses';
import Loading from './Loading';
import Error from './Error';
import { CourseContainer } from '../styles/PageStyles';

function Course() {
  const { data, error, loading } = useQuery(ALL_COURSES_QUERY);

  if (loading) return <Loading />;

  if (error) return <Error message={error.message} />;

  const { completeCourses, incompleteCourses } = data;
  const lastUpdate = data.lastUpdate[0].updated;

  return (
    <ContentVisibility>
      <Head>
        <title>EthanG | Recommended Courses</title>
      </Head>
      <CourseContainer>
        <h1>Recommended Courses</h1>
        <p>Last Update: {new Date(lastUpdate).toDateString()}</p>
        <CompleteCourses completeCourses={completeCourses} />
        <h2>Courses I'm Looking At</h2>
        <IncompleteCourses incompleteCourses={incompleteCourses} />
      </CourseContainer>
    </ContentVisibility>
  );
}

export default Course;
