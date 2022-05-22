import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorIcon } from '../icons';

const Error = () => {
  return (
    <div>
      <ErrorIcon />
      <div>
        Not the page you expected to see? Me too. Your session has either
        expired or this page doesn't exist
      </div>
      <div>
        <Link to={'/'}>Go back home</Link>
        <Link to={'/login'}> Login</Link>
      </div>
    </div>
  );
};

export default Error;
