import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context';
import { UserReading } from '../icons';

const Dashboard = () => {
  const [{ user }, dispatch] = useStateValue();
  console.log(user);
  return (
    <section className='dashboard '>
      <div className='dashboard-showcase container'>
        <div className='user-showcase'>
          <div className='dashboard-user-info'>
            <h1>
              Welcome, <span> {user.displayName}</span>
            </h1>
            <p>We have lots of courses for you!</p>
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
