// Libs
import React from 'react';

// Components
const Card = require('../card/Card');

// Data
import data from '../../mochs/data.json';

// CSS
import './Search.css';

const Search = () => (
  <div className='container'>
    {data.cards.map((card) => (
      <Card {...card} key={card.ID} />
    ))}
  </div>
);

module.exports = Search;
