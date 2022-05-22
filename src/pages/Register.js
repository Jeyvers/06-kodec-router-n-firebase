import React from 'react';
import { RegisterFocusIcon } from '../icons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';

const Register = ({ runError }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  const emailIsCorrect = email.match(regex);
  const navigate = useNavigate();

  const checkAllFields = () => {
    if (!emailIsCorrect) {
      runError('Please enter a valid email address');
    }

    if (password.length < 6) {
      runError('Password should not be less than 6 characters');
    }
  };

  const registerWithEP = (e) => {
    e.preventDefault();
    checkAllFields();
    if (emailIsCorrect && password.length > 5) {
      console.log(email, password);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate('/login');
          // ...
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const errorOutput = errorCode.substring(5);
          const editedError = errorOutput.replace(/-/g, ' ').toUpperCase();
          // ..
          runError(editedError);
          console.log('ERROR:', errorCode, errorMessage);
        });
      setEmail('');
      setPassword('');
    }
  };

  return (
    <section className='login-container'>
      <div className='login-showcase'>
        <div className='login-showcase-expression'>
          <div className='login-header'>
            <h2>Register</h2>
            <p>join us today</p>
          </div>
          <div className='login-image'>
            <RegisterFocusIcon />
          </div>
        </div>
        <div className='login-showcase-info'>
          <div className='logo'>
            <img src={require('../img/undraw_handcrafts_mention.png')} alt='' />
            <span>TERRIS</span>
          </div>
          <div className='login-form'>
            <form onSubmit={(e) => registerWithEP(e)}>
              <input
                type='email'
                value={email}
                placeholder='Enter email address'
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type='password'
                value={password}
                placeholder='Enter your password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type='submit' onClick={(e) => registerWithEP(e)}>
                Register
              </button>
            </form>
            <Link to={'/login'}>Login</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
