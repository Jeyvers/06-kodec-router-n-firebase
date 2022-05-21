import { useState } from 'react';
import Db from '../db';
import SingleCourse from './SingleCourse';

const Courses = () => {
  const [courses, setCourses] = useState(Db);

  return (
    <div>
      {courses.map((course) => (
        <SingleCourse key={course.id} {...course} />
      ))}
    </div>
  );
};

export default Courses;
