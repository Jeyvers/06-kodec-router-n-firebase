import React from 'react';
import { MdDashboard, MdClass } from 'react-icons/md';
import { AiFillProfile } from 'react-icons/ai';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useStateValue } from '../context';
import { actionTypes } from '../reducer';

const Sidebar = () => {
  const [{ user }, dispatch] = useStateValue();
  const color = 'white';
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
      <h4>TERRIS</h4>
      <ul>
        <li>
          <Link to={'/dashboard'}>
            <span className='icon'>
              <i class='uil uil-apps'></i>
            </span>
            <span className='text'>{' Dashboard'}</span>
          </Link>
        </li>

        <li>
          <Link to={'/courses'}>
            <span className='icon'>
              <i class='uil uil-book-open'></i>
            </span>
            <span className='text'>{'Courses'}</span>
          </Link>
        </li>

        <li>
          <Link to={'/profile'}>
            <span className='icon'>
              <i class='uil uil-airplay'></i>
            </span>
            <span className='text'>{'Profile'}</span>
          </Link>
        </li>

        <li onClick={logUserOut}>
          <Link to={'/'}>
            <span className='icon'>
              <i class='uil uil-signout'></i>
            </span>
            <span className='text'>{'Logout'}</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
