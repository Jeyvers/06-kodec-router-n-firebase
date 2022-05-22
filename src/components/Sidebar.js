import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useStateValue } from '../context';
import { actionTypes } from '../reducer';

const Sidebar = () => {
  const [{ user }, dispatch] = useStateValue();

  const navigate = useNavigate();
  const logUserOut = () => {
    signOut(auth)
      .then(() => {
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <aside>
      <ul>
        <li>
          <Link to={'/dashboard'}>Dashboard</Link>
        </li>
        <li>
          <Link to={'/courses'}>Courses</Link>
        </li>
        <li>
          <Link to={'/profile'}>Profile</Link>
        </li>

        <li onClick={logUserOut}>
          <Link to={'/'}>Logout</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
