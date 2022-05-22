import { useState } from 'react';
import { Link } from 'react-router-dom';
import Db from '../db';

const Courses = () => {
  const [courses, setCourses] = useState(Db);

  return (
    <div>
      {courses.map((course) => (
        <Link to={`/courses/${course.id}`} key={course.id}>
          <div>{course.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Courses;
