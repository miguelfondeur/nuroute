// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

// Components
import Landing from '../../containers/landing/Landing.jsx';
import Search from '../../containers/search/Search.jsx';

// CSS
import './app.css';

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
    <Route path='/search' component={Search} />
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
