import { useState } from 'react';
import { Link } from 'react-router-dom';
import Db from '../db';

const Courses = () => {
  const [courses, setCourses] = useState(Db);

  return (
    <div className='courses container'>
      <h3>Available Courses</h3>
      <div className='course-list'>
        {courses.map((course) => (
          <div>
            <Link to={`/courses/${course.id}`} key={course.id}>
              {course.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
