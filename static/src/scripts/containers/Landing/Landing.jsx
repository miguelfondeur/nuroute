// Libs
import React from 'react';
import { Link } from 'react-router';

// CSS
import './landing.css';

const Landing = () => (
  <div className='landing'>
    <div className='home-info'>
      <h1>Do What you Love</h1>
      <input className='search' type='text' placeholder='Search' />
      <Link to='/search' className='browse-all'>or Brouse All</Link>
    </div>
  </div>
);

// Export
module.exports = Landing;
