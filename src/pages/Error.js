import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorIcon } from '../icons';

const Error = () => {
  return (
    <div className='error container'>
      <div className='error-icon'>
        <ErrorIcon />
      </div>
      <div className='error-info'>
        <p>Not the page you expected to see? </p>
        <span> Me too!</span>{' '}
        <p>Your session has either expired or this page doesn't exist.</p>
        <div className='other-options'>
          <Link to={'/'}>
            <button>Go back home</button>
          </Link>

          <Link to={'/login'}>
            <button>Login </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
