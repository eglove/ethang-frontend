import { useQuery } from '@apollo/client';
import { COURSES_COMPLETE_QUERY } from '../../graphql/queries';
import { CourseGrid } from '../../styles/PageStyles';

function CompleteCourses() {
  const { data, error, loading } = useQuery(COURSES_COMPLETE_QUERY);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

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
          <p>{course.title}</p>
          <p>{course.hours === '-' ? course.hours : `${course.hours}  hrs`}</p>
        </CourseGrid>
      ))}
    </>
  );
}

export default CompleteCourses;
