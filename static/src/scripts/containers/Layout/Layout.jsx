// Libs
import React from 'react';

// CSS
import styles from './Layout.css';

const Layout = (props) => (
  <div className={styles.wrapper}>
    {props.children}
  </div>
);

const { element } = React.PropTypes;

Layout.propTypes = {
  children: element.isRequired
};

module.exports = Layout;
