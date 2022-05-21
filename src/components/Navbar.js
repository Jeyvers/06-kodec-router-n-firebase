import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>Terris</h1>
      <Link to={'/login'}>
        <button>Login</button>
      </Link>
    </nav>
  );
};

export default Navbar;
