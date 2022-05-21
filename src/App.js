import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Courses from './components/Courses';
import Navbar from './components/Navbar';
import { useStateValue } from './context';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [error, setError] = useState({ err: false, message: '' });
  const [{ user }, dispatch] = useStateValue();

  const runError = (errMessage) => {
    window.scroll(0, 0);
    setError({ err: true, message: errMessage });
    setTimeout(() => setError({ err: false, message: '' }), 3000);
  };

  return !user ? (
    <div className='App'>
      {error.err && (
        <div className='error-message'>
          <p>{error.message}</p>
        </div>
      )}
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Navbar />
              <Landing />
            </>
          }
        />
        <Route path='/login' element={<Login runError={runError} />} />
        <Route path='/register' element={<Register runError={runError} />} />
      </Routes>
    </div>
  ) : (
    <Dashboard />
  );
}

export default App;
