// Libs
import React from 'react'

// CSS
import './landing.css'

const Landing = () => (
  <div className='landing'>
    <div className='home-info'>
      <h1>Do What you Love</h1>
      <input className='search' type='text' pllaceholder='Search' />
      <button className='browse-all'>or Brouse All</button>
    </div>
  </div>
)

// Export
module.exports = Landing
