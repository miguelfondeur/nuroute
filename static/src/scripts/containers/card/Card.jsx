// Libs
import React from 'react';

// CSS
import styles from './Card.css';

const Card = (props) => (
  <div className={styles.card}>
    <h2 >{props.name}</h2>
    <h3 className='card-profession'>{props.profession}</h3>
    <p className='card-location'>
      <span>{props.city}</span> |
      <span> {props.state}</span>
    </p>
  </div>
);

const { string } = React.PropTypes;

Card.propTypes = {
  name: string.isRequired,
  profession: string.isRequired,
  city: string.isRequired,
  state: string.isRequired
};

module.exports = Card;
