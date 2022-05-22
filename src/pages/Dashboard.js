import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context';
import { UserReading } from '../icons';

const Dashboard = () => {
  const [{ user }, dispatch] = useStateValue();
  console.log(user);
  return (
    <section>
      <div className='dashboard-showcase'>
        <div className='user-showcase'>
          <div>
            <h1>Welcome, {user.displayName} </h1>
            <p>View all courses</p>
            <Link to={'/courses'}>
              <button>View</button>
            </Link>
          </div>
          <div className='user-img-showcase'>
            <UserReading />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
