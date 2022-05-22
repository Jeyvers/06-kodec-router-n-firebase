import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <img src={require('../img/undraw_handcrafts_mention.png')} alt='' />
        <h1>Terris</h1>
      </div>
      <Link to={'/login'}>
        <button>Login</button>
      </Link>
    </nav>
  );
};

export default Navbar;
