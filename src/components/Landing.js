import React from 'react';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='landing-showcase'>
        <div className='landing-info'>
          <h1>
            <span className='primary'>Learn</span> on your class{' '}
            <span className='secondary '>schedule</span>
          </h1>
          <p>
            {`  Learn and improve skills across business, tech, design, andmore.
            Taught by experts to help your performance and whatever comes next `}
          </p>
        </div>
        <div className='landing-image'>
          <img src={require('../img/landing-page-girl.png')} alt='' />
        </div>
      </div>
      <div className='app-information'>
        <h2>Online courses from 140 top institutions</h2>
        <p>
          Choose from 100,000 online video courses with new editions published
          every month.
        </p>
      </div>
    </section>
  );
};

export default Landing;
