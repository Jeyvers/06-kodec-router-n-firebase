import { TeacherIllus } from '../icons';

const SingleCourse = ({ name, details }) => {
  return (
    <section className='singleCourseContainer'>
      <div className='singleCourseIntroImg'>
        <TeacherIllus />
        <p>Introduction to {name}</p>
      </div>
      <div className='single-course-info'>
        <h3>Introduction to {name}</h3>
        <p>{details.intro}</p>
        <h5>Branches</h5>
        <ul>
          {details.branches.map((branch) => (
            <li>{branch}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SingleCourse;
