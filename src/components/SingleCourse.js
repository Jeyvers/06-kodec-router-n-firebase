import { TeacherIllus } from '../icons';
import Db from '../db';
import { useState } from 'react';
import { useParams } from 'react-router';

const SingleCourse = () => {
  const { courseId } = useParams();
  const [courses, setCourses] = useState(Db);

  const course = courses.find((course) => course.id == courseId);
  console.log(course);
  return (
    <section className='single-course container'>
      <div className='single-course-img'>
        <TeacherIllus />
        <p>Introduction to {course.name}</p>
      </div>
      <div className='single-course-info'>
        <h3>Introduction to {course.name}</h3>
        <p>{course.details.intro}</p>
        <h4>Branches</h4>
        <ul>
          {course.details.branches.map((branch) => (
            <li>{branch}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SingleCourse;
