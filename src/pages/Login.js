import React from 'react';
import { LoginFocusIcon } from '../icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context';
import { actionTypes } from '../reducer';

const Login = ({ runError }) => {
  const [{}, dispatch] = useStateValue();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

  const loginWithEP = (e) => {
    e.preventDefault();

    if (email.match(regex) && password && displayName) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          user.displayName = displayName;
          // ...
          dispatch({
            type: actionTypes.SET_USER,
            user: user,
          });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === 'auth/user-not-found') {
            runError('This account does not exist');
          }
          const errorOutput = errorCode?.substring(5);
          const editedError = errorOutput?.replace(/-/g, ' ').toUpperCase();
          runError(editedError);

          console.log('ERROR:', errorMessage, errorCode);
        });
      setEmail('');
      setPassword('');
      setDisplayName('');
    } else runError('Please fill all fields with the appropriate information');
  };

  return (
    <section className='login-container'>
      <div className='login-showcase'>
        <div className='login-showcase-expression'>
          <div className='login-header'>
            <h2>Student Login</h2>
            <p>make sure your account is secure</p>
          </div>
          <div className='login-image'>
            <LoginFocusIcon />
          </div>
        </div>
        <div className='login-showcase-info'>
          <div className='logo'>
            <img src='../img/undraw_handcrafts_mention.png' alt='' />
            <span>TERRIS</span>
          </div>
          <div className='login-form'>
            <form onSubmit={(e) => loginWithEP(e)}>
              <input
                type='text'
                placeholder='Enter username'
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
              <input
                value={email}
                type='email'
                placeholder='Enter email address'
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                value={password}
                type='password'
                placeholder='Enter your password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type='submit'
                onClick={(e) => loginWithEP(e)}
                value={'Login'}
              />
              <button> Google </button>
            </form>
            <Link to={'/register'}>Register</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
