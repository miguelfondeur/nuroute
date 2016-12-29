// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Components
import Landing from '../../containers/landing/Landing.jsx';
import Search from '../../containers/search/Search.jsx';
import Layout from '../../containers/layout/Layout.jsx';

// CSS
// import styles from './App.css';

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Landing} />
      <Route path='/search' component={Search} />
    </Route>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
