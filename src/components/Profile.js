import React from 'react';
import { useStateValue } from '../context';

const Profile = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <section>
      <div>
        <h1>Profile</h1>
        <div className='img'>
          <img
            src={
              user.photoURL
                ? user.photoURL
                : `https://avatars.dicebear.com/api/human/:${user.uid}.svg`
            }
            alt=''
          />
        </div>
        <div className='user-information'>
          <h2>{user.displayName}</h2>
          <h2>{user.email}</h2>
        </div>
      </div>
    </section>
  );
};

export default Profile;
