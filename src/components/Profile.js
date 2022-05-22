import React from 'react';
import { useStateValue } from '../context';

const Profile = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <section className='profile '>
      <div className='container'>
        <div className='parent-info'>
          <h1>Profile</h1>
          <div className='profile-img'>
            <img
              src={
                user.photoURL
                  ? user.photoURL
                  : `https://avatars.dicebear.com/api/human/:${user.uid}.svg`
              }
              alt=''
            />
          </div>
        </div>
        <div className='user-information'>
          <div className='info'>
            <span>Username</span>
            <h3>{user.displayName}</h3>
          </div>
          <div className='info'>
            <span>Email</span>
            <h3>{user.email}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
