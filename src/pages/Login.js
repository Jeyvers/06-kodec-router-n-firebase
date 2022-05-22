import React from 'react';
import { useNavigate } from 'react-router';
import { LoginFocusIcon } from '../icons';
import {
  getRedirectResult,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from 'firebase/auth';
import { useState } from 'react';
import { auth, provider } from '../firebase';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context';
import { actionTypes } from '../reducer';

const Login = ({ error, runError }) => {
  const [{}, dispatch] = useStateValue();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  const navigate = useNavigate();

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
          navigate('/dashboard');
        })
        .then(() => {
          // window.history.pushState('', 'Dashboard', '/dashboard');
          // window.location.assign('/dashboard');
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
    } else runError('Please in fill all fields.');
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        dispatch({
          type: actionTypes.SET_USER,
          user: user,
        });
        navigate('/dashboard');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
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
            <img src={require('../img/undraw_handcrafts_mention.png')} alt='' />
            <span>TERRIS</span>
          </div>
          <div className='login-form'>
            <form onSubmit={(e) => loginWithEP(e)}>
              {error.err && (
                <div className='error-message'>
                  <p>{error.message}</p>
                </div>
              )}
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

              <button type='submit' onClick={(e) => loginWithEP(e)}>
                Login
              </button>
            </form>
            <div className='other-options'>
              <button onClick={() => signInWithGoogle()}>
                {' '}
                Sign in with Google{' '}
              </button>
              <Link to={'/register'}>Register</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
