// Libs
import React from 'react';

// CSS
import './layout.css';

const Layout = (props) => (
  <div className='app-conatainer'>
    {props.children}
  </div>
);

const { element } = React.PropTypes;

Layout.propTypes = {
  children: element.isRequired
};

module.exports = Layout;
