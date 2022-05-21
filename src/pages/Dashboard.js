import React from 'react';
import { UserReading } from '../icons';

const Dashboard = () => {
  return (
    <section>
      <aside>
        <ul>
          <li>Dashboard</li>
          <li>Courses</li>
          <li>Profile</li>
          <li>Logout</li>
        </ul>
      </aside>
      <div className='dashboard-showcase'>
        <div className='user-showcase'>
          <div>
            <h1>Welcome, Hannis</h1>
            <p>View all courses</p>
            <button>View</button>
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
