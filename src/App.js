import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Courses from './components/Courses';
import Profile from './components/Profile';
import Sidebar from './components/Sidebar';
import SingleCourse from './components/SingleCourse';
import { useStateValue } from './context';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import Home from './pages/Home';
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
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login runError={runError} />} />
        <Route path='/register' element={<Register runError={runError} />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  ) : (
    <>
      <Sidebar />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:courseId' element={<SingleCourse />} />
        <Route path='*' element={<Error />}></Route>

        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
