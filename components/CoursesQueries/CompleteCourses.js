import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { COURSES_COMPLETE_QUERY } from '../../graphql/courseQueries';
import { CourseGrid } from '../../styles/PageStyles';
import Loading from '../Loading';
import Error from '../Error';

function CompleteCourses() {
  const { data, error, loading } = useQuery(COURSES_COMPLETE_QUERY);

  if (loading) return <Loading />;

  if (error) return <Error message={error.message} />;

  const { allCourses } = data;

  return (
    <>
      {allCourses.map((course) => (
        <CourseGrid key={course.id}>
          <p>✅</p>
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

export default CompleteCourses;
